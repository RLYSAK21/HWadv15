const BASE_URL = "https://swapi.dev/api/";
const getCharacter = document.querySelector('body');
const post = document.querySelector('#post');


getCharacter.addEventListener("click", function (elem) {
    const movie_episode = document.querySelector('#films').value;
    const target = elem.target;
    if (target.defaultValue == 'GET') { getDataFromServer(`/films/${movie_episode}/`); }
    if (target.innerText == 'NEXT') { getDataFromServer(/planets/); }
});


async function getDataFromServer(selection) {

    const request = await fetch(`${BASE_URL}${selection}`);
    const data = await request.json();

    if (selection == '/planets/') {
        post.replaceChildren();
        data.results.forEach((el) => {
            displayPlanets(el.name)
        })
    }
    else {
        post.replaceChildren();
        data.characters.forEach(async (el) => {
            const request = await fetch(el);
            const data = await request.json();
            displayCharacters(data.name, data.birth_year, data.gender);
        });
    }
}


function displayCharacters(name, birth_year, gender) {
    const character = document.createElement("div");
    character.classList.add('character');

    const characterName = document.createElement('p');
    characterName.textContent = `Name : ${name}`;

    const characterBirthDay = document.createElement('p');
    characterBirthDay.textContent = `BirthDay : ${birth_year}`;

    const characterGender = document.createElement('p');
    characterGender.textContent = `Gender : ${gender}`;

    const characterImages = document.createElement('img')
    characterImages.setAttribute("src", `images/${name}.jpg`)

    character.append(characterName);
    character.append(characterBirthDay);
    character.append(characterGender);
    character.append(characterImages);

    post.append(character);
}

function displayPlanets(name) {
    const planet = document.createElement("div");
    planet.classList.add('planets');

    const planetsImages = document.createElement('img')
    planetsImages.setAttribute("src", `images/${name}.jpg`)

    const planetsName = document.createElement('span');
    planetsName.textContent = `Name : ${name}`;

    planet.append(planetsName);
    planet.append(planetsImages);

    post.append(planet);

}
console.log("Home work 12");