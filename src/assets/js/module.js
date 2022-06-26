const modalBtn = document.querySelectorAll("[data-modal]");
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");

modalBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    let $this = event.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    let modalContent = document.querySelector(".modal__content");

    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    modal.classList.add("show");

    setTimeout(() => {
      modalContent.style.transform = "none";
    }, 1);
  });
});

modalClose.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget.closest(".modal");
    currentModal.classList.remove("show");
  });
});

modal.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget;
    currentModal.classList.remove("show");
  });
});
