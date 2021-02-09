// Draw functions assignment
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// Top left platform
drawPlatform(30, 90, 70, 20, "green"); // Top part
drawPlatform(30, 100, 70, 20, "red"); // Bottom part

// Bottom right platform
drawPlatform(500, 390, 100, 40, "red"); // Top part
drawPlatform(500, 400, 100, 40, "blue"); // Bottom part

// Stickmen
drawStickman1(200, 35, "black"); // Stickman jumping off
drawStickman2(510, 400, "black"); // Stickman climbing up


// Sun 
drawCircle(500, 20, "orange");

// Sword
drawSword(580, 380, "green");
drawSword(170, 30, "orange");


