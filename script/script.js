window.addEventListener('resize',(e) => {
    if (document.body.clientWidth < 800) {
        document.documentElement.style.setProperty('--widht', 80 + '%');
    } else {
        document.documentElement.style.setProperty('--widht', 'auto');
    }
});