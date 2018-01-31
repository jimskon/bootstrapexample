$(document).ready(function() {
    

    $(".dropdown-menu a").click(function(){
    	$('.page').hide();
	    console.log("pick!"+$(this).attr('data-page'));
	    $(this).parents(".dropdown").find('.selection').text($(this).text());
		$('#'+$(this).attr('data-page')).show();
    });
    
    

});
