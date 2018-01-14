const request = require("supertest");
const expect = require("expect");
var app = require("./server").app;

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
    .expect({
      error: "Page not found."
    })
    .end(done);
});

