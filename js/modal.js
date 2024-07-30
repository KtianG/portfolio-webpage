(() => {
  // Create an object to store references to DOM elements
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  // Add click event listeners to the open/close modal buttons
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Function to toggle the visibility of the modal
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
