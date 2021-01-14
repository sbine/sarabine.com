var email = 'sara' + '' + '@' + 'sarabine' + '.' + 'com';
var emailElements = document.getElementsByClassName('email');
var el;
for (var i = 0; i < emailElements.length; i++) {
    el = emailElements[i];
    if (el.innerHTML.length === 0) {
        el.innerHTML = email;
    }
    el.href = 'mailto:' + email;
}

var dateElements = document.getElementsByClassName('year');
var year = new Date().getFullYear();
for (var i = 0; i < dateElements.length; i++) {
    el = dateElements[i];
    if (el.innerHTML.length === 0) {
        el.innerHTML = year;
    }
}
