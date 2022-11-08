function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = '/exSiteRelogio/modelo/arquivos/manha.png'
        document.body.style.background = '#fecc42'
    }

    else if (hora > 12 && hora < 18) {
        img.src = '/exSiteRelogio/modelo/arquivos/tarde.png'
        document.body.style.background = '#f46a04'
    }

    else {
        img.src = '/exSiteRelogio/modelo/arquivos/noite.png'
        document.body.style.background = '#15232f'
    }

}