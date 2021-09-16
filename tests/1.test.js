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

  const found = {};
  const images = document.querySelectorAll("img");
  let repeat = undefined;
  images.forEach((img) => {
    if (found[img.classList[0]]) {
      repeat = img.classList[0];
    } else {
      found[img.classList[0]] = true;
    }
  });
  expect(repeat).not.toBeUndefined();
  const repeated_images = document.querySelectorAll("." + repeat);
  expect(repeated_images.length).toEqual(2);
  repeated_images[0].click();
  const reset = document.getElementById("reset");
  expect(reset.style.display == "block").toBeTruthy();
  repeated_images[1].click();
  const verify = document.getElementById("verify");
  expect(verify.style.display == "block").toBeTruthy();
  verify.click();
  const para = document.getElementById("para");
  expect(para.innerHTML).toMatch(/congratulations/i);
};

test("#1 Selecting correct images", async () => await myTest());

// module.exports = myTest;
