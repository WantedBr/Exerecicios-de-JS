function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    //mensagem de erro
    if (fano.value.length <= 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else { //nomeando a variavel dos rad's
        var fsex = document.getElementsByName('radsex')

        //calculador de idade!
        var idade = ano - Number(fano.value)

        var genero = ''



        //botão rad, homem!
        if (fsex[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.src = '/exSiteIdade/img/criançaM.png'
            } else if (idade < 21) {
                //jovem
                img.src = '/exSiteIdade/img/adolescenteM.png'
            }
            else if (idade < 50) {
                //adulto
                img.src = '/exSiteIdade/img/adultoM.png'
            }
            else {
                //idoso
                img.src = '/exSiteIdade/img/idosoM.png'

            }
        }
        //botão rad, mulher!
        else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.src = '/exSiteIdade/img/criançaF.png'
            } else if (idade < 21) {
                //jovem
                img.src = '/exSiteIdade/img/adolescenteF.png'
            }
            else if (idade < 50) {
                //adulto
                img.src = '/exSiteIdade/img/adultaF.png'
            }
            else {
                //idoso
                img.src = '/exSiteIdade/img/idosoF.png'
            }
        }






    }

    res.innerHTML = `voce é ${genero} com ${idade} anos!`
}
