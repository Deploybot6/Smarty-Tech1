// Ouvrir le menu
document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("side-menu").classList.toggle("active");
});

// Fermer le menu avec le bouton "Retour"
document.getElementById("back-button").addEventListener("click", function() {
    document.getElementById("side-menu").classList.remove("active");
});

function moveSearch() {
  const searchContainer = document.querySelector('.search-container');
  searchContainer.classList.toggle('centered');
}
