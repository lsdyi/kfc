
$("article").hide(); 
$(".btn1").on("click",function(){
    $(".txt").fadeOut();
    $("article").fadeIn();
});
$(".back").on("click",function(){
    $(".txt").fadeIn();
    $("article").fadeOut();
});
$(".sub").on("click",function(){
    alert("Welcome to our big family!");
});

$(".btn2").on("click",function(){
    alert("Are you sure you dont't think about it any more?");
});


