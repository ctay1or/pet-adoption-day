const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Using factory functions and methods to indicate each animal’s status, including whether they are sleeping or awake and ready to play! The status helps visitors know which animals they can interact with and get to know.
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted).
    sleep: function () {
      console.log(`${name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
      } else {
        console.log(`Yay! ${name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//clover.sleep();
//baxter.play();

//console.log(clover, baxter);

// This marks the start of a new pet shop! :)

// ============================================

// After pressing the button, the visitor will know instantly which animals can play.

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

//Display pets in the browser
const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
