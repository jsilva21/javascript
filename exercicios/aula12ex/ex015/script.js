function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src','bebe-m.jpg')
            }else if (idade <18){
                //Jovem
                img.setAttribute('src','jovem-m.jpg')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idoso-m.jpg')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src','bebe-f.jpg')
            }else if (idade <18){
                //Jovem
                img.setAttribute('src','jovem-f.jpg')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src','adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idoso-f.jpg')
            }
        }
                res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
                res.style.textAlign = 'center'
                res.appendChild(img)
    }

}