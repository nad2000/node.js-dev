// run: npm i expect@1.20.2 --save-dev
// to add to devDependencies...
module.exports.add = (a, b) => a + b;
module.exports.square = (x) => x * x;
module.exports.setName = (user, fullName) => {

  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}


