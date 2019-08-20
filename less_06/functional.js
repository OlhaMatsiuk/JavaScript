function Robot() {
	this.name = "Robot";
	this.working = "просто працюю";

	this.work = function() {
		console.log("Я - " + this.name + ", я " + this.working + "!");
	}
}

function CoffeRobot() {
	Robot.call(this);
	this.name = "CoffeRobot";
	this.working = "варю каву";
}

function RobotDancer() {
	Robot.call(this);
	this.name = "RobotDancer";
	this.working = "просто танцюю";
}

function RobotCooker() {
	Robot.call(this);
	this.name = "RobotCooker";
	this.working = "просто готую";
}

let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.work();
coffeRobot.work();
robotDancer.work();
robotCooker.work();

// ------
console.log("------");

let arr = [ new Robot(), new CoffeRobot, new RobotDancer, new RobotCooker ];
for (let i = 0; i < arr.length; i++)
	arr[i].work();
