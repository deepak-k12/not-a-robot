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
  const img1 = document.getElementsByClassName("img1");
  const img2 = document.getElementsByClassName("img2");
  const verify = document.getElementById("verify");
  const para = document.getElementById("para");
  const reset = document.getElementById("reset");

  img1[0].click();
  img2[0].click();

  verify.click();
  expect(para.innerHTML).toMatch(/can't verify/i);

  reset.click();

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
  repeated_images[1].click();
  verify.click();
  expect(para.innerHTML).toMatch(/congratulations/i);
};

test("#1 Selecting incorrect images and testing reset", async () =>
  await myTest());
