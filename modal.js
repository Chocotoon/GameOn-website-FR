function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalContent = document.querySelector(".modal-body");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

// Fonctions de validation du formulaire
function validatePrenom() {
  const prenom = document.getElementById("prenom");
  if (prenom.value.length < 2) {
    prenom.parentElement.setAttribute("data-error", "Vous devez remplir ce champ et il doit contenir au moins 2 caractères.");
    prenom.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  else {
    prenom.parentElement.removeAttribute("data-error");
    prenom.parentElement.setAttribute("data-error-visible", "false");

  }
  return true;
}

function validateNom() {
  const nom = document.getElementById("nom");
  if (nom.value.length < 2) {
    nom.parentElement.setAttribute("data-error", "Vous devez remplir ce champ et il doit contenir au moins 2 caractères.");
    nom.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  else {
    nom.parentElement.removeAttribute("data-error");
    nom.parentElement.setAttribute("data-error-visible", "false");
  }
  return true;
}

// Vérifie que les conditions d'utilisations sont acceptées
function validateCheckbox() {
  const conditionCheckbox = document.getElementById("checkbox1");
  if (!conditionCheckbox.checked) {
    conditionCheckbox.parentElement.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation pour continuer.");
    conditionCheckbox.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  else {
    conditionCheckbox.parentElement.removeAttribute("data-error");
    conditionCheckbox.parentElement.setAttribute("data-error-visible", "false");
  }
  return true;
}

function validateMail() {
  const email = document.getElementById("mail");
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!email.value.match(emailRegex)) {
    email.parentElement.setAttribute("data-error", "Veuillez indiquer une adresse mail valide.");
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  else {
    email.parentElement.removeAttribute("data-error");
    email.parentElement.setAttribute("data-error-visible", "false");
  }
  return true;
}

function validateNbetournois() {
  const nbeTournois = document.getElementById("nbe_tournois");
  if (isNaN(nbeTournois.value) || nbeTournois.value == "") {
    nbeTournois.parentElement.setAttribute("data-error", "Veuillez indiquer une quantité valide.");
    nbeTournois.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  else {
    nbeTournois.parentElement.removeAttribute("data-error");
    nbeTournois.parentElement.setAttribute("data-error-visible", "false");
  }
  return true;
}

function validateRadiobuttons() {
  const radioButtons = document.querySelectorAll('input[name="location"]');
  const radioContainer = document.querySelector('.radioContainer');
  if (Array.from(radioButtons).some((radioButton) => radioButton.checked)) {
    radioContainer.removeAttribute("data-error");
    radioContainer.setAttribute("data-error-visible", "false");
    return true;
  }
  else {
    radioContainer.setAttribute("data-error", "Veuillez sélectionner une ville.");
    radioContainer.setAttribute("data-error-visible", "true");
    return false;
  }
}


function validate() {
  validatePrenom();
  validateNom();
  validateMail();
  validateCheckbox();
  validateNbetournois();
  validateRadiobuttons();
  if (!validatePrenom() || !validateNom() || !validateMail() || !validateCheckbox() || !validateNbetournois() || !validateRadiobuttons()) {

  }
  else {
    modalContent.innerHTML = "";
    modalContent.innerHTML = "<p>Merci pour </br>votre inscription</p>";
    modalContent.style.height = "600px";
    modalContent.style.margin = "200px auto 0px auto";
    modalContent.style.textAlign = "center";

    const fermerValidate = document.createElement("button");
    fermerValidate.classList.add("btn-submit")
    fermerValidate.innerText = "Fermer";
    fermerValidate.style.marginTop = "440px";
    modalContent.appendChild(fermerValidate);
    fermerValidate.addEventListener("click", () => {
      modalbg.style.display = "none";
    })
  }
}
