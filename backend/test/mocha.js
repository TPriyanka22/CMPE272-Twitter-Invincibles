/**
 * This file is to test twitter api integration
 */
 var expect = require("chai").expect;
 var request = require("request");
 var url = `http://localhost:8080/`;
 
 describe('/search Twitter', () => {
   it("Successfully tested to Search API", function () {
     request(url+"search", function (error, response, body) {
       expect(response.statusCode).to.equal(200);
       expect(response.body).not.null;
     });
   })
 })
 
 describe('/tweet Twitter', () => {
   it("Successfully tested to Tweet API", function() {
     request(url+"tweet", function(error, response, body) {
       expect(response.statusCode).to.equal(200);
       expect(response.body).not.null;
     });
   });
 })
 
 describe('/delete Twitter', () => {
   it("Successfully tested to Delete Tweet API", function() {
     request(url+"delete", function(error, response, body) {
       expect(response.statusCode).to.equal(200);
       expect(response.body).not.null;
     });
   });
 })