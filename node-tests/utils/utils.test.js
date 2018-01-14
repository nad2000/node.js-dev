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
    expect(12).toNotBe(11);
  });
