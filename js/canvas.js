let loadedImageURL;

function generateQuote() {
    loadImageUrl();
    insertImageIntoCanvas(loadedImageURL);
}

function loadImageUrl() {
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();

    // (2) запрос на другой домен :)
    xhr.open('GET', 'https://loremflickr.com/640/480', true);

    xhr.onload = function () {
        console.log(this.responseURL);
        loadedImageURL = this.responseURL;
    }
    xhr.onerror = function () {
        alert('Ошибка ' + this.status);
    }
    xhr.send();
}

function insertImageIntoCanvas(imageUrl) {
    let canvas = document.getElementById("image-canvas");
    console.log(canvas);
    let context = canvas.getContext("2d");

    let img = new Image();
    img.src = imageUrl;
    
    img.onload = function () {
        context.drawImage(image,0,0);
    };
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

function downloadQuote() {
    let canvas = document.getElementById('image-canvas');
    let req = new XMLHttpRequest();
    req.open("POST","quote.jpg",true);
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    console.log(canvas);
    req.send("img=" + canvas.toDataURL("img/png"));
    req.onreadystatechange = function(){
        if(req.readyState==4 && req.status==200) {
            var url = document.getElementById('url');
            url.setAttribute("href", req.responseText);
            url.innerHTML = "ссылка";

            console.log(req.responseText);
        }
    };
    req.onerror = function(){
        var url = document.getElementById('url');
        url.innerHTML = "";
        alert("Не удалось получить ссылку((")
    };
}



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