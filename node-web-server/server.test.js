const request = require("supertest");
const expect = require("expect");
var app = require("./server").app;


describe("Web Appllication", () => {
  it("should return Hello Express response", done => {
    request(app)
      .get("/hello")
      .expect("<h1>Hello Express!</h1>")
      .expect(200)
      .end(done);
  });

  it("expect 404 NOT FOUND", done => {
    request(app)
      .get("/404")
      .expect(404)
      .expect(res => {
        expect(res.body).toInclude({
          error: "Page not found."
        });
      })
      .end(done);
  });

  it("shoud find myself among the users", done => {
    request(app)
      .get("/users")
      .expect(200)
      .expect(res => {
        expect(res.body).toInclude({
          name: "nad2000",
          age: 42
        });
      })
      .end(done);
  });
});

