Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.text',{origin:'top'});
ScrollReveal().reveal('.card, .videos',{origin:'bottom'});