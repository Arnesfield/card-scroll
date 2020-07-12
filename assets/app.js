window.onload = () => {
  // get all cards
  document.querySelectorAll(".card").forEach((card) => {
    // get the buttons inside .card
    card.querySelectorAll(".btn-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        // get .card-contents and toggle selected
        card.querySelectorAll(".card-content").forEach((cardContent) => {
          cardContent.classList.toggle("selected");
        });
      });
    });
  });
};
