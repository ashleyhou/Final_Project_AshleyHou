let intro;
let degreeOfrot;
let dreamsFolder;
let nightmaresFolder;
let backdrop;
let blueFlower;
let purpleFlower;
let gFlower;
let pFlower;
let degreeReverse = 0;
let yOff = 0.0;
let xMove = 0;
let yMove = 0;
let pointX = 0;
let pointY = 0;

function preload() {

	
}

function setup() {
  // put setup code here
  createCanvas(600, 450);
  intro = true;
  backdrop = true;
  dreamsFolder = new Folder(500, 50);
  nightmaresFolder = new Folder(500, 150);
  degreeOfrot = 0;
  blueFlower = new Flower(0, 0, color(156, 201, 255));
  purpleFlower = new Flower(50,  50, color(206, 156, 255));
  gFlower = new Flower(100, -100, color(167, 255, 166));
  pFlower = new Flower(-200, 200, color(255, 181, 218));

//risesTheMoon = loadSound('rises_the_moon.mp3');

  //video = createCapture(VIDEO);
  //video.size = (600, 450);
  //video.hide();
}

function draw() {
  // put drawing code here
  console.log(millis());
  
  
  if (intro) {
  	openingScene();
  }
  else if(millis() < 17000) {
  	mindBackdrop();
  	//xdrawFolders();
  }
  else if (millis() < 50000){
  	nightmareScene();
  }
  
  
  //drawFolders();
  //dreamScene();
  //nightmareScene();
  //darkness();
  //light();
}

function openingScene() {
	background(66, 140, 245);
	fill(255);
	textSize(30);
	textAlign(CENTER);
	if (millis() < 3000) {
		text('welcome to my mind.', width/2, height/2);
	}
	else if (millis() < 6000) {
		text('take a little tour.', width/2, height/2);
	}
	else if (millis() < 10000 ) {
		text('see you soon.', width/2, height/2);
	}
	else {
		intro = false;
	}
}

function mindBackdrop() {
	background(0);
	noStroke();
	rectMode(CENTER);
	push();
	translate(p5.Vector.fromAngle(millis() / 1000, 40));
	//rotate((degreeOfrot));
	for (let x = -100; x < width+100; x+= 20) {
    	for (let y = -100; y < height+100; y+= 20) {
      		//fill(mouseY/3, mouseX-((x+y)/2), (mouseY+mouseX)/2, 100);
      		fill(mouseX/2, mouseY/2, (mouseX+mouseY)/2, 50);
      //fill(y, y-x-50, x-50);
      //stroke(y, y-x, x-50);
      		rect(x, y, 50, 50);
    	}
  }
  for ( g = -110; g < width+100; g += 20) {
  	for ( h = -110; h < height+100; h += 20) {
  		fill(mouseX/2 + 32, h/2 + 12, g-mouseY-20, 30);
  		rect(g, h, 50, 50);
  	}
  }
  pop();
  drawFolders();
  //backdrop = false;

}

function drawFolders() {
	translate(0,0);
	dreamsFolder.display();
	textSize(12);
	fill(255);
	text('dreams&nightmares', 512, 100);
	

	
	//nightmaresFolder.display();
	//fill(255);
	//text('nightmares', 503, 200);

	//dreamsFolder.mousePressed(dreamScene();
	//nightmaresFolder.mousePressed(nightmareScene());
}

function dreamScene() {
	
	//risesTheMoon.play();
  
	stroke(0);
	strokeWeight(3);
	background(142, 214, 245);
	fill(0);
	
	push();
	translate(0,0);
	rotate(degreeOfrot);
	degreeOfrot += .01;
	fill(255, 163, 249);
	ellipse(0, 0, 1000, 1000);

	stroke(230, 140, 223);
	noFill();
	ellipse(0, 0, 900, 900);
	ellipse(0, 0, 850, 850);
	ellipse(0, 0, 700, 700);
	ellipse(0, 0, 675, 675);
	ellipse(0, 0, 550, 550);
	ellipse(0, 0, 500, 500);
	ellipse(0, 0, 400, 400);
	ellipse(0, 0, 450, 450);

	blueFlower.display();
	purpleFlower.display();
	text(0,0)
	noStroke();
	fill(255, 220, 92);
	ellipse(0, 0, 300, 300);
	fill(0);
	textSize(20);
	text('to experience', 10, 20);
	text('not to observe', 10, -20);

	pop();

	rect(400, 75, 200, 20);
	triangle(400, 95, 420, 95, 410, 120);
}

function nightmareScene() {
	background(0);

	background(255, 10);
	push();
	translate(width/2, height/2);
	rotate(degreeOfrot);
	degreeOfrot+=1;
	fill(0, 50);
	beginShape();

  let xoff = 0; 
  for (let x = 0; x <= height; x += 10) {

    let y = map(noise(xoff, yOff), 0, 1, 200, 300);


    vertex(x, y);
    xoff += 0.05;
  }
  yOff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 100; j++) {
			fill(random(8*i, 8*j), random(8*i, 8*j), random(8*i, 8*j), 8);
			rect(i, j, 50, 50);

		}
	}
	pop();
	/*

	push();
	translate(width/2, height/2);
	rotate(degreeReverse);
	degreeReverse -= 10;
	let angle1 = random(0, 2 * PI);
  	let xpos1 = 200 + 200 * cos(angle1);
  	let ypos1 = 200 + 200 * sin(angle1);

  	// find another random point on the circle
  	let angle2 = random(0, 2 * PI);
  	let xpos2 = 200 + 200 * cos(angle2);
  	let ypos2 = 200 + 200 * sin(angle2);

 	 // draw a line between them
 	 fill(0);
 	 line(xpos1, ypos1, xpos2, ypos2);
 	 //rect(ypos1, xpos2, ypos2, xpos1);

 	 pop();
 	 */

 	 if (millis() > 30000) {
 	 	darkness();
 	 }
 	 
}

function darkness() {
	background(0);

		for (let a = 0; a < width; a += 10){
		for (let b = 0; b < height; b += 20) {
			fill(255, 20);
			rect(b+a + yMove, b-a +xMove, 50, 50);
			fill((a+b)/2, (b-a)/2, a, 20)
			rect(b-a + xMove, b+a +yMove, 50, 50);
		}
	}
	xMove += .4;
	yMove-= .4;
	if (millis() > 35000) {
		light();
	}
}

function light() {
	background(255);
	let gridSize = 35;

  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(0);
      //rect(x - 1, y - 1, 3, 3);
      strokeWeight(10);
      stroke(int(millis()/50)-29000, y-100, (x+y/2), 50);
      line(x+ xMove, y+ yMove, pointX, pointY);
    }
  }
  pointX += 1;
  pointY += 1;
push();
  for (let i = 0; i <100; i += 17){
    for(let j = 0; j < 100; j+=30) {
      translate(width/2, height/2);
      rotate(degreeReverse);
      degreeReverse-= .2;
      fill(mouseY/2, mouseX/2, (mouseX+mouseY)/2, 25);
      stroke(255);
      //noStroke();
      ellipse(i, j, (i+j)/2);
      //drawShape(j, i, 20);
    }
  }
  pop();

  if (millis() > 44000) {
  	closing();
  }

}

function closing() {
	background(66, 140, 245);
	fill(255);
	textSize(30);
	textAlign(CENTER);
	if (millis() < 47000) {
		text('the end', width/2, height/2);
	}

}
/*

function mousePressed() {
	
	if (mouseX > 500 && mouseX < 565) {
  		if (mouseY > 50 && mouseY < 90) {
  			console.log('in the dream');
  			backdrop = false;
  			dreamScene();
  		}
  		else if (mouseY > 150 && mouseY < 190) {
  			console.log('in the nightmare');
  			backdrop = false;
  			nightmareScene();
  		}
  	}
  	
}
*/

