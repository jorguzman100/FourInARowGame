class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    
    /* 
     * Generates 2D array of space
     * @return {array} An array of space objects
     */
    createSpaces() {
        let spaces = [];

        for(let x = 0; x < this.columns; x++) {
            const column = [];

            for(let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }

        return spaces;
    }

    /**
     * Draw associated SVF spaces for all game spaces.
     * Iterate through the 2D array of space objects and call the drawSVGSpace() method.
     */
    drawHTMLBoard() {
        for(let column of this.spaces) {
            for(let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}