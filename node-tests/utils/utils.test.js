const utils = require("./utils");
const expect = require("expect");
it(
  "should add two numbers", () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA("number");
  });

it(
  "should shquare a number", () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA("number");
  });


it(
  "shoud expect some value", () => {
    //expect(12).toNotBe(11);
    //expect({name: "nad2000"}).toBe({name: "nad2000"});  // should fail
    expect({name: "nad2000"}).toEqual({name: "nad2000"}); // instead use toEqual
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(6);
    expect({
      name: "nad2000",
      age: 1000,
      location: "New Zealand"
    }).toInclude({
      age: 1000
    }).toExclude({
      age: 42
    });
  });
