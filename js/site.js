jQuery(document).ready(function($){
$('input.gsc-search-button.gsc-search-button-v2').attr("src", "https://sacscoc.highlands.edu/wp-content/themes/georgia-highlands/images/search.png");

  //$('#hdr-search').hide();
  $('ul.sf-menu').superfish();

  $('.flexslider').flexslider({
    animation: "slide"
  });

  $( "#mobilebuttonopen" ).click(function() {
    $( "body" ).toggleClass( "mobile-menu-open" );
  });

  $( "#search-box-toggle" ).click(function() {
      //$( "#hdr-search" ).toggleClass("hide");
       $("#hdr-search").animate({
             height: [ "toggle", "swing" ],
             opacity: "toggle"
             }, 450, "linear"
                     );
  });

  //GA Highlands 

  $('#menu-desktop').prepend('<li><a href="https://www.highlands.edu/quick-links/">QUICK LINKS</a></li>');
  $('#menu-desktop').append('<li><a href="https://securelb.imodules.com/s/1181/index.aspx?sid=1181&gid=1&pgid=577&cid=1373" class="ltorangebg btn">Give Today â€º</a></li>');
  
   $(".toggle-pagination").click(function(){
   $(".atoz").animate({
             height: [ "toggle", "swing" ],
             opacity: "toggle"
             }, 400, "linear"
	             );
   });
    
   $('#quick_links_content').hide();
        
   $("#quick_links").click(function(){
       $("#quick_links_content").animate({
             height: [ "toggle", "swing" ],
             opacity: "toggle"
             }, 400, "linear"
	             );
   });

   if($(window).width() >= 768 ){

        $('.no-click').click(function(e) { return false; }); 

   }
   
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
   //End GA Highlands

});
