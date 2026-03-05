document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const statusDisplay = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');

    let selectedPiece = null;
    let currentPlayer = 'white';
    let gameState = initializeGame();

    // Initialize the game
    function initializeGame() {
        const board = Array(8).fill().map(() => Array(8).fill(null));
        
        // Set up pawns
        for (let i = 0; i < 8; i++) {
            board[1][i] = { type: 'pawn', color: 'black' };
            board[6][i] = { type: 'pawn', color: 'white' };
        }
        
        // Set up rooks
        board[0][0] = { type: 'rook', color: 'black' };
        board[0][7] = { type: 'rook', color: 'black' };
        board[7][0] = { type: 'rook', color: 'white' };
        board[7][7] = { type: 'rook', color: 'white' };
        
        // Set up knights
        board[0][1] = { type: 'knight', color: 'black' };
        board[0][6] = { type: 'knight', color: 'black' };
        board[7][1] = { type: 'knight', color: 'white' };
        board[7][6] = { type: 'knight', color: 'white' };
        
        // Set up bishops
        board[0][2] = { type: 'bishop', color: 'black' };
        board[0][5] = { type: 'bishop', color: 'black' };
        board[7][2] = { type: 'bishop', color: 'white' };
        board[7][5] = { type: 'bishop', color: 'white' };
        
        // Set up queens
        board[0][3] = { type: 'queen', color: 'black' };
        board[7][3] = { type: 'queen', color: 'white' };
        
        // Set up kings
        board[0][4] = { type: 'king', color: 'black' };
        board[7][4] = { type: 'king', color: 'white' };
        
        return board;
    }

    // Render the chessboard
    function renderBoard() {
        chessboard.innerHTML = '';
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.className = `square ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;
                square.dataset.row = row;
                square.dataset.col = col;
                
                const piece = gameState[row][col];
                if (piece) {
                    square.textContent = getPieceSymbol(piece);
                    square.style.color = piece.color === 'white' ? '#fff' : '#000';
                }
                
                square.addEventListener('click', () => handleSquareClick(row, col));
                chessboard.appendChild(square);
            }
        }
    }

    // Get Unicode symbol for a piece
    function getPieceSymbol(piece) {
        const symbols = {
            king: { white: '♔', black: '♚' },
            queen: { white: '♕', black: '♛' },
            rook: { white: '♖', black: '♜' },
            bishop: { white: '♗', black: '♝' },
            knight: { white: '♘', black: '♞' },
            pawn: { white: '♙', black: '♟' }
        };
        return symbols[piece.type][piece.color];
    }

    // Handle square clicks
    function handleSquareClick(row, col) {
        const piece = gameState[row][col];
        
        // If a piece is already selected
        if (selectedPiece) {
            const [selectedRow, selectedCol] = selectedPiece;
            
            // If clicking on the same piece, deselect it
            if (selectedRow === row && selectedCol === col) {
                selectedPiece = null;
                renderBoard();
                return;
            }
            
            // Try to move the piece
            if (isValidMove(selectedRow, selectedCol, row, col)) {
                movePiece(selectedRow, selectedCol, row, col);
                selectedPiece = null;
                currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
                statusDisplay.textContent = `${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}'s turn`;
                renderBoard();
            }
        } 
        // If no piece is selected, select this piece if it's the current player's
        else if (piece && piece.color === currentPlayer) {
            selectedPiece = [row, col];
            renderBoard();
            highlightSquare(row, col, 'selected');
        }
    }

    // Check if a move is valid (simplified rules)
    function isValidMove(fromRow, fromCol, toRow, toCol) {
        const piece = gameState[fromRow][fromCol];
        const targetPiece = gameState[toRow][toCol];
        
        // Can't move to a square occupied by your own piece
        if (targetPiece && targetPiece.color === piece.color) {
            return false;
        }
        
        // Simplified movement rules
        switch (piece.type) {
            case 'pawn':
                // Pawns can move forward one square
                const direction = piece.color === 'white' ? -1 : 1;
                if (fromCol === toCol && !targetPiece) {
                    return toRow === fromRow + direction;
                }
                // Pawns can capture diagonally
                if (Math.abs(fromCol - toCol) === 1 && toRow === fromRow + direction && targetPiece) {
                    return true;
                }
                return false;
                
            case 'rook':
                return (fromRow === toRow || fromCol === toCol) && isPathClear(fromRow, fromCol, toRow, toCol);
                
            case 'knight':
                return (Math.abs(fromRow - toRow) === 2 && Math.abs(fromCol - toCol) === 1) || 
                       (Math.abs(fromRow - toRow) === 1 && Math.abs(fromCol - toCol) === 2);
                
            case 'bishop':
                return Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol) && 
                       isPathClear(fromRow, fromCol, toRow, toCol);
                
            case 'queen':
                return (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol) || 
                        fromRow === toRow || fromCol === toCol) && 
                       isPathClear(fromRow, fromCol, toRow, toCol);
                
            case 'king':
                return Math.abs(fromRow - toRow) <= 1 && Math.abs(fromCol - toCol) <= 1;
                
            default:
                return false;
        }
    }

    // Check if the path between two squares is clear
    function isPathClear(fromRow, fromCol, toRow, toCol) {
        const rowStep = fromRow === toRow ? 0 : (fromRow < toRow ? 1 : -1);
        const colStep = fromCol === toCol ? 0 : (fromCol < toCol ? 1 : -1);
        
        let currentRow = fromRow + rowStep;
        let currentCol = fromCol + colStep;
        
        while (currentRow !== toRow || currentCol !== toCol) {
            if (gameState[currentRow][currentCol] !== null) {
                return false;
            }
            currentRow += rowStep;
            currentCol += colStep;
        }
        
        return true;
    }

    // Move a piece on the board
    function movePiece(fromRow, fromCol, toRow, toCol) {
        gameState[toRow][toCol] = gameState[fromRow][fromCol];
        gameState[fromRow][fromCol] = null;
    }

    // Highlight a square
    function highlightSquare(row, col, className) {
        const squares = document.querySelectorAll('.square');
        const index = row * 8 + col;
        squares[index].classList.add(className);
    }

    // Reset the game
    resetBtn.addEventListener('click', () => {
        gameState = initializeGame();
        currentPlayer = 'white';
        selectedPiece = null;
        statusDisplay.textContent = "White's turn";
        renderBoard();
    });

    // Initial render
    renderBoard();
});