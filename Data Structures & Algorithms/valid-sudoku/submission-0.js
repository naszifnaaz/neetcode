class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        //check all rows for duplicates
        for(let row = 0; row < 9; row++) {
            let rowMap = {};
            for(let i = 0; i < 9; i++) {
                let val = board[row][i];
                if(val == ".")
                    continue;
                
                if(rowMap[val])
                    return false;
                
                rowMap[val] = true;
            }
        }

        //check all cols for duplicates
        for(let col = 0; col < 9; col++) {
            let colMap = {};
            for(let i = 0; i < 9; i++) {
                let val = board[i][col];
                
                if(val == ".")
                    continue;
                
                if(colMap[val])
                    return false;
                
                colMap[val] = true;
            }
        }

        //check all 3*3 grids for duplicates
        for(let grid = 0; grid < 9; grid++){
            let gridMap = {};
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    let row = Math.floor(grid / 3) * 3 + i;
                    let col = (grid % 3) * 3 + j;
                    let val = board[row][col];

                    if(val == ".")
                        continue;
                    
                    if(gridMap[val])
                        return false;
                    
                    gridMap[val] = true;
                }
            }
        }

        return true;
    }
}
