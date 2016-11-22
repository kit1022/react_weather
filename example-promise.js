// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			resolve(50);
// 			reject('city not found');
// 		},1000)
// 	});
// }

// //then. > success callback, >  error callback
// getTempPromise('singapore').then(function(temp){
// 	console.log('promise success', temp);
// }, function (err){
// 	console.log('promise error', err);
// });

// if (typeof someNumber === 'number') {

// }

//challege area
function addPromise (a,b) {
	return new Promise (function(resolve, reject){
		setTimeout(function(){
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a+b);
			} else {
				reject('is not a number');
			};
		},1000);
	});
}

addPromise(5, 15).then(function(totalNum){
	console.log('total:', totalNum);
},function(err){
	console.log('err:', err);
});

addPromise(5, 'man').then(function(totalNum){
	console.log('total:', totalNum);
},function(err){
	console.log('err:', err);
});