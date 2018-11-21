$(document).ready(function() {

		//ACTIVE CLASS CHANGE ON SCROLL

		//ACCORDION

   $('.js-open').click(function(){
   		if ($(this).hasClass('activeTab')) {
   			$(this).parents('dt').next('dd').slideUp(500);
	   		$(this).removeClass('activeTab');
   		}

   		else {
       	$(this).parents('dt').next('dd').slideDown(500);
   			$(this).addClass('activeTab');
   		}

   	});

		//ANIMATIONS ON SCROLL
   $(document).bind('scroll', function(){

      var scrollOffset = $(document).scrollTop();
			var containerOffsetHome = $('.header').offset().top - window.innerHeight;
      var containerOffsetProgress = $('.js-progressBar').offset().top - window.innerHeight/2;
      var containerOffsetServices = $('.js-services').offset().top - window.innerHeight/2;
			var containerOffsetContact = $('.js-contact').offset().top - window.innerHeight/2;
			var containerOffsetNews = $('.js-news').offset().top - window.innerHeight/2;

			if (scrollOffset > containerOffsetHome) {
				$('.header-content-navigation ul li a').removeClass('active');
				$('#navHome').addClass('active');
			}

      if (scrollOffset > containerOffsetProgress) {
        $('.js-progressBar').each(function(){
          var progress = $(this).attr('data-value');
          $(this).css({
             'width': progress + '%'
          });
       });
				$('.header-content-navigation ul li a').removeClass('active');
				$('#navAbout').addClass('active');
      }

      if (scrollOffset > containerOffsetServices) {
        var i = 1;
        $('.services-box').each(function(){
         	var self = $(this);
        	setTimeout(function(){
         		self.addClass('js-go');
          }, i*500);
          i++;
        });
				$('.header-content-navigation ul li a').removeClass('active');
				$('#navServices').addClass('active');
      }

			if (scrollOffset > containerOffsetContact) {
				$('.header-content-navigation ul li a').removeClass('active');
				$('#navContact').addClass('active');
			}

			if (scrollOffset > containerOffsetNews) {
				var i = 1;
				$('.load-col-body').each(function(){
					var self = $(this);
					setTimeout(function(){
						self.addClass('js-go');
					}, i*280);
					i++;
				});
				$('.header-content-navigation ul li a').removeClass('active');
				$('#navNews').addClass('active');
			}

   });

	 //MENU ON-CLICK SLIDE (HEADER + FOOTER)

   $('.header-content-navigation').find('a').click(function(event){
    event.preventDefault();
    var target = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $("#" + target).offset().top
      }, 500);

			//NAV LIST RESET
			//$('.header-content-navigation ul li a').removeClass('active');

			//ADD ACTIVE CLASS
			//$(this).addClass('active');

   });

	 $('.footer-menu').find('a').click(function(event){
    event.preventDefault();
    var target = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $("#" + target).offset().top
      }, 500);

   });

	 //AJAX NEWS SECTION

   $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
      success: function(result){
         var i;
         for(i = 0; i < $(result).length; i++){ //$(result).length je broj tih unosa u JSON-u
            if (i > 5) {
            	return;
            }

            var postID = result[i].id;
            var postTitle = result[i].title;
            var postBody = result[i].body;

            $("#load").append('<div class="col-lg-4 load-col"><h2 class="load-col-title">' + postTitle + '</h2><p class="load-col-body">' + postBody + '</p></div>');
         }
      }
   });

});
