
const imgDuck = $('#img-duck');
const imgMan = $('#img-man');
const wrapper = $('.wrapper');
const windowWidth = $(window).width() - 300;
let position = 0;

let timer = setInterval(function () {
    moveLeft();
}, 10);

function moveLeft() {
    position++;
    if (position < windowWidth) {
        wrapper.css('left', position+'px');
    } else {
        imgMan.css('transform','none');
        imgDuck.css('transform','rotateY(180deg)');

        imgMan.attr('src','asesst/duck.gif');
        imgDuck.attr('src','asesst/man.gif');
        moveRight();

    }
}

function moveRight() {
    if (position-- >= 0) {
        $('#duck').css('right', position + 'px');
        $('#man').css('right', (position + 150) + 'px');
        setTimeout(moveRight, 0.1);
    }else{
        imgMan.css('transform','none');
        imgDuck.css('transform','rotateY(180deg)');

        imgMan.attr('src','asesst/man.gif');
        imgDuck.attr('src','asesst/duck.gif');
        moveLeft();
    }
}