


const auto = {
	brand: 'BMV',
	speed: 0,
	engine: false,
	maxSpeed: 140,

}

function startEngine(car) {
	if (!car.engine) {
		car.engine = true;
		console.log("Start");
	}
	else {
		console.log("Silnik już byl odpalony")
	}
}

function stopEngine(car) {
	if (car.speed === 0) {
		car.engine = false;
		console.log('Silnik zgaszony');
	}
	else {
		console.log('naiperw zwolnij ,zanim zgasic');
	}
}

function speedUp(car, amount) {
	if (car.engine) {
		car.speed = Math.min(car.speed + amount, car.maxSpeed);
		console.log(`Twoja prendkosc to: ${car.speed}`)
	}

	else {
		console.log("This is imposible because the engine is Off");
	}
}
function slowDown(car, amount) {
	car.speed = Math.max(car.speed - amount, 0);
	console.log(`Twoja prendkosc to: ${car.speed}`);
}




function createAuto(brand, maxSpeed) {
	return {
		brand,
		speed: 0,
		engine: false,
		maxSpeed
	}
}
let bmw = createAuto('bmw', 150);
startEngine(bmw);
speedUp(bmw, 30);













function CreateAuto(brand, maxSpeed) {
	this.brand = brand;
	this.speed = 0;
	this.engine = false;
	this.maxSpeed = maxSpeed;
}


CreateAuto.prototype.startEngine = function () {
	if (!this.engine) {
		this.engine = true;
		console.log("Start")
	}
	else {
		console.log("Silnik już byl odpalony")
	}
}

CreateAuto.prototype.stopEngine = function () {
	if (this.speed === 0) {
		this.engine = false;
		console.log('Silnik zgaszony');
	}
	else {
		console.log('naiperw zwolnij ,zanim zgasic');
	}
}

CreateAuto.prototype.speedUp = function (amount) {
	if (this.engine) {
		this.speed = Math.min(car.speed + amount, this.maxSpeed);
		console.log(`Twoja prendkosc to: ${this.speed}`)
	}

	else {
		console.log("This is imposible because the engine is Off");
	}
}
CreateAuto.prototype.slowDown = function (amount) {
	this.speed = Math.max(this.speed - amount, 0);
	console.log(`Twoja prendkosc to: ${this.speed}`);
}





let mers = new CreateAuto('mers', 200);

class Autoclass {
	constructor(brand, maxSpeed) {
		this.brand = brand;
		this.speed = 0;
		this.engine = false;
		this.maxSpeed = maxSpeed;
	}
	startEngine() {
		if (!this.engine) {
			this.engine = true;
			console.log("Start")
		}
		else {
			console.log("Silnik już byl odpalony")
		}
	}

	stopEngine() {
		if (this.speed === 0) {
			this.engine = false;
			console.log('Silnik zgaszony');
		}
		else {
			console.log('naiperw zwolnij ,zanim zgasic');
		}
	}

	speedUp(amount) {
		if (this.engine) {
			this.speed = Math.min(car.speed + amount, this.maxSpeed);
			console.log(`Twoja prendkosc to: ${this.speed}`)
		}

		else {
			console.log("This is imposible because the engine is Off");
		}
	}
	slowDown(amount) {
		this.speed = Math.max(this.speed - amount, 0);
		console.log(`Twoja prendkosc to: ${this.speed}`);
	}
}

let clasAuto = new Autoclass('classAuto', 500);
console.log(clasAuto);
clasAuto.startEngine();


class BusAuto extends Autoclass {
	constructor(brand, maxSpeed, seads) {
		super(brand, maxSpeed);
		this.seads = seads;
	}
	startEngine() {
		if (!this.engine) {
			this.engine = true;
			console.log("Start Van")
		}
		else {
			console.log("Silnik już byl odpalony")
		}
	}

}

let vanAuto = new BusAuto("Van", 600);
vanAuto.startEngine();
clasAuto.startEngine();

// console.log(bmw);


