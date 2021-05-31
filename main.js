// Bubble Objects by Omar Elshimi (Associative Arrays - property: value pairs)
initGraphics("my-canvas", 800, 600);

let bubbles = [];
bubbles.push(newBubble(400, 300, 25, "red"));
bubbles.push(newBubble(400, 300, 25, "blue"));
bubbles.push(newBubble(400, 300, 25, "green"));
bubbles.push(newBubble(400, 300, 25, "orange"));
bubbles.push(newBubble(400, 300, 25, "purple"));

requestAnimationFrame(draw);
function draw() {
   for (let i = 0; i < bubbles.length; i++) {
       moveBubble(bubbles[i]);
       drawBubble(bubbles[i]);  
   }

    requestAnimationFrame(draw);
}

function newBubble(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };
}

function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, "fill");
}

function moveBubble(aBubble) {
    aBubble.x += randomDec(-2, 2);
}