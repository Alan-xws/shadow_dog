const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = 'player.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0,frameY = 3;
let staggerframes = 5;
let gameframe = 0;
let actionLen = 10;
let canvasTop = 500;
let canvasLeft = 300;
let action=[{name:"stand",frame:7},
            {name:"jump",frame:7},
            {name:"down",frame:7},
            {name:"run",frame:9},
            {name:"stand",frame:11},
            {name:"stand",frame:5},
            {name:"stand",frame:7},
            {name:"stand",frame:7},
            {name:"stand",frame:12},
            {name:"stand",frame:4}
];

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,spriteWidth * frameX,spriteHeight * frameY,spriteWidth,spriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    if(gameframe % staggerframes == 0){
        frameX++;
        if(frameX == action[frameY].frame){
            frameX = 0;
            // frameY++;
            if(frameY >= actionLen)frameY = 0;
        }
    }
    gameframe++;
    requestAnimationFrame(animate);
};
animate();
let moveLen = 3;
document.addEventListener('keydown', function(event) {
    console.log('Key down:', event.key);
    if(event.key == 'd'){
        frameY = 3;
        moveLen = 3;
        canvasLeft += moveLen;
        canvas.style.left = canvasLeft +"px";
    }else if(event.key == ' '){
        frameY = 6;
        moveLen = 10;
        canvasLeft += moveLen;
        canvas.style.left = canvasLeft +"px";
    }
});