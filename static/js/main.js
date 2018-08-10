addEventListener('scroll', onScroll);

function onScroll() {
    let nav = document.querySelector('nav');
    nav.style.position = 'fixed';

    if (window.scrollY > 69) {
        nav.classList.add('nav-blue')
    } else {
        nav.classList.remove('nav-blue');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mail-link').href = 'mailto:co' + 'ntact@lu' + 'cas-hild.def'.substring(0, 12 - 1);

    document.getElementById('open-mobile-nav').addEventListener('click', function () {
        $('#mobile-nav-window').animate({ width: 'toggle' }, 350);
    })

    document.getElementById('close-mobile-nav').addEventListener('click', function () {
        $('#mobile-nav-window').animate({ width: 'toggle' }, 350);
    });

    document.querySelectorAll('#mobile-nav-window-links a').forEach(link => {
        link.addEventListener('click', function () {
            document.getElementById('mobile-nav-window').style.display = null;
        })
    })
}, false);