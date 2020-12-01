	$('.ite:not(:first)').hide();
		$(function (){
		       $(".l-tab").hide();
		       $(".ite").hover(function () {
		                  $(".l-tab").show();
					    },function () {
		       $(".l-tab").hide();})
			   $(".l-tab").hover(function () {
			                   $(".l-tab").show();
			               }, function () {
			                   $(".l-tab").hide();
			               })
		    });
			
		   var time1 = setInterval(function () {
		       index1 ++;
		       if (index1 >4){ index1 = 0;}
		       $(".ite").eq(index1).show().siblings().hide();
		       $(".tab-bt.bt2").eq(index1).addClass("active").siblings().removeClass("active");  		   
		   },2000);
			
		   var index1 = 0;
	    $(".tab-bt .bt2").click(function () {
	         index1 = $(this).index();
	           $(this).addClass("active").siblings().removeClass("active");
	            $(".ite").eq(index1).show().siblings().hide();
	              });
	    $(".l-tab .re").click(function () {
	        index1 ++;
	        if (index1 >4){ index1 = 0;}
	        $(".ite").eq(index1).show().siblings().hide();
	        $(".tab-bt.bt2").eq(index1).addClass("active").siblings().removeClass("active");
	      
	    });          
	    $(".l-tab .le").click(function () {
	        index1 --;
	        if(index1 < 0){index1 = 4;}
	        $(".ite").eq(index1).show().siblings().hide();
	        $(".tab-bt.bt2").eq(index1).addClass("active").siblings().removeClass("active");  
	    });         
	                                     
