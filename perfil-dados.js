const linkHome = document.getElementById("link-home")

document.addEventListener("keyup",(e)=>{
    console.log(e.code)
    if(e.code == "Backspace"){
        linkHome.click()
    }
})