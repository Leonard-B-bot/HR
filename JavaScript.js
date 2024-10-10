document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll("[data-close]");

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add("active");
        }
    }

    function closeModal() {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            modal.classList.remove("active");
        });
    }

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const modalId = this.getAttribute("data-modal");
            openModal(modalId);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    window.addEventListener("click", function (e) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    });
});