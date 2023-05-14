const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let tempo = dateToday.getHours()
    let minuto = dateToday.getMinutes()
    let segundo = dateToday.getSeconds()

    if(tempo < 10) tempo = '0' + tempo
    if(minuto < 10) minuto = '0' + minuto
    if(segundo < 10) segundo = '0' + segundo

    horas.textContent = tempo
    minutos.textContent = minuto
    segundos.textContent = segundo
})