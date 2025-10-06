
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
