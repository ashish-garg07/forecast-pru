/**
 * Created by Ashish on 4/8/18.
 */
var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("http://localhost:8080");

describe("test for endpoint to get forecast data",function(){

  it("should return data",function(done){

    server
      .get("/forecast/london")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        done();
      });
  });

});
