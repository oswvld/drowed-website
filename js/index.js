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

let preProductionBlock = document.getElementById('preProduction')

preProductionBlock.onclick = function() {
  window.location.href = './pre-production.html'
}

let productionBlock = document.getElementById('production')
let productionHiddenBlock = document.getElementById('production-hidden')

productionBlock.onclick = function() {

  console.log(productionHiddenBlock.style.display)

  if( productionHiddenBlock.style.display == 'block' )
    productionHiddenBlock.style.display = 'none'
  else
    productionHiddenBlock.style.display = 'block'
}

let postProductionBlock = document.getElementById('postProduction')
let postProductionHiddenBlock = document.getElementById('postProduction-hidden')

postProductionBlock.onclick = function() {

  console.log(postProductionHiddenBlock.style.display)

  if( postProductionHiddenBlock.style.display == 'block' )
    postProductionHiddenBlock.style.display = 'none'
  else
    postProductionHiddenBlock.style.display = 'block'
}

function changeFrame(){

    if(currentFrame == 96){
      currentFrame = 0
      console.log( document.getElementById('slotNebbia') )
      document.getElementById('slotNebbia').src = '/drowned-website/images/GifNebbia/nebbia_'+currentFrame+'.png'
    }
    else{
      currentFrame++
      console.log( document.getElementById('slotNebbia') )
      document.getElementById('slotNebbia').src = '/drowned-website/images/GifNebbia/nebbia_'+currentFrame+'.png'
    }
}