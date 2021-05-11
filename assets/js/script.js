'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.accordion > li > ul').hide();

    $('.accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // testimonials
    $('.testimonials-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#testimonials-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#testimonials-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#testimonials-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#testimonials-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });

    
    // End

    $("#comp").click(function() {
      $("#comp_text").slideToggle("slow");
      $("#land_text").hide("slow");
      $("#ad_text").hide("slow");
});

$("#land").click(function() {
  $("#land_text").slideToggle("slow");
  $("#comp_text").hide("slow");
  $("#ad_text").hide("slow");
});

$("#ad").click(function() {
  $("#ad_text").slideToggle("slow");
  $("#comp_text").hide("slow");
  $("#land_text").hide("slow");
});

$("#mgt").click(function() {
  $("#mgt_text").slideToggle("slow");
  $("#recycle_text").hide("slow");
  $("#dispose_text").hide("slow");
  $("#sbm_text").hide("slow");
});

$("#recycle").click(function() {
  $("#recycle_text").slideToggle("slow");
  $("#mgt_text").hide("slow");
  $("#dispose_text").hide("slow");
  $("#sbm_text").hide("slow");
});

$("#dispose").click(function() {
  $("#dispose_text").slideToggle("slow");
  $("#mgt_text").hide("slow");
  $("#recycle_text").hide("slow");
  $("#sbm_text").hide("slow");
});

$("#sbm").click(function() {
  $("#sbm_text").slideToggle("slow");
  $("#mgt_text").hide("slow");
  $("#dispose_text").hide("slow");
  $("#recycle_text").hide("slow");
});


$("#gen").click(function() {
  $("#gen_text").slideToggle("slow");
  $("#trans_text").hide("slow");
  $("#treat_text").hide("slow");
  $("#disp_text").hide("slow");
  $("#tsdf_text").hide("slow");
  $("#rec_text").hide("slow");
});
$("#trans").click(function() {
  $("#trans_text").slideToggle("slow");
  $("#gen_text").hide("slow");
  $("#treat_text").hide("slow");
  $("#disp_text").hide("slow");
  $("#tsdf_text").hide("slow");
  $("#rec_text").hide("slow");
});
$("#treat").click(function() {
  $("#treat_text").slideToggle("slow");
  $("#trans_text").hide("slow");
  $("#gen_text").hide("slow");
  $("#disp_text").hide("slow");
  $("#tsdf_text").hide("slow");
  $("#rec_text").hide("slow");
});
$("#disp").click(function() {
  $("#disp_text").slideToggle("slow");
  $("#trans_text").hide("slow");
  $("#treat_text").hide("slow");
  $("#gen_text").hide("slow");
  $("#tsdf_text").hide("slow");
  $("#rec_text").hide("slow");
});
$("#tsdf").click(function() {
  $("#tsdf_text").slideToggle("slow");
  $("#trans_text").hide("slow");
  $("#treat_text").hide("slow");
  $("#disp_text").hide("slow");
  $("#gen_text").hide("slow");
  $("#rec_text").hide("slow");
});
$("#rec").click(function() {
  $("#rec_text").slideToggle("slow");
  $("#trans_text").hide("slow");
  $("#treat_text").hide("slow");
  $("#disp_text").hide("slow");
  $("#tsdf_text").hide("slow");
  $("#gen_text").hide("slow");
});




});


const inpFile= document.getElementById("inpFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage = previewContainer.querySelector(".image-preview__image");
    const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
    inpFile.addEventListener("change", function(){
      const file = this.files[0];
      if(file){
          const reader = new FileReader();

          previewDefaultText.style.display = "none";
          previewImage.style.display = "block";

          reader.addEventListener("load", function(){
              
              previewImage.setAttribute("src", this.result);
          });

          reader.readAsDataURL(file);
      } else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src","");
      }
    });