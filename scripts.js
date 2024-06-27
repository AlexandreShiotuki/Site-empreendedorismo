document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const paymentPopup = document.getElementById("payment-popup");
    const confirmationPopup = document.getElementById("confirmation-popup");
    const closeButtons = document.querySelectorAll(".close-btn");
    const paymentForm = document.getElementById("payment-form");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            paymentPopup.style.display = "block";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            paymentPopup.style.display = "none";
            confirmationPopup.style.display = "none";
        });
    });

    window.addEventListener("click", event => {
        if (event.target == paymentPopup) {
            paymentPopup.style.display = "none";
        } else if (event.target == confirmationPopup) {
            confirmationPopup.style.display = "none";
        }
    });

    paymentForm.addEventListener("submit", event => {
        event.preventDefault();
        paymentPopup.style.display = "none";
        confirmationPopup.style.display = "block";
    });
});
