// Shortcut functions
function stroke(color) {
  ctx.strokeStyle = color;
}

function fill(color) {
  ctx.fillStyle = color;
}

function lineWidth(width) {
  ctx.lineWidth = width;
}

function font(fontSetting) {
  ctx.font = fontSetting;
}


// Draw rectangles
function drawPlatform(x, y, w, h, color) {
  fill(color);
  rect(x + 50, y + 50, w + 70, h + 20, "fill");
}

function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}


// Draw a stickman
function drawStickman1(x, y, color) {
 
  stroke(color);
  circle(x + 20, y + 20, 20, "stroke"); // Head
  line(x + 20, y + 40, x + 20, y + 80); // Body
  line(x + -10, y + 50, x + 20, y + 50); // Left Arm
  line(x + 40, y + 40, x + 20, y + 50); // Right Arm
  line(x, y + 110, x + 20, y + 80); // Left Leg
  line(x + 40, y + 70, x + 20, y + 80); // Right Leg
}
function drawStickman2(x, y, color) {
 
  stroke(color);
  circle(x + 20, y + 20, 20, "stroke"); // Head
  line(x + 20, y + 40, x + 20, y + 80); // Body
  line(x, y + 70, x + 20, y + 50); // Left Arm
  line(x + 40, y + 40, x + 20, y + 50); // Right Arm
  line(x, y + 110, x + 20, y + 80); // Left Leg
  line(x + 40, y + 70, x + 20, y + 80); // Right Leg
}


function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
      ctx.fill();
  } else if (mode === "stroke") {
      ctx.stroke();
  }
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
}

// draw a circle

function drawCircle(x, y, color) {
  fill(color);
  circle(x + 20, y + 20, 35, "fill"); 

}

// Draw a sword

function drawSword(x, y, color) {
  stroke(color);
  line(x + 10, y + 45, x + 30, y + 45);
  line(x + 20, y + 60, x + 20, y + 5)
}




