// var countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Anguilla",
//   "Antigua &amp; Barbuda",
//   "Argentina",
//   "Armenia",
//   "Aruba",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bermuda",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia &amp; Herzegovina",
//   "Botswana",
//   "Brazil",
//   "British Virgin Islands",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Cape Verde",
//   "Cayman Islands",
//   "Central Arfrican Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombia",
//   "Congo",
//   "Cook Islands",
//   "Costa Rica",
//   "Cote D Ivoire",
//   "Croatia",
//   "Cuba",
//   "Curacao",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Estonia",
//   "Ethiopia",
//   "Falkland Islands",
//   "Faroe Islands",
//   "Fiji",
//   "Finland",
//   "France",
//   "French Polynesia",
//   "French West Indies",
//   "Gabon",
//   "Gambia",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Gibraltar",
//   "Greece",
//   "Greenland",
//   "Grenada",
//   "Guam",
//   "Guatemala",
//   "Guernsey",
//   "Guinea",
//   "Guinea Bissau",
//   "Guyana",
//   "Haiti",
//   "Honduras",
//   "Hong Kong",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Isle of Man",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jersey",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kiribati",
//   "Kosovo",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Macau",
//   "Macedonia",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Marshall Islands",
//   "Mauritania",
//   "Mauritius",
//   "Mexico",
//   "Micronesia",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Montenegro",
//   "Montserrat",
//   "Morocco",
//   "Mozambique",
//   "Myanmar",
//   "Namibia",
//   "Nauro",
//   "Nepal",
//   "Netherlands",
//   "Netherlands Antilles",
//   "New Caledonia",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "North Korea",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palau",
//   "Palestine",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Puerto Rico",
//   "Qatar",
//   "Reunion",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Pierre &amp; Miquelon",
//   "Samoa",
//   "San Marino",
//   "Sao Tome and Principe",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "Solomon Islands",
//   "Somalia",
//   "South Africa",
//   "South Korea",
//   "South Sudan",
//   "Spain",
//   "Sri Lanka",
//   "St Kitts &amp; Nevis",
//   "St Lucia",
//   "St Vincent",
//   "Sudan",
//   "Suriname",
//   "Swaziland",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Timor L'Este",
//   "Togo",
//   "Tonga",
//   "Trinidad &amp; Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Turks &amp; Caicos",
//   "Tuvalu",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States of America",
//   "Uruguay",
//   "Uzbekistan",
//   "Vanuatu",
//   "Vatican City",
//   "Venezuela",
//   "Vietnam",
//   "Virgin Islands (US)",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];

// const arr = [3, 4, 5, 6, 7, 8, 9];
// const input = document.getElementById("inputField");
// const checkbox = document.getElementById("mycheck");
// const suggestion = document.getElementById("suggestionArea");
// input.addEventListener("input", (e) => {
//   const inputValue = e.target.value;

//   suggestion.innerHTML = "";

//   if (inputValue === "") return;
//   console.log(inputValue);
//   let filtered;
//   if (checkbox.checked) {
//     filtered = countries.filter((item) => {
//       item.toLowerCase().startsWith(inputValue);
//     });
//   } else {
//     filtered = countries.filter((item) => {
//       item.toLowerCase().includes(inputValue);
//     });
//   }
//   console.log(filtered);
//   filtered.forEach((item) => {
//     const div = document.createElement("div");
//     div.textContent = item;
//     div.onclick = () => {
//       input.value = item;
//       suggestion.innerHTML = "";
//     };
//     suggestion.appendChild(div);
//   });
// });

const data = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Peach",
  "Cherry",
  "Blueberry",
  "Kiwi",
  "Papaya",
  "Guava",
  "Lemon",
];

const searchBox = document.getElementById("inputField");
const suggestionsBox = document.getElementById("suggestionArea");
const startsWithCheckbox = document.getElementById("mycheck");

searchBox.addEventListener("input", function (e) {
  const input = e.target.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (input === "") return;

  let filtered;
  if (startsWithCheckbox.checked) {
    filtered = data.filter((item) => item.toLowerCase().startsWith(input));
  } else {
    filtered = data.filter((item) => item.toLowerCase().includes(input));
  }

  console.log(filtered);

  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    div.onclick = () => {
      searchBox.value = item;
      suggestionsBox.innerHTML = "";
    };
    suggestionsBox.appendChild(div);
    console.log(div);
  });
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".autocomplete-container")) {
    suggestionsBox.innerHTML = "";
  }
});
