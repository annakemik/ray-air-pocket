const playerOverlay = document.querySelector(".player-overlay");
const popupButtons = document.querySelectorAll(".btn-popup");

popupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playerOverlay.classList.add("active");
  });
});

playerOverlay.addEventListener("click", () => {
  playerOverlay.classList.remove("active");
});
