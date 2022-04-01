let bot = document.getElementById("bot")
let a = document.getElementById("css")


bot.addEventListener("click", function() {

    var sorteio = Math.floor(Math.random() * 7)

    switch (sorteio){

        case 1:a.href = ("style1.css")
        break;
        case 2:a.href = ("style2.css")
        break;
        case 3: a.href = ("style3.css")
        break;
        case 4: a.href = ("style4.css")
        break;
        case 5:a.href = ("style5.css")
        break;
        case 6: a.href = ("style6.css")
        break;
        default: a.innerText ="Error"
    }
     
    console.log(a)
})