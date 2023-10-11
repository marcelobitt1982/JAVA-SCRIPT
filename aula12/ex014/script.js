function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date() 
var hora = data.getHours()
//var hora = 20
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 'manha.jpg'
    document.body.style.background = '#fee4bd'
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffe263'
} else {
    //BOA NOITE
    img.src = 'noite.jpg'
    document.body.style.background = '#014f90'
}
}

