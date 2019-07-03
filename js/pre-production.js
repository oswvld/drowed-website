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

/* Narrazione Storyboard */

let narrazionestoryboardSectionBlock = document.getElementById('narrazionestoryboardSection')
let narrazionestoryboardSectionHiddenBlock = document.getElementById('narrazionestoryboardSection-hidden')

narrazionestoryboardSectionBlock.onclick = function() {

  console.log(narrazionestoryboardSectionHiddenBlock.style.display)

  if( narrazionestoryboardSectionHiddenBlock.style.display == 'block' )
  narrazionestoryboardSectionHiddenBlock.style.display = 'none'
  else
  narrazionestoryboardSectionHiddenBlock.style.display = 'block'
}

/* Personaggio Ambiente */

let personaggioambienteSectionBlock = document.getElementById('personaggioambienteSection')
let personaggioambienteSectionHiddenBlock = document.getElementById('personaggioambienteSection-hidden')

personaggioambienteSectionBlock.onclick = function() {

  console.log(personaggioambienteSectionHiddenBlock.style.display)

  if( personaggioambienteSectionHiddenBlock.style.display == 'block' )
  personaggioambienteSectionHiddenBlock.style.display = 'none'
  else
  personaggioambienteSectionHiddenBlock.style.display = 'block'
}