

let chanel = [
    document.getElementById('chanel1'),
    document.getElementById('chanel2'),
    document.getElementById('chanel3'),
]

const clip = [
    'https://www.youtube.com/embed/_EA0FpNVT5s?autoplay=1&mute=1',
    'https://www.youtube.com/embed/513zRcgQTYY?autoplay=1&mute=1',
    'https://www.youtube.com/embed/327Wyg11Lcc?autoplay=1&mute=1',
]

function changeChanel(num, adress) {
    num.onclick = function () {
        if (myVideo.hasAttribute('src')) {
            myVideo.src = adress
            console.log(myVideo)
        } else {
            console.log(myVideo)
        }
    }
}

sw.onclick = function () {
    sw.classList.toggle("panel__switch--off")
    if (sw.classList.contains("panel__switch--off")) {
        myVideo.removeAttribute('src', '')
    } else {
        myVideo.style.display = 'block'
        myVideo.setAttribute('src', '')
        changeChanel(chanel[0], clip[0])
        changeChanel(chanel[1], clip[1])
        changeChanel(chanel[2], clip[2])
    }
}

