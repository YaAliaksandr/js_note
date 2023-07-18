const user = {
	name: "sdj",
	score: 0,
	updateScore(newScore) {
		user.score += newScore;
	}
}
// console.log;

function user1(name) {
	return {
		name: name,
		score: 0,
		updateScore() {
			this.score += newScore;
		}
	}
}

const u1 = user1('Alex');
const u2 = user1('Andrei');

function User(name) {
	this.name = name;
	this.score = 0;
}
User.prototype.updateScore = function (newScore) {
	this.score += newScore;
};
const u3 = new User("Alex");
const u4 = new User("Lech");
console.log(u3);

console.log(u4);
console.dir(u3);

Array.prototype.myMap = function (cb) {
	const temp = [];

	for (let i = 0; i < this.length; i++) {
		temp.push(cb(this[i], i, this));
	}
	return temp;
}

Array.prototype.myFilter = function (cb) {
	const temp = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			temp.push(this[i]);
		}
	}
	return temp;
}

Array.prototype.myReduce = function (cb, init = undefined) {

	let accumulator = init !== undefined ? init : this[0];

	for (let i = init !== undefined ? 0 : 1; i < this.length; i++) {
		accumulator = cb(accumulator, this[i], i, this)
	}



	return accumulator;

}

console.log([1, 2, 3].myReduce((acc, it) => {
	return acc += it;
}, 3))
