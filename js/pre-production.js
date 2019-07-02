/* Concept */
let conceptSectionBlock = document.getElementById('conceptSection')
let conceptSectionHiddenBlock = document.getElementById('conceptSection-hidden')

conceptSectionBlock.onclick = function() {

  console.log(conceptSectionHiddenBlock.style.display)

  if( conceptSectionHiddenBlock.style.display == 'block' )
    conceptSectionHiddenBlock.style.display = 'none'
  else
    conceptSectionHiddenBlock.style.display = 'block'
}

/* Personaggio */

let personaggioSectionBlock = document.getElementById('personaggioSection')
let personaggioSectionHiddenBlock = document.getElementById('personaggioSection-hidden')

personaggioSectionBlock.onclick = function() {

  console.log(personaggioSectionHiddenBlock.style.display)

  if( personaggioSectionHiddenBlock.style.display == 'block' )
  personaggioSectionHiddenBlock.style.display = 'none'
  else
  personaggioSectionHiddenBlock.style.display = 'block'
}

/* Ambiente */

let ambienteSectionBlock = document.getElementById('ambienteSection')
let ambienteSectionHiddenBlock = document.getElementById('ambienteSection-hidden')

ambienteSectionBlock.onclick = function() {

  console.log(ambienteSectionHiddenBlock.style.display)

  if( ambienteSectionHiddenBlock.style.display == 'block' )
  ambienteSectionHiddenBlock.style.display = 'none'
  else
  ambienteSectionHiddenBlock.style.display = 'block'
}

/* Storyboard */

let storyboardSectionBlock = document.getElementById('storyboardSection')
let storyboardSectionHiddenBlock = document.getElementById('storyboardSection-hidden')

storyboardSectionBlock.onclick = function() {

  console.log(storyboardSectionHiddenBlock.style.display)

  if( storyboardSectionHiddenBlock.style.display == 'block' )
  storyboardSectionHiddenBlock.style.display = 'none'
  else
  storyboardSectionHiddenBlock.style.display = 'block'
}