const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup", (e)=>{
  console.log(e.key);
  console.log(e.code);
  if(e.code == "Digit1"){
    console.log("Abrir navegação secundária")
    navPerfil.style.display = "block"
  }
})