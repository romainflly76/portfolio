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
        <a href="#" id= "boutonsLiens" class="btn">Go somewhere</a>
      </div>
    </div>
    </div>`;
  }
}
projets();

// ********************** NAVBAR *********************************

let displayNavbar = document.getElementById("relative");
displayNavbar.innerHTML += `<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
<div class="container px-4 px-lg-5">
  <a id="name" class="navbar-brand text-white" href="#page-top">Romain Leboiteux</a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ms-auto my-2 my-lg-0">
      <li class="nav-item"><a class="nav-link text-white" href="index.html">Portfolio</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#projets">Mon Profil</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#contact">Mes Projets</a></li>
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
