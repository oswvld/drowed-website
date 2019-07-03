/* Post Processing */
let aftereffectsSectionBlock = document.getElementById('aftereffectsSection')
let aftereffectsSectionHiddenBlock = document.getElementById('aftereffectsSection-hidden')

aftereffectsSectionBlock.onclick = function() {

  if( aftereffectsSectionHiddenBlock.style.display == 'block' )
    aftereffectsSectionHiddenBlock.style.display = 'none'
  else
    aftereffectsSectionHiddenBlock.style.display = 'block'
}

/* Montaggio */
let montaggioSectionBlock = document.getElementById('montaggioSection')
let montaggioSectionHiddenBlock = document.getElementById('montaggioSection-hidden')

montaggioSectionBlock.onclick = function() {

  if( montaggioSectionHiddenBlock.style.display == 'block' )
    montaggioSectionHiddenBlock.style.display = 'none'
  else
    montaggioSectionHiddenBlock.style.display = 'block'
}