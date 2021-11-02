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

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
};

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare);
};

let selectDifferentDrivers = (arrOfDrivers, func = returnFirstTwoDrivers || returnLastTwoDrivers) => {
  return func(arrOfDrivers);
};