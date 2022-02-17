//elements 
const clickMe = document.querySelector(".click-me");
const inputText = document.querySelector(".input-text");
const form = document.querySelector(".form");
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
  "The Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bonaire",
  "Sint Eustatius and Saba",
  "Sint Eustatius",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory",
  "Indian Ocean Territory",
  "British Indian Ocean",
  "Indian Ocean",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos",
	"Colombia",
	"Comoros",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands",
  "Maldivas",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories",
  "The French Southern Territories",
	"Gabon",
	"Gambia",
  "The Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
  "Guinea Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See",
  "The Holy See",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
  "The Islamic Republic Of Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"North Korea",
  "The Democratic People's Republic of Korea",
	"South Korea",
  "The Republic of Korea",
	"Kuwait",
	"Kyrgyzstan",
  "Lao",
	"Lao People's Democratic Republic",
  "The Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
  "The Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia",
  "Federated States of Micronesia",
	"Moldova",
  "The Republic of Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
  "The Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
  "The Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine",
  "State of Palestine",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
  "The Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
  "Macedonia",
	"Romania",
	"Russian Federation",
  "Russia",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom of Great Britain and Northern Ireland",
	"United States Minor Outlying Islands",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"Virgin Islands",
	"Virgin Islands",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
// document.addEventListener("keydown", loadDishes);

// clickMe.addEventListener("click", loadDishes);
document.querySelector("form").addEventListener("submit", loadDishes);

function loadDishes(e){
  //show it only if it is letters or numbers maybe with an array or object
  //if typing letters show it on e.target.value or inputText.value

  //creating the object 
  const xhr = new XMLHttpRequest();

  //open the file 
  xhr.open("GET", "dishes.json", true);

  //create the function in it 
  xhr.onload = function (){

    const dishObj = JSON.parse(this.responseText);
    // console.log(dishObj)

    const userInputText = document.querySelector(".input-text").value.toLowerCase();
    document.querySelector(".input-text").value = "";

    //to better the search algorithm I should have an array of words related to only one country and if the user types any of these words I return the country hes trying to search - idea one 
  // const italianArray = ["italy", "italian", "italia", "itralia"];

  //I can append this array into the object itself and narrow down by the letters the user is typing... so the user clicks on the country flag or name i will be showing and booom he gets the dishes - idea two

  //OBJECTIVE is to have All countries with 100 dishes
  //ITALY: from [0,2], BRAZIL: from [3,5], SPAIN: from [6, 11], this is the index range close interval
  let country = ["italy", "italia", "italian", "italiano", "italiana", "italian food", "brazil", "brasil", "brazilian food", "brazilian", "comida brasileira", "brasileira", "spain", "espanha", "spanish food", "spanish", "spnai"];
  let countItaly = 3;
  let countBrazil = 3;
  let countSpain = 6;

  let lastItaly = 2;
  let lastBrazil = 5;
  let lastSpain = 11;

  let firstItaly = 0;
  let firstBrazil = 3;
  let firstSpain = 6;

  let randomIndex;
  let randomIndex2;
  let randomIndex3;

  function getRandomIndex(){

    if (userInputText === "italy" || userInputText === "italia" || userInputText === "italian" || userInputText === "italiano" || userInputText === "italiana"|| userInputText === "italian food"){
      randomIndex = Math.floor(Math.random()*countItaly);
      // console.log(randomIndex)
    } else if (userInputText === "brazil" || userInputText === "brasil" || userInputText === "brazilian food" || userInputText === "brazilian" || userInputText === "comida brasileira" || userInputText === "brasileira"){
      randomIndex = Math.floor(Math.random()*countBrazil + countItaly);
      // console.log(randomIndex)
    } else if (userInputText === "spain" || userInputText === "espanha" || userInputText === "spanish food" || userInputText === "spanish" || userInputText === "spnai"){
      randomIndex = Math.floor(Math.random()*countSpain + countBrazil + countItaly);
      // console.log(randomIndex)
    } else { 
      let count = 0;
      for (let i = 0; i < countryList.length; i++) {
         if (userInputText === countryList[i].toLocaleLowerCase()){
           //here i call the error function
           document.querySelector(".container-alert").innerHTML = `<div class="alert alert-light d-flex align-items-center error-alert" role="alert">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
           </svg>
           <div>
             Sorry we still don't have data from <strong>${countryList[i]}</strong>... Try <strong>Italy</strong>, <strong>Brazil</strong> or <strong>Spain</strong>!
           </div>
         </div>
       </div>`
          //use settimeout to delete this message
          if (document.querySelector(".error-alert")){
         setTimeout(() => {
            document.querySelector(".error-alert").remove();
          }, 10000);
          }
            count++;
         }  

      }
      if (count < 1){
        //here i call the error function 
        document.querySelector(".container-alert").innerHTML = `<div class="alert alert-light d-flex align-items-center error-alert" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          Are you sure <strong>${userInputText}</strong> is a country? Try typing the country's name in english! We currently have <strong>italian</strong>, <strong>brazilian</strong> and <strong>spanish</strong> food.
        </div>
      </div>
    </div>`;
        //use settimeout to delete it these messages
        if (document.querySelector(".error-alert")){
          setTimeout(() => {
             document.querySelector(".error-alert").remove();
           }, 10000);
           }
      }
    }

  //second random number spain
    if (randomIndex <= lastSpain && randomIndex >= firstSpain){

      if (randomIndex === lastSpain){
        randomIndex2 = randomIndex - 1;
        randomIndex3 = randomIndex - 2;
      } else if (randomIndex === firstSpain){
        randomIndex2 = randomIndex + 1;
        randomIndex3 = randomIndex + 2;
      } else {
        randomIndex2 = randomIndex + 1;
        randomIndex3 = randomIndex - 1;
      }
    
   }
 //second random number brazil
   if (randomIndex <= lastBrazil && randomIndex >= firstBrazil){

    if (randomIndex === lastBrazil){
      randomIndex2 = randomIndex - 1;
      randomIndex3 = randomIndex - 2;
    } else if (randomIndex === firstBrazil){
      randomIndex2 = randomIndex + 1;
      randomIndex3 = randomIndex + 2;
    } else {
      randomIndex2 = randomIndex + 1;
      randomIndex3 = randomIndex - 1;
    }
  
 }
//second random number Italy
 if (randomIndex <= lastItaly && randomIndex >= firstItaly){

  if (randomIndex === lastItaly){
    randomIndex2 = randomIndex - 1;
    randomIndex3 = randomIndex - 2;
  } else if (randomIndex === firstItaly){
    randomIndex2 = randomIndex + 1;
    randomIndex3 = randomIndex + 2;
  } else {
    randomIndex2 = randomIndex + 1;
    randomIndex3 = randomIndex - 1;
  }

}

}
 getRandomIndex(); 

  for (let i = 0; i < country.length; i++) {

    if (userInputText === country[i] && this.status === 200){
      
      //removing it whenever the user types a right country
      if(document.querySelector(".error-alert")){
        setTimeout(() => {
          document.querySelector(".error-alert").remove();
        });
      }

      document.querySelector(".first-row").innerHTML = ` <div class="col-lg-4 col-md-6 card-items">
      <div class="card dish-${dishObj.world[randomIndex].number}" style="width: 18rem;">
        <img src="${dishObj.world[randomIndex].img}" class="card dish-${dishObj.world[randomIndex].number}-img-top" alt="...">
        <div class="card dish-${dishObj.world[randomIndex].number}-body">
          <h5 class="card dish-${dishObj.world[randomIndex].number}-title">${dishObj.world[randomIndex].name}</h5>
          <p class="card dish-${dishObj.world[randomIndex].number}-text">${dishObj.world[randomIndex].description.slice(0,100) + "..."}</p>
          <a href="${dishObj.world[randomIndex].youtube}" target="_blank" class="btn btn-success">how to make it</a>
        </div>
      </div>
    </div>` + ` <div class="col-lg-4 col-md-6 card-items">
    <div class="card dish-${dishObj.world[randomIndex2].number}" style="width: 18rem;">
      <img src="${dishObj.world[randomIndex2].img}" class="card dish-${dishObj.world[randomIndex2].number}-img-top" alt="...">
      <div class="card dish-${dishObj.world[randomIndex2].number}-body">
        <h5 class="card dish-${dishObj.world[randomIndex2].number}-title">${dishObj.world[randomIndex2].name}</h5>
        <p class="card dish-${dishObj.world[randomIndex2].number}-text">${dishObj.world[randomIndex2].description.slice(0,100) + "..."}</p>
        <a href="${dishObj.world[randomIndex2].youtube}" target="_blank" class="btn btn-success">how to make it</a>
      </div>
    </div>
  </div>` + ` <div class="col-lg-4 col-md-12 card-items">
  <div class="card dish-${dishObj.world[randomIndex3].number}" style="width: 18rem;">
    <img src="${dishObj.world[randomIndex3].img}" class="card dish-${dishObj.world[randomIndex3].number}-img-top" alt="...">
    <div class="card dish-${dishObj.world[randomIndex3].number}-body">
      <h5 class="card dish-${dishObj.world[randomIndex3].number}-title">${dishObj.world[randomIndex3].name}</h5>
      <p class="card dish-${dishObj.world[randomIndex3].number}-text">${dishObj.world[randomIndex3].description.slice(0,100) + "..."}</p>
      <a href="${dishObj.world[randomIndex3].youtube}" target="_blank" class="btn btn-success">how to make it</a>
    </div>
  </div>
</div>`;
  } 
  }
  }

 
  xhr.send();


  e.preventDefault();
}

// class FoodGenerator {
//   constructor(name, description, region, country, recipe, ingredients, img, number, youtube){
//     this.name = name;
//     this.description = description;
//     this.region = region;
//     this.country = country;
//     this.recipe = recipe;
//     this.ingredients = ingredients;
//     this.img = img;
//     this.number = number;
//     this.youtube = youtube;
//   }
// }

// const brazil = [];

// const brazil1 = new FoodGenerator("cuzcuz nordestino", "Cuscuz nordestino is a traditional dish from the Northeast region of Brazil. It is prepared with corn flour, salt, manioc starch, and either water or coconut milk. The combination of these ingredients is steamed until fragrant. Once prepared, cuscuz nordestino is cut into slices and served hot.This nutritious, inexpensive, and simple dish was brought to Brazil by Portuguese colonizers, and today it's a staple in the Northeast of Brazil – in some places, it's even used as a replacement for bread.", "nordeste", "brazil", "Mix all dry ingredients in a container.Add the water and coconut milk little by little, until it forms a very wet crumb.Let it rest for 5 minutes.Place in the couscous without kneading.Cook for 15 minutes.Serve hot with curd cheese or sliced mozzarella cheese.", "Cuscuz Ingredientes:\nxícaras de chá de flocão\ncolher de chá de sal\nxícara de chá de água\nCarne de sol cozida e desfiada\nFrango cozido e desfiado\nQueijo ralado\n1 ovo.", "cuzcuznordestino.jpg", 1, "https://www.youtube.com/watch?v=feQYosqLvwI");

// const brazil2 = new FoodGenerator("tutu de feijão", "Tutu de feijão is a traditional Brazilian dish originating from the region of Minas Gerais. The dish is made with a combination of puréed beans (traditionally black beans) and cassava flour that's used as a thickening agent. Other ingredients used in the dish include bacon, onions, garlic, olive oil, parsley, and bay leaves.Although there are many variations on the dish, it's usually served accompanied by pork sausages, rice, eggs, or sometimes kale.", "minas gerais", "brazil", "Method of preparation:\nWash the beans under running water and place in a pressure cooker.\nAdd the water.Add the bay leaves, the chopped bacon. Take the pan to the fire, as soon as it gets pressure, lower the fire and leave for 40 minutes.\nCut the pumpkin into coarse pieces and pre-cooked it, leaving the edge al dente and set aside. Peel and chop the garlic cloves and onion.\nWith the beans already cooked, open the pan and add the pumpkin and bring to the fire again, now without covering the pan.\nIn another pan put the oil and take it to the fire to warm up, first add the garlic and then the onion.\nLet it brown a little and put the beans, with the fire still on let it boil well.\nWhen the beans are ready, put them in the blender, blend everything and return to the pan.\nWhen it is boiling, add the flour little by little, remembering that the pumpkin squash that was put in the cooking of the beans has already left it with a more pasty texture, so it will not be necessary to use a lot of cassava flour.\nKeep stirring and add more flour if necessary until you get the consistency you want. Adjust the salt and serve.", "Ingredientes:\n1/2 kg de feijão\n2 litros de água\n2 folhas de louro\n300g de Abóbora Moranga\n1 cebola\n4 dentes de alho\n150g de bacon\n1 linguiça de porco\n3 colheres de sopa de óleo para refogar o feijão\n¼ xícara de farinha de mandioca\nsal e pimenta-do-reino a gosto", "tutudefeijao.jpg", 2, "https://www.youtube.com/watch?v=RK9J0kWxUO8")

// const brazil1J = JSON.stringify(brazil1);
// const brazil2J = JSON.stringify(brazil1);

// brazil.push(JSON.stringify(brazil1));
// brazil.push(JSON.stringify(brazil2));


// for(let i = 0; i < 2; i++){
//   console.log(brazil[i])
// }

//list of all countries in the world 
// const countryList = [
// 	"Afghanistan",
// 	"Albania",
// 	"Algeria",
// 	"American Samoa",
// 	"Andorra",
// 	"Angola",
// 	"Anguilla",
// 	"Antarctica",
// 	"Antigua and Barbuda",
// 	"Argentina",
// 	"Armenia",
// 	"Aruba",
// 	"Australia",
// 	"Austria",
// 	"Azerbaijan",
// 	"Bahamas (the)",
// 	"Bahrain",
// 	"Bangladesh",
// 	"Barbados",
// 	"Belarus",
// 	"Belgium",
// 	"Belize",
// 	"Benin",
// 	"Bermuda",
// 	"Bhutan",
// 	"Bolivia (Plurinational State of)",
// 	"Bonaire, Sint Eustatius and Saba",
// 	"Bosnia and Herzegovina",
// 	"Botswana",
// 	"Bouvet Island",
// 	"Brazil",
// 	"British Indian Ocean Territory (the)",
// 	"Brunei Darussalam",
// 	"Bulgaria",
// 	"Burkina Faso",
// 	"Burundi",
// 	"Cabo Verde",
// 	"Cambodia",
// 	"Cameroon",
// 	"Canada",
// 	"Cayman Islands (the)",
// 	"Central African Republic (the)",
// 	"Chad",
// 	"Chile",
// 	"China",
// 	"Christmas Island",
// 	"Cocos (Keeling) Islands (the)",
// 	"Colombia",
// 	"Comoros (the)",
// 	"Congo (the Democratic Republic of the)",
// 	"Congo (the)",
// 	"Cook Islands (the)",
// 	"Costa Rica",
// 	"Croatia",
// 	"Cuba",
// 	"Curaçao",
// 	"Cyprus",
// 	"Czechia",
// 	"Côte d'Ivoire",
// 	"Denmark",
// 	"Djibouti",
// 	"Dominica",
// 	"Dominican Republic (the)",
// 	"Ecuador",
// 	"Egypt",
// 	"El Salvador",
// 	"Equatorial Guinea",
// 	"Eritrea",
// 	"Estonia",
// 	"Eswatini",
// 	"Ethiopia",
// 	"Falkland Islands (the) [Malvinas]",
// 	"Faroe Islands (the)",
// 	"Fiji",
// 	"Finland",
// 	"France",
// 	"French Guiana",
// 	"French Polynesia",
// 	"French Southern Territories (the)",
// 	"Gabon",
// 	"Gambia (the)",
// 	"Georgia",
// 	"Germany",
// 	"Ghana",
// 	"Gibraltar",
// 	"Greece",
// 	"Greenland",
// 	"Grenada",
// 	"Guadeloupe",
// 	"Guam",
// 	"Guatemala",
// 	"Guernsey",
// 	"Guinea",
// 	"Guinea-Bissau",
// 	"Guyana",
// 	"Haiti",
// 	"Heard Island and McDonald Islands",
// 	"Holy See (the)",
// 	"Honduras",
// 	"Hong Kong",
// 	"Hungary",
// 	"Iceland",
// 	"India",
// 	"Indonesia",
// 	"Iran (Islamic Republic of)",
// 	"Iraq",
// 	"Ireland",
// 	"Isle of Man",
// 	"Israel",
// 	"Italy",
// 	"Jamaica",
// 	"Japan",
// 	"Jersey",
// 	"Jordan",
// 	"Kazakhstan",
// 	"Kenya",
// 	"Kiribati",
// 	"Korea (the Democratic People's Republic of)",
// 	"Korea (the Republic of)",
// 	"Kuwait",
// 	"Kyrgyzstan",
// 	"Lao People's Democratic Republic (the)",
// 	"Latvia",
// 	"Lebanon",
// 	"Lesotho",
// 	"Liberia",
// 	"Libya",
// 	"Liechtenstein",
// 	"Lithuania",
// 	"Luxembourg",
// 	"Macao",
// 	"Madagascar",
// 	"Malawi",
// 	"Malaysia",
// 	"Maldives",
// 	"Mali",
// 	"Malta",
// 	"Marshall Islands (the)",
// 	"Martinique",
// 	"Mauritania",
// 	"Mauritius",
// 	"Mayotte",
// 	"Mexico",
// 	"Micronesia (Federated States of)",
// 	"Moldova (the Republic of)",
// 	"Monaco",
// 	"Mongolia",
// 	"Montenegro",
// 	"Montserrat",
// 	"Morocco",
// 	"Mozambique",
// 	"Myanmar",
// 	"Namibia",
// 	"Nauru",
// 	"Nepal",
// 	"Netherlands (the)",
// 	"New Caledonia",
// 	"New Zealand",
// 	"Nicaragua",
// 	"Niger (the)",
// 	"Nigeria",
// 	"Niue",
// 	"Norfolk Island",
// 	"Northern Mariana Islands (the)",
// 	"Norway",
// 	"Oman",
// 	"Pakistan",
// 	"Palau",
// 	"Palestine, State of",
// 	"Panama",
// 	"Papua New Guinea",
// 	"Paraguay",
// 	"Peru",
// 	"Philippines (the)",
// 	"Pitcairn",
// 	"Poland",
// 	"Portugal",
// 	"Puerto Rico",
// 	"Qatar",
// 	"Republic of North Macedonia",
// 	"Romania",
// 	"Russian Federation (the)",
// 	"Rwanda",
// 	"Réunion",
// 	"Saint Barthélemy",
// 	"Saint Helena, Ascension and Tristan da Cunha",
// 	"Saint Kitts and Nevis",
// 	"Saint Lucia",
// 	"Saint Martin (French part)",
// 	"Saint Pierre and Miquelon",
// 	"Saint Vincent and the Grenadines",
// 	"Samoa",
// 	"San Marino",
// 	"Sao Tome and Principe",
// 	"Saudi Arabia",
// 	"Senegal",
// 	"Serbia",
// 	"Seychelles",
// 	"Sierra Leone",
// 	"Singapore",
// 	"Sint Maarten (Dutch part)",
// 	"Slovakia",
// 	"Slovenia",
// 	"Solomon Islands",
// 	"Somalia",
// 	"South Africa",
// 	"South Georgia and the South Sandwich Islands",
// 	"South Sudan",
// 	"Spain",
// 	"Sri Lanka",
// 	"Sudan (the)",
// 	"Suriname",
// 	"Svalbard and Jan Mayen",
// 	"Sweden",
// 	"Switzerland",
// 	"Syrian Arab Republic",
// 	"Taiwan",
// 	"Tajikistan",
// 	"Tanzania, United Republic of",
// 	"Thailand",
// 	"Timor-Leste",
// 	"Togo",
// 	"Tokelau",
// 	"Tonga",
// 	"Trinidad and Tobago",
// 	"Tunisia",
// 	"Turkey",
// 	"Turkmenistan",
// 	"Turks and Caicos Islands (the)",
// 	"Tuvalu",
// 	"Uganda",
// 	"Ukraine",
// 	"United Arab Emirates (the)",
// 	"United Kingdom of Great Britain and Northern Ireland (the)",
// 	"United States Minor Outlying Islands (the)",
// 	"United States of America (the)",
// 	"Uruguay",
// 	"Uzbekistan",
// 	"Vanuatu",
// 	"Venezuela (Bolivarian Republic of)",
// 	"Viet Nam",
// 	"Virgin Islands (British)",
// 	"Virgin Islands (U.S.)",
// 	"Wallis and Futuna",
// 	"Western Sahara",
// 	"Yemen",
// 	"Zambia",
// 	"Zimbabwe",
// 	"Åland Islands"
// ];