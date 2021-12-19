
class Folder {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	display() {
		rectMode(CORNER);
		noStroke();
		//fill(66, 135, 245);
		fill(125, 207, 255);
		rect(this.x, this.y, 65, 40);
		rect(this.x, this.y - 5, 20, 10, 20);
	}

}

class Trash {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	display() {
		fill(200);
		noStroke();
		beginShape();
		vertex(this.x, this.y);
		vertex(this.x + 60, this.y);
		vertex(this.x + 50, this.y + 70);
		vertex(this.x + 10, this.y + 70);
		endShape();
		fill(222);
		ellipse(this.x + 30, this.y, 60, 15);
	}
}

class Mouse {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	display() {
		strokeWeight(2);
		stroke(0);
		fill(255);
		beginShape();
		vertex(this.x + 1, this.y + 6); //1
		vertex(this.x + 32 -3, this.y + 40 -3); //2
		vertex(this.x + 17 -3, this.y + 38-3); //3
		vertex(this.x + 26 -3, this.y + 60-3); //4
		vertex(this.x + 19 -3, this.y + 63-3); //5
		vertex(this.x + 10-3, this.y + 40-3); //6
		vertex(this.x -3, this.y + 50 -3); //7
		vertex(this.x + 1, this.y + 6)
		endShape();
	}

}


