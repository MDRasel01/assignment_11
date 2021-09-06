var btn = document.getElementsByClassName('dots');
var slider = document.getElementsByClassName('slider_col');





btn[0].onclick = function(){
    
    slider[0].style.transform = "translateX(0px)";

}

btn[1].onclick = function(){
    
    slider[1].style.transform = "translateX(-800px)";

    for( var i=0; i<4; i++){
        btn[i].classList.remove('active');
    }

    this.classList.add('active');
}

btn[2].onclick = function(){
    
    slider[2].style.transform = "translateX(-1600px)";

    for( var i=0; i<4; i++){
        btn[i].classList.remove('active');
    }

    this.classList.add('active');

}

btn[3].onclick = function(){
    slider[3].style.transform = "translateX(-2400px)";

    for( var i=0; i<4; i++){
        btn[i].classList.remove('active');
    }

    this.classList.add('active');
}



// function dots_click(){
//     slider[0].style.transform = "translateX(0px)";

// }

// function dots_click(){
//     slider[1].style.transform = "translateX(-800px)";

// }

// function dots_click(){
//     slider[2].style.transform = "translateX(-800px)";

// }