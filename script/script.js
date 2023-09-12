window.addEventListener('resize',(e) => {
    if (document.body.clientWidth < 800) {
        document.documentElement.style.setProperty('--widht', 80 + '%');
    } else {
        document.documentElement.style.setProperty('--widht', 724 + 'px');
    }
});

document.getElementById('button').onclick = function () {
    document.getElementById('img').style.marginLeft = '-200%';
    setTimeout(() => {
        document.getElementById('img').style.display = 'none';
    }, 500);
    setTimeout(() => {
        document.getElementById('img2').style.display = 'block';
        setTimeout(() => {
            document.getElementById('img2').style.opacity = '1';
        }, 1)
    }, 500);
}