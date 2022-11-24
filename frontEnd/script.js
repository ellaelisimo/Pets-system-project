const HOSTNAME = "http://localhost:5001/pets";

const getPets = async () => {
  const response = await fetch(HOSTNAME);
  const pets = await response.json();
  return pets;
};
getPets();

const showPetsTable = () => {};
