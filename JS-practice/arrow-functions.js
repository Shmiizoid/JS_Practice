//Arrow function syntax//

const funcA = x => console.log('This is your parameter' + x + '!');

const funcB = () => console.log("This function has no parameters");

const funcC = (x, y) => console.log('these are your arguments: ' + x + ' and ' + y);

funcA('An argument')
funcB()
funcC('Argument 1', 'Argument 2')