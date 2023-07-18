const data = [
	{
		name: 'pawel',
		city: 'krakow',
		age: 38,
		hobbies: ['js', 'python', 'drugs']
	},
	{
		name: 'jacek',
		city: 'jelenia_gora',
		age: 30,
		hobbies: ['trekking', 'cars', 'martial arts'],
	},
	{
		name: 'marcin',
		city: 'lublin',
		age: 43,
		hobbies: ['css', 'speedway', 'history']
	},
	{
		name: 'dawid',
		city: 'bielskobiala',
		age: 30,
		hobbies: ['football', 'snowboard', 'boxing']
	},
	{
		name: 'sebastian',
		city: 'golkowice',
		age: 20,
		hobbies: ['drugs', 'hookers', 'Js']
	},
	{
		name: "karolina",
		city: "dubaj",
		age: 32,
		hobbies: ["książki", "gotowanie", "filmy"]
	},
	{
		name: 'patryk',
		city: 'tarnow',
		age: 26,
		hobbies: ['anime', 'rts', 'lol']
	},
	{
		name: 'aleksander',
		city: 'warsaw',
		age: 23,
		hobbies: ['philosophy', 'art', 'music']
	},
	{
		name: 'Kamil',
		city: 'walcz',
		age: 34,
		hobbies: ['js', 'html', 'Mac']
	},
	{
		name: 'Alex',
		city: 'warszawa',
		age: 37,
		hobbies: ['js', 'python', 'drugs']
	},
	{
		name: 'franek',
		city: 'warszawa',
		age: 18,
		hobbies: ['js', 'bastkeball', 'cars']
	},
	{
		name: 'marcin',
		city: 'warszawa',
		age: 37,
		hobbies: ['js', 'bike', 'jogging']
	}
];
// function calculateAvAge(elements) {
// 	let summ = 0;
// 	for (let val of elements) {
// 		summ += val['age'];
// 	}
// 	return summ / elements.length;

// }
// function calculateAvAge(elements) {
// 	return elements
// 		.map(function (item) {
// 			return item.age;
// 		})
// 		.reduce((accum, item) => {
// 			return accum += item;
// 		}, 0) / elements.length;

// }
// const calculateAvAge = (elements) => {
// 	elements
// 		.reduce((accum, item) => {
// 			return accum += item.age;
// 		}, 0) / elements.length;
// }



// function calculateAvAge1(elements) {
// 	let counter = 0;
// 	return elements
// 		.reduce((accum, item) => {
// 			if (item['city'] !== 'warszawa' && item['city'] !== 'warsaw') {
// 				counter++;

// 				accum += item.age;

// 				return accum;
// 			}
// 			return accum = accum
// 		}, 0) / counter;
// }
// console.log("1====", calculateAvAge1(data));


// const calculateAvAge1ArrFunc = (elements) => {
// 	let counter = 0;
// 	return elements.reduce((accum, item) => {
// 		if (item['city'] !== 'warszawa' && item['city'] !== 'warsaw') {
// 			counter++;
// 			accum += item.age;
// 		}
// 		return accum;
// 	}, 0) / counter;
// }

// console.log("2===", calculateAvAge1ArrFunc(data));
// function calculateAvAge1Filter(elements) {
// 	let filteredArr = elements.filter((item) => {
// 		if (item['city'] !== 'warszawa' && item['city'] !== 'warsaw') {
// 			return true;
// 		}
// 	})
// 	return filteredArr.reduce((acc, item) => (acc += item.age), 0) / filteredArr.length;
// }

// console.log(calculateAvAge1Filter(data));

// function tr(el) {
// 	let bool = true;
// 	for (let val of el) {
// 		if (val.age > 29) {
// 			return bool = false;
// 		}
// 	}
// 	return bool;
// }
// console.log(tr(data));

// const isAllYoungerThan30 = (el) => el.every((item) => item.age < 30);
// console.log(isAllYoungerThan30(data));
// const isKrakow = (el) => el.some((item) => item.city === "krakow");
// console.log(isKrakow(data));

const loveJs = (el) => {
	// let arrName = [];
	// for (let val of el) {
	// 	if (val.hobbies.includes('js')) {
	// 		arrName.push(val.name);
	// 	}
	// }
	// return arrName;


	// let filterEl = el.filter((item) => item.hobbies.includes('js'));
	// let mapArr = filterEl.map((item) => item.name);
	// return mapArr;

	return el
		.filter((item) => item.hobbies.includes('js'))
		.map((item) => item.name);
	// return mapArr
}


console.log(loveJs(data));

let uniqHobbie = (el) => {

	let setOfArr = new Set();

	for (let val of el) {
		val.hobbies.forEach((element) => {
			setOfArr.add(element);
		})
	}
	return setOfArr.size;
}
console.log(uniqHobbie(data));
const x = [[1, 2], [3, 4]];
const z = [...x];
x[0][0] = 43;
console.log