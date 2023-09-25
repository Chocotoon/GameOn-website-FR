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

function validate() {
  const conditionCheckbox = document.getElementById("checkbox1");
  const errorMessage = document.getElementById("message_conditions");
  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const email = document.getElementById("mail").value;
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (conditionCheckbox.checked == false) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.innerText = "Veuillez accepter les conditions pour continuer.";
    return false;
  }
  if (prenom.value.length <2 || nom.value.length <2 || !email.match(emailRegex) ) {
    alert("Veuillez remplir les champs du formulaire.")
    return false;
  }
  else if (prenom.value.length >1 && prenom.value.length >1 && conditionCheckbox.checked == true) {
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  }
}
