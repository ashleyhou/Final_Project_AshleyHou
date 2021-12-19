/*
I really wanted to use images for this project but I kept running into problems with my brower security
so i just decided to recreate the images using code
*/

let intro = true;
let dreamFolder = new Folder(870, 70);
let nightmareFolder = new Folder(870, 150);
let reflectionFolder = new Folder(870, 230);
let curser;
let curserXrate, curserYrate;
let desktopBool = false;
let reflectBool = false;
let dreamBool = false;
let nightmareBool = false;
let trashBool = false;
let spin = 0;

let trashCan;
let reflection;
let reflectionIMG;

let diameter = 400;
let angle = 0;

let yoff = 0.0;

function setup() {
  // put setup code here
  createCanvas(1000, 600);
  trashCan = new Trash(900, 500);
  curserXrate = 0;
  curserYrate = 0;
  reflection = createCapture(VIDEO);
  //reflection.size(900, 500);
  reflection.hide();

}

function draw() {
  // put drawing code 
  if (intro) {
  	openingScene();
  }
  if (desktopBool) {
  	desktop();
  }
  if (reflectBool) {
  	reflect();
  }
  if (dreamBool) {
  	dream();
  }
  if (nightmareBool) {
  	nightmare();
  }
  if (trashBool) {
  	trash();
  }
  //reflect();
  //dream();
  //nightmare();
  //trash(); 
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
	else if (millis() < 10000) {
		text('see you again soon.', width/2, height/2);
	}
	else {
		intro = false;
		desktopBool = true;
	}
}

/*
Originally I wanted this to be a noninteractive narrative but the more I worked on it the morea I realized that 
I wanted the user to explore my mind for themselves instead of me having to tell who i am.
I think a part of identity is also defined by how others perceive because they way i think of myself
doesn't also align with how others perceive me and vice versa. there is no true singular identity

also the desktop looks exactly like my real life laptop desktop. exept with different folder names obviously
*/

function desktop() {
	//image(wallpaper, 0, 0); 
	curser = new Mouse(mouseX, mouseY);

	background(201, 242, 219);
	trashCan.display();
	dreamFolder.display();
	reflectionFolder.display();
	nightmareFolder.display();
	fill(0);
	noStroke();
	textSize(10);
	textAlign(CENTER);
	text("dreams", 902, 120);
	text("nightmares", 902, 200);
	text("reflect", 902, 280);
	text("trash", 932, 580);
	curser.display();
	if (mouseIsPressed && mouseX <= 935 && mouseX >= 870 && mouseY >= 70 && mouseY <= 110) {
		desktopBool = false;
		dreamBool = true;
	}
	if (mouseIsPressed && mouseX <= 935 && mouseX >= 870 && mouseY >= 150 && mouseY <= 190) {
		desktopBool = false;
		nightmareBool = true;
	}
	if (mouseIsPressed && mouseX <= 935 && mouseX >= 870 && mouseY >= 230 && mouseY <= 270) {
		desktopBool = false;
		reflectBool = true;
		//reflect();
	}
	if (mouseIsPressed && mouseX >= 900 && mouseX <= 960 && mouseY >= 500 && mouseY <= 570) {
		desktopBool = false;
		trashBool = true;
	}
	
}

/*
I wanted this scene to seem fairy-like, almost like its dancing. I wanted to use sin and cosine so that there is so element
of harmony. I like the way it evolves and grows because I think what I really dream of is being a person
who is dynamic and everchanging but beautiful in their growth and change.
*/

function dream() {
	background(255);
	noStroke();

	for (let x = -100; x < width+100; x+= 20) {
    	for (let y = -100; y < height+100; y+= 20) {
      		//fill(mouseY/3, mouseX-((x+y)/2), (mouseY+mouseX)/2, 100);
      		fill(mouseX/2, mouseY/2, (mouseX+mouseY)/2, 10);
      //fill(y, y-x-50, x-50);
      //stroke(y, y-x, x-50);
      		rect(x, y, 50, 50);
    	}
  }
  for ( g = -110; g < width+100; g += 20) {
  	for ( h = -110; h < height+100; h += 20) {
  		fill(mouseX/2 + 32, h/2 + 12, g-mouseY-20, 10);
  		rect(g, h, 50, 50);
  	}
  }

	
	let d1 = 10 + (sin(angle) * diameter) / 4 + diameter / 2;
  	let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  	let d3 = 10 + (cos(angle + PI) * diameter) / 4 + diameter / 2;

  	let e1 = 10 + (cos(angle) * diameter) / 2 + diameter / 2;
  	let e2 = 10 + (cos(angle + PI / 2) * diameter) / 2 + diameter / 2;
  	let e3 = 10 + (cos(angle + PI) * diameter) / 2 + diameter / 2;

  	push();
  	translate(width/2, height/2);
  	rotate(spin);
  	spin+=.18;
  	fill(101, 41, 255, 80);
  	ellipse(e1, height / 2, d2, d1);
  	ellipse(e1 + width, height, d1, d3);
  	ellipse(e1, 0, d1, d2);
  	ellipse(e1 - width, height / 2, d2, d1);
  	ellipse(e1 - width, -height, d1, d3);
  	ellipse(e1 - width, 0, d1, d2);

  	fill(21, 255, 0, 80);
	ellipse(width, d2, e1, e3);
  	ellipse(width/3, d2, e3, e2);
  	ellipse(width/3, d2, e2, e2);

	ellipse(width/2 - e1, d2, e1, e3);
  	ellipse(width/2 + e3, d2, e3, e2);
  	ellipse(width/2 + d2, d2, e2, e2);

  	fill(245, 49, 225, 50);
  	ellipse(e3, d1, d3, d2);
  	ellipse(e3 + width, d1, d2, d1);
  	ellipse(e3, 0, d2, d2);

  	fill(49, 150, 245, 50);
	ellipse(width, d3 - height, e1, e3);
  	ellipse(width, 0, e2, d3);
  	ellipse(width, e1 - width, e3, d3);

  	fill(255, 0, 106, 70);
  	ellipse(e3, height / 2, d2, d3);
  	ellipse(e2, 0, d3, d2);
  	ellipse(e1, height, d1, d2);
  	ellipse(e3 - width, height / 2, d2, d3);
  	ellipse(e2 - width, 0, d3, d2);
  	ellipse(e1 - width, height, d1, d2);

  	pop();

  	angle += .02;
  	stroke(170);
	strokeWeight(3);
	fill(200);
	rectMode(CORNER);
	rect(55, 45, 30, 30);
	line(60, 50, 80, 70);
	line(80, 50, 60, 70);
  	if (mouseIsPressed && mouseX <= 85 && mouseX >= 55 && mouseY <= 75 && mouseY >= 45) {
		desktopBool = true;
		dreamBool = false;
		desktop();
	}
	
}


/*
this scene is meant to be symbolic of my fear of being trapped. i wanted to create a cage like, claustrophobic
feeling, like there were strings tying you down. 
*/
function nightmare() {
	background(0);
stroke(255, 0, 0);
  fill(100, 0);
  for (let x = 0; x <= width; x += 30) {
  	for (let y = 0; y <= height; y += 30) {
  		rect(x, y, 50, 50);
  	}
  }

	stroke(255);
	fill(255, 100);
  beginShape();
  let xoff = 0; 
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, .3, 200, 300);
    vertex(x, y);
    vertex(0, height);
    xoff += 0.05;
  }
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, .2, 200, 300);
    vertex(y, x);
    vertex(width, height);
    xoff += 0.05;
  }
  for (let y = 0; y <= height; y += 10) {
    let x = map(noise(xoff, yoff), 0, .2, 200, 300);
    vertex(y, x);
    vertex(width, 0);
    xoff += 0.05;
  }
  for (let y = 0; y <= height; y += 10) {
    let x = map(noise(xoff, yoff), 0, .3, 200, 300);
    vertex(x, y);
    vertex(0, 0);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);


	stroke(155);
	strokeWeight(3);
	fill(200);
	rectMode(CORNER);
	rect(55, 45, 30, 30);
	line(60, 50, 80, 70);
	line(80, 50, 60, 70);
  	if (mouseIsPressed && mouseX <= 85 && mouseX >= 55 && mouseY <= 75 && mouseY >= 45) {
		desktopBool = true;
		nightmareBool = false;
		desktop();
	}

}

/*
this part is supposed to be symbolic of two things: a constant need to be liked by others and a part
of my personality is just a reflection of the people i'm around, and my tendency to romantacize the past
when i reflect on events
*/

function reflect() {
	background(201, 242, 219);
	rectMode(CENTER);
	fill(200);
	noStroke();
	rect(width/2, height/2, 900, 520)
	tint(242, 145, 208);
	image(reflection, 70, 60);
	image(reflection, 730, 60, 200, 150);
	image(reflection, 730, 230, 200, 150);
	image(reflection, 730, 400, 200, 150);
	/*
	I was trying to edit pixel by pixel but it wasn't working out :(
	loadPixels();
	reflection.loadPixels();
	for (let y = 0; reflection.height; y++) {
		for (let x = 0; reflection.width; x++) {
			let loc = (x + y * reflection.width)*4;

			let r = reflection.pixels[loc];
			let g = reflection.pixels[loc+1];
			let b = reflection.pixels[loc+2];

			pixels[loc] = r;
			pixels[loc+1] = g;
			pixels[loc+2] = b;
		}
	}
	updatePixels();
	*/
	stroke(0);
	strokeWeight(3);
	fill(115);
	rectMode(CORNER);
	rect(55, 45, 30, 30);
	line(60, 50, 80, 70);
	line(80, 50, 60, 70);
	if (mouseIsPressed && mouseX <= 85 && mouseX >= 55 && mouseY <= 75 && mouseY >= 45) {
		desktopBool = true;
		reflectBool = false;
		desktop();
	}
	//curser.display();

}

/*
the "trash" is symbollic of the things I let go in life, both good and bad, hence the black and white circles
but i because I am still an optimistic person, its hard for me to let go hope. thats why i put so much color 
in the trash. I also wanted it to in some ways symbolize the back and forth of regret i go through when 
i do let go. Even if i am happy, i can't help but wonder what could've happened if i didn't let go
*/

function trash() {
	background(0, 0, 255);
	noStroke();
	for (let x = -100; x < width+100; x+= 20) {
    	for (let y = -100; y < height+100; y+= 20) {
      		fill(mouseY/3, mouseX-((x+y)/2), (mouseY+mouseX)/2, 100);
      		//fill(mouseX/2, mouseY/2, (mouseX+mouseY)/2, 10);
      //fill(y, y-x-50, x-50);
      //stroke(y, y-x, x-50);
      		rect(x, y, 50, 50);
    	}
  }
  for ( g = -110; g < width+100; g += 20) {
  	for ( h = -110; h < height+100; h += 20) {
  		fill(mouseX/2 + 32, h/4 + 12, g-mouseY-20, 50);
  		rect(g, h, 50, 50);
  	}
  }

  stroke(255);
  strokeWeight(1);
  fill(0,0)
  /*
  let d1 = 10 + (sin(angle) * 1000) / 2 + 1000 / 2;
  let d2 = 10 + (sin(angle) * 2000) / 2 + 2000 / 2;
  let d3 = 10 + (sin(angle) * 500) / 2 + 500 / 2;
  let d4 = 10 + (sin(angle) * 700) / 2 + 700 / 2;
  ellipse(width/2, height/2, d1);
  ellipse(width/2, height/2, d2);
  ellipse(width/2, height/2, d3);
  ellipse(width/2, height/2, d4);
  */

  for (let i = 0; i <= 3000; i += 100) {
  	let d = 10 + (sin(angle) * i) / 2 + i / 2;
  	ellipse(width/2, height/2, d);
  }

  stroke (0);
  for (let i = 50; i <= 3000; i += 100) {
  	let d = 10 + (sin(angle) * i) / 2 + i / 2;
  	ellipse(width/2, height/2, d);
  }
  angle += .01;

	stroke(0);
	strokeWeight(3);
	fill(115);
	rectMode(CORNER);
	rect(55, 45, 30, 30);
	line(60, 50, 80, 70);
	line(80, 50, 60, 70);
	if (mouseIsPressed && mouseX <= 85 && mouseX >= 55 && mouseY <= 75 && mouseY >= 45) {
		desktopBool = true;
		trashBool = false;
		desktop();
	}
}



