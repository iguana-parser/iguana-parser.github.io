
$(document).ready(function() {
	$('.code-container').hover(
	  function () {
	    $(this).children('.github-link').show();
	  }, 
	  function () {
	    $(this).children('.github-link').hide();
	  }
	);
});
