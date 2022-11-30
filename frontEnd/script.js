const HOSTNAME = "http://localhost:5001/pets";

let orderSelection = "asc";
let petSelection = ["dog", "cat", "rabbit"];

const getPets = async () => {
  const response = await fetch(`http://localhost:5001/pets`);
  const pets = await response.json();
  return pets;
};
getPets();

const populatePetTable = async () => {
  const pets = await getPets();
  const tableElement = document.querySelector("table");

  pets.forEach((pet) => pet, tableElement);
};
populatePetTable();
