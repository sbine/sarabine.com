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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-16515493-1', 'auto');
ga('send', 'pageview');