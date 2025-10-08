const arr = ["Apple", "Orange", "Mango", "Banana"];
const input = document.getElementById("inputField");
const suggestion = document.getElementById("suggestionArea");



input.addEventListener("input", () => {
  if (suggestion.innerHTML === "") {
    arr.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = item;
      div.onclick = () => {
        input.value = item;
        suggestion.innerHTML = "";
      };
      suggestion.appendChild(div);
    });
  }
});
