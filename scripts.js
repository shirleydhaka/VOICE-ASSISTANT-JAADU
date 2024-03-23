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
    function goToNewPage() {
      window.location.href = 'http://127.0.0.1:5500/Enter.html';
    }
  });
