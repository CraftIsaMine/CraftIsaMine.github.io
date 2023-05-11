var liste = ['Game Maker', 'Designer','Video Editor','Social Media Manager']

const typed = new Typed('#metier', {
    strings: liste,
    typeSpeed: 150,
    backSpeed:50,
    backDelay:2000,
    loop:true
});


ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.infos',{origin:'top'});
ScrollReveal().reveal('.image',{origin:'bottom'});

function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}