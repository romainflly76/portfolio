let imgSites = [
  "Banque",
  "Memory",
  "Norimmo",
  "Proxi",
  "Swapi",
  "Terre de Geek",
];
let infos = [
  "Projet fil rouge de Formation: site de Banque, JS, REGEX ",
  "Jeu des paires,Jeu du Memory en Java Script",
  "Projet Collectif Site Norimmo formation AFPA",
  "Projet personnel, Site vitrine d'une epicerie de proximité",
  "Projet site web Fan Star Wars, utilisation de AJAX API Swapi",
  "Debut de formation, Utilisation de CSS sans Bootstrap",
];

let links = [
  "https://romainflly76.github.io/bank/",
  "https://romainflly76.github.io/Memory-jeu-des-paires/",
  "https://romainflly76.github.io/NorImmo/",
  "https://romainflly76.github.io/PROXI_PREAUX_76/",
  "https://romainflly76.github.io/swapi/",
  "#",
];

console.log(infos);
console.log(imgSites);

function projets() {
  for (let i = 0; i < imgSites.length; i++) {
    const imgName = imgSites[i];
    // cardsProjets[i].src = "img/Projets" + elem + ".png";
    let cardsProjets = document.getElementById("cards");
    let sourceCards = "img/Projets/" + imgName + ".png";
    console.log(sourceCards);

    cardsProjets.innerHTML += `<div class="col-12 col-sm-6 col-lg-4 my-2 mt-5 mb-5"><div class="card">
            <img class="card-img-top" src="${sourceCards}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${infos[i]}</h5>
        <a href="${links[i]}" target="blank" id= "boutonsLiens" class="btn">Visitez</a>
      </div>
    </div>
    </div>`;
  }
}
projets();

// ********************** NAVBAR *********************************

let displayNavbar = document.getElementById("relative");
displayNavbar.innerHTML += `<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
<div class="container-fluid">
  <a id="name" class="navbar-brand text-white" href="#page-top">Romain Leboiteux</a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ms-auto my-2 my-lg-0">
      <li class="nav-item"><a class="nav-link text-white" href="index.html">Portfolio</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#profil">Mon Profil</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#projects">Mes Projets</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#contact">Contact</a></li>
    </ul>
  </div>
</div>
</nav>`;

// ************************************** SCROLL NAVBAR FIXED + ANIMATION *******************************
window.onscroll = function () {
  if (document.documentElement.scrollTop > 210) {
    document.getElementById("mainNav").style.background = "#27587e";
    document.getElementById("mainNav").style.padding = "30px 10px";
  } else {
    document.getElementById("mainNav").style.background = "";
    document.getElementById("mainNav").style.padding = "90px 10px";
  }
};

let contacter = document.getElementById("contact");
contacter.innerHTML +=
  ' <h2 class="text-center">Pour me contacter</h2>\
<hr class="divider" />\
<div class="container">\
 <form class="form-inline" action="https://formsubmit.co/romain.leboiteux@gmail.com" method="POST">\
<div class="form-group"><input id="nom" class="form-control-lg" type="text" name="name" placeholder="Entrez votre nom" required>\
<input id="mail" class="form-control-lg mt-2" type="email" name="email" placeholder="Entrez votre mail" required>\
<button type="button" class="btn btn-light btn-lg m-5">envoyer</button></div></form></div>';
