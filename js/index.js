var liste = ['Game Maker', 'Designer','Youtuber','Social Media Manager']

const typed = new Typed('#metier', {
    strings: liste,
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
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
