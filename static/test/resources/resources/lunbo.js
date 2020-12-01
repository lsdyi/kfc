         $('.item:not(:first)').hide();
		    $(function (){
		               $(".lr-tab").hide();
		       $(".img-group1").hover(function () {
		                  $(".lr-tab").show();
		    		    },function () {
		       $(".lr-tab").hide();})
		       $(".lr-tab").hover(function () {
		                       $(".lr-tab").show();
		                   }, function () {
		                       $(".lr-tab").hide();
		                   })
		    });
		   var time2 = setInterval(function () {
		       index2 ++;
		       if (index2 >4){ index2 = 0;}
		       $(".item").eq(index2).show().siblings().hide();
		       $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");  		   
		   },3000);
			
		   var index2 = 0;
	    $(".tab-btn .btn").click(function () {
	         index2 = $(this).index();
	           $(this).addClass("active").siblings().removeClass("active");
	            $(".item").eq(index2).show().siblings().hide();
	              });
	              $(".lr-tab .right").click(function () {
	                  index2 ++;
	                  if (index2 >4){ index2 = 0;}
	                  $(".item").eq(index2).show().siblings().hide();
	                  $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
	    		    
	              });
	              $(".lr-tab .left").click(function () {
	                  index2 --;
	                  if(index2 < 0){index2 = 4;}
	                  $(".item").eq(index2).show().siblings().hide();
	                  $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
	    		    
	              });
	                                     
