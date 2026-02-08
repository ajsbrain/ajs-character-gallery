const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".character-card");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});