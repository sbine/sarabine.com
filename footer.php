</div>
<footer>
	<p>&copy; <?php echo date('Y'); ?> Sara Bine</p>
</footer>
<script>
  var email = 'sara' + '' + '@' + 'sarabine' + '.' + 'com';
  var emailElements = document.getElementsByClassName('email');
    for (var i = 0; i < emailElements.length; i++) {
    var item = emailElements[i];  
    item.innerHTML = email;
    item.href = 'mailto:' + email;
  }
</script>
<!--
<script async type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-16515493-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
-->
</body>
</html>