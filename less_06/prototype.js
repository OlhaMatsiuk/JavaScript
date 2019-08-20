function Robot(){
	this.name = "Robot";
	this.working = "просто працюю";
}
Robot.prototype.work = function(){
	console.log("Я - " + this.name + ", я " + this.working + "!");
}

function CoffeRobot(){
	this.name = "CoffeRobot";
	this.working = "варю каву";
}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

function RobotDancer(){
	this.name = "RobotDancer";
	this.working = "просто танцюю";
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCooker(){
	this.name = "RobotCooker";
	this.working = "просто готую";
}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.work();
coffeRobot.work();
robotDancer.work();
robotCooker.work();

//------
console.log("------");

let arr  = [new Robot(), new CoffeRobot, new RobotDancer, new RobotCooker];
for(let i = 0; i < arr.length; i++)
	arr[i].work();




