document.getElementById('btnPreProduction').addEventListener('click', function(){
  window.location.href = './pre-production.html'
})

window.onscroll = function(e){
  console.log(this.pageYOffset)
  console.log(this.scrollY)

  var scrolled = window.pageYOffset
  document.getElementsByClassName('video-element')[0].style.transform = 'translateY('+scrolled * -3+'px)'
}