const laneArray = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];
let laneNum;
let speed = 0.5;
let score1;
let rainbowColor;
let myXPos = 600;
let myYPos = 650;
let lengthOfRoad = 1000;
let playerStep;
let myLeft, myRight, myTop, myBottom;
let vehicleLeft, vehicleRight, vehicleTop, vehicleBottom;
let vehicles = [];
let vehicleSpeed = 2;
let vehicleLength;
let setColor;
let xPosSet1 = 0;// Starting pos for the blue boxes
let xPosSet2 = -200; 
let xPosSet3 = -400; 
let xPosSet4 = -600; 
let xPosSet5 = -800; 
let xPosSet6 = -1000;
let numRows = 12;
let state;

function setup() {
  createCanvas(1000, 700);
  roadArray = [];
  score1 = 0;    

  map1(lengthOfRoad); // Draw the initial map
  vehicleLength = random(50, 200);
  fill(0);
  setColor = color(0, 0, 255);

}

function checkCollision(x, y, w, h) {
  // Function to check collision between player and blue box at given x, y coordinates, width, and height
  if (
    myRight > x -1 &&
    myLeft < x + w -1 &&
    myBottom > y -1 &&
    myTop < y + h -1
  ) {
    return true; // Collision detected
  }
  return false; // No collision
}

function map1(lengthOfRoad) {
  rainbowColor = color(random(0), random(0), random(0));
  fill(rainbowColor);
  rect(0, 0, lengthOfRoad, 50);
  fill(255);
  textSize(50);
  text('CHECKPOINT!!!', 280, 42);

  fill(128, 128, 128); // Road with cars
  rect(0, 50, lengthOfRoad, 50);
  rect(0, 150, lengthOfRoad, 50);
  rect(0, 250, lengthOfRoad, 50);
  rect(0, 400, lengthOfRoad, 50);
  rect(0, 550, lengthOfRoad, 50);
  rect(0, 100, lengthOfRoad, 50);
  rect(0, 200, lengthOfRoad, 50);
  rect(0, 300, lengthOfRoad, 50);
  rect(0, 450, lengthOfRoad, 50);
  rect(0, 500, lengthOfRoad, 50);
  rect(0, 600, lengthOfRoad, 50);

  fill(0, 240, 0); // Starting area and grass area to stop
  rect(0, 350, lengthOfRoad, 50);
  rect(0, 650, lengthOfRoad, 50);
  fill(255);
  textSize(40);
  text('Start: move to the checkpoint without being hit by a car', 10, 691);
  
}

function draw() {
 
    let isColliding = false; // command to check if collision is detected

  for (let i = 0; i < numRows; i++) {
    if (checkCollision(xPosSet1, 100 + i * 150, 100, 50)) {
      isColliding = true;
      break; // Exit the loop once collision is detected
    }
  }

  // Check collisions with the second set of blue boxes
  if (!isColliding) {
    for (let i = 0; i < numRows; i++) {
      if (checkCollision(xPosSet2, 100 + i * 100, 100, 50)) {
        isColliding = true;
        break; 
      }
    }
  }

  // Check collisions with the third set of blue boxes
  if (!isColliding) {
    for (let i = 0; i < numRows; i++) {
      if (checkCollision(xPosSet3, 100 + i * 200, 100, 50)) {
        isColliding = true;
        break; 
      }
    }
  }

  // Check collisions with the fourth set of blue boxes
  if (!isColliding) {
    for (let i = 0; i < numRows; i++) {
      if (checkCollision(xPosSet4, 100 + i * 250, 100, 50)) {
        isColliding = true;
        break; 
      }
    }
  }

  // Check collisions with the fifth set of blue boxes
  if (!isColliding) {
    for (let i = 0; i < numRows; i++) {
      if (checkCollision(xPosSet5, 100 + i * 150, 100, 50)) {
        isColliding = true;
        break; 
      }
    }
  }

  // Check collisions with the sixth set of blue boxes
  if (!isColliding) {
    for (let i = 0; i < numRows; i++) {
      if (checkCollision(xPosSet6, 100 + i * 100, 100, 50)) {
        isColliding = true;
        break; 
      }
    }
  }

  // If there is a collision, reset player position
  if (isColliding) {
    myXPos = 600;
    myYPos = 650;
  }

  background(220);
  map1(lengthOfRoad);

  // Draw blue boxes in the first set of rows
  for (let i = 0; i < numRows; i++) {
    drawBlueBox(xPosSet1, 100 + i * 150);
  }

  // Move the first set of blue boxes to the right
  xPosSet1 += 3;

  // Loop the first set of blue boxes back to the left when they go off the right boundary
  if (xPosSet1 > 1100) {
    xPosSet1 = -100;
  }

  // Draw blue boxes in the second set of rows
  for (let i = 0; i < numRows; i++) {
    drawBlueBox(xPosSet2, 100 + i * 100);
  }

  // Move the second set of blue boxes to the right
  xPosSet2 += 5;

  // Loop the second set of blue boxes back to the left when they go off the right boundary
  if (xPosSet2 > 1200) {
    xPosSet2 = -200;
  }

  // Draw blue boxes in the third set of rows
  for (let i = 0; i < numRows; i++) {
    drawBlueBox(xPosSet3, 100 + i * 200);
  }

  // Move the third set of blue boxes to the right
  xPosSet3 += 2;

  // Loop the third set of blue boxes back to the left when they go off the right boundary
  if (xPosSet3 > 1300) {
    xPosSet3 = -400;
  }

  // Draw blue boxes in the fourth set of rows
  for (let i = 0; i < numRows; i++) {
    drawBlueBox(xPosSet4, 100 + i * 250);
  }

  // Move the fourth set of blue boxes to the right
  xPosSet4 += 4;

  // Loop the fourth set of blue boxes back to the left when they go off the right boundary
  if (xPosSet4 > 1400) {
    xPosSet4 = -600;
  }

  // Draw blue boxes in the fifth set of rows
  for (let i = 0; i < numRows; i++) {
    drawBlueBox(xPosSet5, 100 + i * 150);
  }

  // Move the fifth set of blue boxes to the right
  xPosSet5 += 6;

  // Loop the fifth set of blue boxes back to the left when they go off the right boundary
  if (xPosSet5 > 1500) {
    xPosSet5 = -800;
  }

  // Draw BlueBox sixth set of rows
  for (let i = 0; i < numRows; i++) {
    drawBlueBox(xPosSet6, 100 + i * 100); // Vertical
  }

  // Move the sixth set of blue boxes to the right
  xPosSet6 += 5;

  // Loop the sixth set of blue boxes back to the left when they go off the right boundary
  if (xPosSet6 > 1600) {
    xPosSet6 = -1000;
  }

  // Draw player
  fill(240, 0, 0);
  rect(myXPos, myYPos, 50, 50);

  // Character Hitbox
  myLeft = myXPos - 25;
  myRight = myXPos + 25;
  myTop = myYPos - 25;
  myBottom = myYPos + 25;

  // X-Barrier/ Border
  if(myXPos > 1000 || myXPos < 0) {
    myXPos = 600;
    myYPos = 650;
  }

  if (myYPos < 50) {
    score1++;
    myXPos = 600;
    myYPos = 650;
  }

  // Final Screen once score = 20
    if(score1 === 20) {
    background (random(255), random(255), random(255));
    fill(255);
    textSize(45);
    text("CONGRATULATIONS ON BEATING THE GAME!!!", 0, 350);
  }

  // Score Boardgit
  fill(255);
  textSize(30);
  text("Score: " + score1, 100, 50); 
}


function drawBlueBox(x, y) {
  // Function to draw a blue box at given x and y coordinates
  fill(setColor);
  rect(x, y, 100, 50);
}

function keyPressed() {
  playerStep = 50;

  if (keyCode === LEFT_ARROW) {
    myXPos -= playerStep;
  } else if (keyCode === RIGHT_ARROW) {
    myXPos += playerStep;
  } else if (keyCode === UP_ARROW) {
    myYPos -= playerStep;
  } else if (keyCode === DOWN_ARROW) {
    myYPos += playerStep;
  }
}
