var colors = ['aliceblue', 'orange', 'cornflowerblue', 'lavender', 'lightpink', 'ivory', 'plum', 'mistyrose']
var aColor = colors[0]
colors[1] = 'dodgerblue'
console.log(aColor)
console.log(colors.length)
document.body.style['background'] = aColor
//cmd + d lets you select the matching words


function changeColor() {
    var rand = Math.random()
    rand = rand * 8
    rand = Math.floor(rand)
    console.log(rand)
    var randomColor = colors[rand]
    console.log(randomColor)
    document.body.style['background'] = randomColor

    var now = new Date()
    var seconds = now.getSeconds()
    document.getElementById('bar').style ['width'] = seconds * 10 + 'px'
    console.log(seconds)
}

window.setInterval(changeColor, 1000)

//time
var now = new Date()
var hours = now.getHours()
var day = now.getDay()
var month = now.getMonth()
var year = now.getFullYear()

var dateSentence = 'It is ' + hours + ' ' + day + ' ' + 'in' + ' ' + month + ' ' + year
document.getElementById
console.log(dateSentence)

