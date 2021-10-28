const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect;
const server = require("../../src/app");
const { nanoid } = require("nanoid");

chai.use(chaiHttp);

let productId = "";

describe("/products endpoint tests", () => {
  it("[GET] /products product list", (done) => {
    chai
      .request(server)
      .get("/products")
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.be.a("array");

        res.body.every((i) =>
          expect(i).to.have.all.keys(
            "id",
            "title",
            "image",
            "category",
            "brand",
            "color",
            "price",
            "discountPrice",
            "createdDate",
            "discountPercentage"
          )
        );
        done();
      });
  });

  it("[POST] /products endpoint adds a product.", (done) => {
    const product = {
      id: nanoid(),
      title: "Product test",
      category:"Telefon",
      image: "imageurl",
      brand: "brand",
      color: "black",
      price: 1550,
      discountPrice:1519.00,
      createdDate: new Date(),
      discountPercentage: 2,
    };


    chai
      .request(server)
      .post(`/products`)
      .send(product)
      .end((err, res) => {
        productId = res.body.id;

        res.should.have.status(200);
        res.body.should.be.a("object");

        expect(res.body).to.have.all.keys(
          "id",
          "title",
          "image",
          "category",
          "brand",
          "color",
          "price",
          "discountPrice",
          "createdDate",
          "discountPercentage"
        );
        done();
      });
  });

  it("[GET] /products/:id endpoint must return a product", (done) => {
    chai
      .request(server)
      .get(`/products/${productId}`)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.be.a("object");

        expect(res.body).to.have.all.keys(
          "id",
          "title",
          "image",
          "category",
          "brand",
          "color",
          "price",
          "discountPrice",
          "createdDate",
          "discountPercentage"
        );
        done();
      });
  });

  it("[PUT] /products/:id endpoint updates a product.", (done) => {
    const data = {
      title: "Product test update",
      category:"Telefon",
      image: "imageurl",
      brand: "brand",
      color: "black",
      price: 1550,
      discountPrice:1519.00,
      createdDate: new Date(),
      discountPercentage: 2,
    };


    chai
      .request(server)
      .put(`/products/${productId}`)
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");

        expect(res.body).to.have.all.keys(
          "id",
          "title",
          "image",
          "category",
          "brand",
          "color",
          "price",
          "discountPrice",
          "createdDate",
          "discountPercentage"
        );
        done();
      });
  });

  it("[DELETE] /products/:id endpoint removes a product.", (done) => {
    chai
      .request(server)
      .delete(`/products/${productId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");

        expect(res.body).to.have.all.keys(
          "id",
          "title",
          "image",
          "category",
          "brand",
          "color",
          "price",
          "discountPrice",
          "createdDate",
          "discountPercentage"
        );
        expect(res.body.id).to.equal(productId);
        done();
      });
  });
});
