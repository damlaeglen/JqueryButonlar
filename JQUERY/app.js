$(function(){

//$("button").click(function (){
//    $("h1").addClass("aktif");
//});

//$(".sub").html("<b> kdjvdkf</b>");


//$("ul li").append(function(indis,value){
//    return " -EKLEME";
//})



//$("#gonder").click (function(){

 //var yazi =  $("#yazi").val();
 //  $("#deneme").append("<tr> <td> "+yazi+" </td> </tr>");

//});



 //        $("#uyari").onclick(function(){
 //            window.alert("merhaba dünya");


    
 //           });




$("#panel1").click(function(){
  $("#panel2").slideDown(5000);

});
$("#stop").click(function(){
    $("#panel2").stop();
});
 $("#devam").click(function(){
    $("#panel2").slideDown(5000);
 });


 $("#tekrar").click(function(){
    $("#panel2").slideUp();
 })





});

