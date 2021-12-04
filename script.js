setInterval( function(){
    let hoje = new Date()
    let diaS = hoje.getDay()
    let diaM = hoje.getDate()
    let mes = hoje.getUTCMonth()
    let ano = hoje.getFullYear()
    let hora = hoje.getHours()
    let min = hoje.getMinutes()
    let sec = hoje.getSeconds()
    let nextYear = ano + 1
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('firstSentence')
    let res2 = document.getElementById('twoSentence')
    let res3 = document.getElementById('threeSentence')
    let res4 = document.getElementById('fourSentence')
    let res5 = document.getElementById('fiveSentence')

    let numDiasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasCorridosAno = 0

    for(var i = 0; i < mes; i++){
        diasCorridosAno += numDiasMes[i]
    }

    let faltaDia = 365 - (diasCorridosAno + diaM)
    let faltaHora = faltaDia * 24
    let faltaMinuto = faltaHora * 60
    let faltaSegundo = faltaMinuto * 60

    titulo.innerText = `CONTAGEM PARA ${nextYear}!`
    res.innerText = `Faltam ${faltaDia} dias para o fim de ${ano}`
    res2.innerText = `Faltam ${faltaHora - hora} horas para o fim de ${ano}`
    res3.innerText = `Faltam ${faltaMinuto - min} minutos para o fim de ${ano}`
    res4.innerText = `Faltam ${faltaSegundo - sec} segundos para o fim de ${ano}`
    res5.innerText = `São ${faltaDia} dias, ${faltaHora - hora} horas, ${faltaMinuto - min} minutos e ${faltaSegundo - sec} segundos para ${nextYear}!`
    
})