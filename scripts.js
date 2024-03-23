$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky")

        }else{
            $('.navbar').removeClass("sticky")

        }
})
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn-enter').addEventListener('click', function() {
      goToNewPage();
    });
  
  });
