var names = ['Kit','Boon','Kwun'];

// names.forEach(function(name){
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('ArrowFun:', name);
// })

// names.forEach((name)=>console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Kit'));

var person = {
	name: 'Kit',
	greet: function() {
		names.forEach((name)=>{
			console.log(this.name + ' say hi to ' + name)
		});
	}
}
person.greet();


var person2 = {
	name: 'Kit',
	greet: function() {
		var that = this;
		names.forEach(function(name){
			console.log(that.name + ' say hi to ' + name)
		});
	}
}

person2.greet();


//Challenge Area
// function add (a,b) {
// 	return a + b;
// }

// //addStatement
// var addStatement = (a,b) => {
// 	return a+b;
// }
// console.log(addStatement(4,7));

// //add expression
// var addExpression = (a,b)=> a+b;
// console.log(addExpression(3,-2));


// console.log(add(1,3));
// console.log(add(9,0));





