// Elements
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const customModal = document.getElementById("customModal");
const actionButton = document.getElementById("actionButton");

// Open Modal
openModal.addEventListener("click", () => {
  customModal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
  customModal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
  if (event.target === customModal) {
    customModal.style.display = "none";
  }
});

// Action Button Event
actionButton.addEventListener("click", () => {
  alert("Action triggered successfully!");
  customModal.style.display = "none";
});
