//window.addEventListener("load", animaHero);

function animaHero() {
  // Remove a tela de carregamento quando o site carrega
  var load_screen = document.getElementById("load_screen");
  document.body.removeChild(load_screen);

  // Inicia as animacoes
  var logo = document.getElementById("logo");
  var texto_inicio_1 = document.getElementById("texto_inicio_1");
  var texto_inicio_2 = document.getElementById("texto_inicio_2");

  logo.style.visibility = "visible";
  logo.classList.add("apear");

  texto_inicio_1.style.visibility = "visible";
  texto_inicio_1.classList.add("slide-right");

  texto_inicio_2.style.visibility = "visible";
  texto_inicio_2.classList.add("slide-left");
};

animaHero();

//Torna a tela de carregamento visivel no carregamento da página
document.getElementById("load_screen").style.visibility = "visible";
        
// Funcao de links de navegacao do site
function jumpTo(anchor){
  var y;

    switch (anchor) {
  case 'inicio':
    anchor='';
  break;

  case 'quem_somos':
    y=-100;      
  break;

  case 'beneficios':
    if(window.innerWidth <= 780){ y=-175; }
    else { y=-240; }      
  break;

  case 'como_funciona':
    y=-100;      
  break

  case 'contato':
    y=-80;      
  break;
  }
  
  $('.collapse').collapse("hide");
  window.location.href = "#" + anchor;
  window.scrollBy(0, y);
}

// Remove a tag de propaganda do pingendo
document.getElementsByTagName("pingendo")[0].style.display = "none";