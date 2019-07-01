// document.getElementById('btnPreProduction').addEventListener('click', function(){
//   window.location.href = './pre-production.html'
// })

let currentFrame = 1

// window.onscroll = function(e){
//   console.log(this.pageYOffset)
//   console.log(this.scrollY)

//   var scrolled = window.pageYOffset
//   document.getElementsByClassName('video-element')[0].style.transform = 'translateY('+scrolled * -2+'px)'
// }

// window.onload = function(e){
//   setInterval(function(){
//     changeFrame()
//   }, 100)
// }

function changeFrame(){

    if(currentFrame == 96){
      currentFrame = 0
      console.log( document.getElementById('slotNebbia') )
      document.getElementById('slotNebbia').src = '/images/GifNebbia/nebbia_'+currentFrame+'.png'
    }
    else{
      currentFrame++
      console.log( document.getElementById('slotNebbia') )
      document.getElementById('slotNebbia').src = '/images/GifNebbia/nebbia_'+currentFrame+'.png'
    }
}