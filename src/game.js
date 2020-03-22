export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playfield = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    activePiece ={
        x: 0,
        y: 0,
        bloks: [
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ]
    }

    movePieceLeft() {
        this.activePiece.x -= 1;

        if(this.isPieceOutOfBounds()) {
            this.activePiece.x += 1;
        }
    }

    movePieceRight() {
        this.activePiece.x += 1;

        if(this.isPieceOutOfBounds()) {
            this.activePiece.x -= 1;
        }
    }

    movePieceDown() {
        this.activePiece.y += 1;

        if(this.isPieceOutOfBounds()) {
            this.activePiece.y -= 1;
        }
    }
    isPieceOutOfBounds() {
        const playfield = this.playfield;
        const {x,y} = this.activePiece;

        return playfield[y] === undefined || playfield[y][x] === undefined;

    }
}