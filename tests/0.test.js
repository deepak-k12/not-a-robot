/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const request = require("supertest");
const index = require("../index.js");

const myTest = async () => {
  const response = await request(index).get("/");
  document.body.innerHTML = response.text;
  require("../script.js");

  const images = document.querySelectorAll("img");
  expect(images.length).toEqual(6);

  for (i = 1; i <= 5; i++) {
    const cl = "img" + i;
    const image = document.getElementsByClassName(cl);
    expect(image).not.toBeNull();
  }
  const reset = document.getElementById("reset");
  expect(reset== null || reset.style.display != "block").toBeTruthy();

  const verify = document.getElementById("verify");
  expect(verify== null || verify.style.display != "block").toBeTruthy();
};

test("#0 Testing all elements are present", async () => await myTest());

// module.exports = myTest;
