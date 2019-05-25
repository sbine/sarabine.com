var email = 'sara' + '' + '@' + 'sarabine' + '.' + 'com';
var emailElements = document.getElementsByClassName('email');
var item;
for (var i = 0; i < emailElements.length; i++) {
    item = emailElements[i];
    if (item.innerHTML.length === 0) {
        item.innerHTML = item.innerHTML + email;
    }
    item.href = 'mailto:' + email;
}

var dateElements = document.getElementsByClassName('year');
var year = new Date().getFullYear();
for (var i = 0; i < dateElements.length; i++) {
    item = dateElements[i];
    if (item.innerHTML.length === 0) {
        item.innerHTML = item.innerHTML + year;
    }
}
