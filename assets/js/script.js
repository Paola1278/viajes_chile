document.addEventListener('DOMContentLoaded', function () {

    //Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach(function (popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl);
    });
    
    //Scroll Reveal
    window.sr = ScrollReveal();
    sr.reveal('#quienes-somos', {
    duration: 2300,
    delay: 270
    });
    });