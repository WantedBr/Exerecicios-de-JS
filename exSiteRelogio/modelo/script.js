function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var minutes = data.getMinutes()
    var hora = data.getHours()
    var day = data.getDate()

    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos do dia ${day}`
    if (hora >= 0 && hora <= 12) {
        img.src = '/modelo/arquivos/manha.png'
        document.body.style.background = '#fecc42'
    }

    else if (hora > 12 && hora < 18) {
        img.src = '/modelo/arquivos/tarde.png'
        document.body.style.background = '#f46a04'
    }

    else {
        img.src = '/modelo/arquivos/noite.png'
        document.body.style.background = '#15232f'
    }

}