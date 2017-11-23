var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('GET', 'https://loremflickr.com/320/240', true);

xhr.onload = function () {
    console.log(this.responseURL);
    RESPONEURL = this.responseURL;
    DO();
    // insertImage("https://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.27.jpg");
}
xhr.onerror = function () {
    alert('Ошибка ' + this.status);
}
xhr.send();

let RESPONEURL;

function DO(){
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    
    var xhr = new XHR();
    
    // (2) запрос на другой домен :)
    xhr.open('GET', 'https://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.27.jpg', true);
    
    xhr.onload = function () {
        console.log(this.responseURL);
        RESPONEURL = this.responseURL;
        // insertImage("https://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.27.jpg");
    }
    xhr.onerror = function () {
        alert('Ошибка ' + this.status);
    }
    xhr.send();
}

function insertImage(url) {
    let canvas = document.getElementById("image-canvas"),
        context = canvas.getContext("2d");

    let img = new Image();
    img.src = window.URL.createObjectURL("https://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.27.jpg");
    img.onload = function () {
        let pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 150, 150);
        context.strokeRect(10, 10, 150, 150);
    }
}


function getImage() {
    $.ajax({
        method: 'GET',
        url: 'https://placeimg.com/640/480/any',
        headers: 'Access-Control-Allow-Origin: *',
        success: function (data) {
            console.log(data);
        }
    });
    alert("Hello");
}

function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight) {
    let words = text.split(" ");
    let countWords = words.length;
    let line = "";
    for (let n = 0; n < countWords; n++) {
        let testLine = line + words[n] + " ";
        let testWidth = context.measureText(testLine).width;
        if (testWidth > maxWidth) {
            context.fillText(line, marginLeft, marginTop);
            line = words[n] + " ";
            marginTop += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, marginLeft, marginTop);
}

let canvas = document.getElementById("image-canvas"), 
context = canvas.getContext("2d");

// let img = new Image();
// img.src = window.URL.createObjectURL("http://placeimg.com/640/480/any");
// img.onload = function(){
//     let pattern = context.createPattern(img,"repeat");
//     context.fillStyle = pattern;
//     context.fillRect(10, 10, 150, 150);
//     context.strokeRect(10, 10, 150, 150);
// }

// context.strokeRect(50, 40, 100, 100);
// context.fillRect(200, 40, 100, 100);

// canvas.download = ("chart.png");



// var maxWidth = 600; //размер поле, где выводится текст
// var lineHeight = 25;

// var marginLeft = 20;
// var marginTop = 215;
// var text = "Сначала мы разбиваем текст на слова по пробелам, а потом обходим эти слова в цикле, " +
//         "объединяя их по одному в строку. Если при последнем объединении ширина этой строки меньше максимальной, " +
//         "то продолжаем, а если больше, то выводим строку без последнего слова, а его записываем в новую строку." +
//         "И так продолжаем, пока не обработаем весь текст.";
// context.font = "16pt Calibri";
// context.fillStyle = "#000";
// wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight);