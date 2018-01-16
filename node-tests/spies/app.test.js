const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app"); // user 'rewire' instead of 'require' to mock out services...

describe("Application", () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call saveUser with user object", () => {
    var email = "test123@test.com";
    var password = "p455w0rd";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    });
  });

  it("Shoud call the spy correctly", () => {
    var spy = expect.createSpy();
    spy("Rad", 42);
    expect(spy).toHaveBeenCalledWith("Rad", 42);
  });

});

