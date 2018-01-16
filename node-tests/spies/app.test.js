const expect = require("expect");

describe("Application", () => {

  it("Shoud call the spy correctly", () => {
    var spy = expect.createSpy();
    spy("Rad", 42);
    expect(spy).toHaveBeenCalledWith("Rad", 42);
  });
});

