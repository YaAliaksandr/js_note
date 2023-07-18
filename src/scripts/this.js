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

const u3 = new User("Alex");
const u4 = new User("Lech");
console.log(u3);

console.log(u4);
console.dir(u3);
