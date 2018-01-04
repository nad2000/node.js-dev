var square = x => x * x;
console.log(square(9));


var user = {
  name: "nad2000",
  sayHi: () => {
    // console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt: function() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt2() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
}

user.sayHi();
user.sayHiAlt(1, 2, 3);
user.sayHiAlt2(1, 2, 3);
