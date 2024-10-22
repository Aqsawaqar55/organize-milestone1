var Personalbtn = document.getElementById('Personalbtn');
var edubtn = document.getElementById('edubtn');
var expbtn = document.getElementById('expbtn');
var skillbtn = document.getElementById('skillbtn');
var perleg = document.getElementById('perleg');
var edu = document.getElementById('edu');
var exp = document.getElementById('exp');
var skill = document.getElementById('skill');
Personalbtn.addEventListener('click', function () {
    if (perleg.style.display == 'block') {
        perleg.style.display = 'none';
    }
    else {
        perleg.style.display = 'block';
    }
});
edubtn.addEventListener('click', function () {
    if (edu.style.display == 'block') {
        edu.style.display = 'none';
    }
    else {
        edu.style.display = 'block';
    }
});
expbtn.addEventListener('click', function () {
    if (exp.style.display == 'block') {
        exp.style.display = 'none';
    }
    else {
        exp.style.display = 'block';
    }
});
skillbtn.addEventListener('click', function () {
    if (skill.style.display == 'block') {
        skill.style.display = 'none';
    }
    else {
        skill.style.display = 'block';
    }
});
