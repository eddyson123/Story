var count = 0;
const but = setInterval(function () {
    count++;
    var sec = document.getElementById('sec');
    var num = document.getElementById('num');
        sec.style.width = count + '%';
        num.innerHTML = count + '%';
    if (sec.style.width == '100%') {
        clearInterval(but);
        setInterval(() => {
            window.location = 'body.html';
        }, 1500);
    }
}, 160);

function info() {
    alert('You have been given a 7-days free trial to check out our services.\n\nAfterwards, you will be required to pay a certain fee to continue using our services.');
}

function bars() {
    var su = document.getElementById('sub');
    var four = document.getElementById('forth');
    if (su.style.width == '0%') {
        su.style.width = '60%';
        su.style.opacity = '1';
    }
    else {
        su.style.width = '0%';
        su.style.opacity = '0.1';
    }
}

function comment() {
    var tex = document.getElementById('text');
    var lg = document.getElementById('lg');
    var hr = document.getElementById('hr');

    lg.innerHTML = 'You:' + '<br>' + tex.value;
    hr.style.display = 'block';
}

// function get() {
//     var loc = localStorage.removeItem('key1');
//     alert(loc);
// }

function use() {
    var brt = prompt('Change your username', localStorage.getItem('key1'));
    if (brt == '' || brt == null) {
        alert('You cannot leave your username empty.');
    }
    else {
        alert('You have successfully changed your username.');
        localStorage.setItem('key1', brt);
    }
}

function back() {
    window.location = 'body.html';
}

function view() {
    alert('Please check back after some time to view the products section as we are going to recommend a few products to you in a space of 48 hours.\n\nThanks for understanding.');
}