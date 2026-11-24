/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = Array.from({length:9},()=> new Set());
    let col = Array.from({length:9},()=> new Set());
    let box = Array.from({length:9},()=> new Set());

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j] === "."){
                continue;
            }
            boxIndx = Math.floor(i/3)*3+Math.floor(j/3);

            if(row[i].has(board[i][j]) || col[j].has(board[i][j]) || box[boxIndx].has(board[i][j])){
                return false;
            }
            row[i].add(board[i][j]);
            col[j].add(board[i][j]);
            box[boxIndx].add(board[i][j]);

        }
    }
    return true;
};