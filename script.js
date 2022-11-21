// Fonctionnalité 1 

var footer =  document.getElementsByTagName("footer");

var nbclick = 0

var footerCliker = function(){
    nbclick = nbclick + 1
    console.log("clic n°" + nbclick);
};

footer[0].addEventListener("click", footerCliker);

// Fonctionnalité 2

var menu = document.getElementById("navbarHeader")

var menuS =  document.getElementsByClassName("navbar-toggler")

let navClick = function(){
    menu.classList.toggle("collapse")
}

menuS[0].addEventListener("click", navClick);

// Fonctionnalité 3

var firstCard = document.getElementsByClassName("row");

var card = firstCard[1].firstElementChild

var editBtn =  card.getElementsByClassName("btn-outline-secondary");

let clickEdit = function(){
    editBtn[0].style.color = "red"; 
}

editBtn[0].addEventListener("click", clickEdit);

// Fonctionnalité 4

var secondCard = document.getElementsByClassName("row");

var cardTwo = secondCard[1].children[1];

var editBtnTwo = cardTwo.getElementsByClassName("btn-outline-secondary");

let clickEditTwo = function(){

    if ( editBtnTwo[0].style.color === ''){

        editBtnTwo[0].style.color = "green"; 
        
    }else{
        editBtnTwo[0].style.color = ""; 
        }
}

editBtnTwo[0].addEventListener("click", clickEditTwo);

// Fonctionnalité 5

var bootstaro = document.getElementsByTagName("link");

var need = bootstaro[0]

var header = document.getElementsByTagName("header");

var remove = false

let bdclick = function(){
    if( remove === false || remove === undefined ){
        bootstaro[0].remove();
        remove = true      
    }else{
    
    }
 
}

header[0].addEventListener("dblclick", bdclick);

// repaire 

var title = document.getElementsByTagName("h1");
var titles = document.getElementsByTagName("title");

let bdclickr = function(){
    
    if( remove === true ){
        document.head.insertBefore(need, titles[0]);
        remove = false;
        
    }else{
    
    }
    
}
title[0].addEventListener("dblclick", bdclickr);

// Fonctionnalité 6

var cardSix = document.getElementsByClassName("row");

var cardtest = cardSix[1].children;

var arr = Array.prototype.slice.call( cardtest )

arr.forEach(a => {
    var img = a.getElementsByClassName("card-img-top");
    var txt = a.getElementsByClassName("card-text");
    var btnOne = a.getElementsByClassName("btn-success");
    var resize = 0;

let move = function(){
    if (resize % 2 == 0){
        img[0].style.width = "20%"; 
        txt[0].style.display = "none"
        resize = resize + 1
    }else{
        img[0].style.width = "100%"; 
        txt[0].style.display = "block"
        resize = resize + 1
    }
   
}

btnOne[0].addEventListener("mouseenter", move);
})

// Fonctionnalité 7 && 8

var cardSeven = document.getElementsByClassName("row");

var arrowBlock = document.getElementsByTagName("section");

var arrowO = arrowBlock[0].getElementsByClassName("btn-primary");

var arrow = arrowBlock[0].getElementsByClassName("btn-secondary");

var rollOne = function(){
    var cardSevenFirst = firstCard[1].firstElementChild

    var cardSevenLast = firstCard[1].lastElementChild
   
    firstCard[1].insertBefore(cardSevenLast, cardSevenFirst);
}

var rollTwo = function(){
    arrowO[0].href="#"
    var cardSevenFirst = firstCard[1].firstElementChild

    var cardSevenLast = firstCard[1].lastElementChild
   
    firstCard[1].insertBefore(cardSevenFirst, cardSevenLast);
}

arrowO[0].addEventListener("click", rollTwo)


arrow[0].addEventListener("click", rollOne)

// Fonctionnalité 9

let icon = document.getElementsByTagName("strong");
let bodySel = document.getElementsByTagName("body");
let htmlSel = document.getElementsByTagName("html");
let select

let logSelection = function(){
    select = true;
    console.log("ok")
}

let keytest = function(e){
    if( e.key == "a" && select == true ){
        bodySel[0].className = '';
        bodySel[0].className = 'container col-4';
        bodySel[0].style.margin = "0"
        select = false;
    }else if ( e.key == "y" && select == true){
        bodySel[0].className = '';
        bodySel[0].className = 'container col-4';
        bodySel[0].style.margin = "auto"
        select = false;
    }else if ( e.key == "p" && select == true){
        bodySel[0].className = '';
        bodySel[0].className = 'container col-4';
        bodySel[0].style.marginRight = "0"
        select = false;
    }else if ( e.key == "s" && select == true){
        bodySel[0].className = '';
        select = false;
    }
    console.log(e)
}

addEventListener('keypress', keytest);

icon[0].addEventListener('click', logSelection);

