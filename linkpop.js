// The show modal button should be changed to the button that is meant to show the modal

const showModal = document.getElementById("show-modal");
const closeModalBtn = document.getElementById("close-btn");
const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const link = document.getElementById("link-input");
const copyLinkBtn = document.getElementById("copy-link");
const viewPopUp = document.getElementById("show-view_modal");

// showModal.addEventListener("click", () => {
//   modalContainer.style.display = "block";
// });

// closeModalBtn.addEventListener("click", () => {
//   modalContainer.style.display = "none";
// });

// modal.addEventListener("click", () => {
//   modalContainer.style.display = "none";
// });

showModal.addEventListener("click", () => {
  viewPopUp.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  viewPopUp.style.display = "none";
});

modal.addEventListener("click", () => {
  viewPopUp.style.display = "none";
});

function copyText() {
  if (link.value === "") return;

  navigator.clipboard.writeText(link.value);
  link.select();
  console.log(link.value);
}

copyLinkBtn.addEventListener("click", copyText);
