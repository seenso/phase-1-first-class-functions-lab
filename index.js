// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (num) => {
  return (fare) => {
    return fare * num;
  }
};

const fareDoubler = () => {};

const fareTripler = () => {};

let selectDifferentDrivers = (arrayOfDrivers, func) => {};