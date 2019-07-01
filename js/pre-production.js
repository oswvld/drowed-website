let conceptSectionBlock = document.getElementById('conceptSection')
let conceptSectionHiddenBlock = document.getElementById('conceptSection-hidden')

conceptSectionBlock.onclick = function() {

  console.log(conceptSectionHiddenBlock.style.display)

  if( conceptSectionHiddenBlock.style.display == 'block' )
    conceptSectionHiddenBlock.style.display = 'none'
  else
    conceptSectionHiddenBlock.style.display = 'block'
}