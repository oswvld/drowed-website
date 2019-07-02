/* Post Processing */
let postprocessingSectionBlock = document.getElementById('postprocessingSection')
let postprocessingSectionHiddenBlock = document.getElementById('postprocessingSection-hidden')

postprocessingSectionBlock.onclick = function() {

  if( postprocessingSectionHiddenBlock.style.display == 'block' )
    postprocessingSectionHiddenBlock.style.display = 'none'
  else
    postprocessingSectionHiddenBlock.style.display = 'block'
}

/* Montaggio Video */
let montaggiovideoSectionBlock = document.getElementById('montaggiovideoSection')
let montaggiovideoSectionHiddenBlock = document.getElementById('montaggiovideoSection-hidden')

montaggiovideoSectionBlock.onclick = function() {

  if( montaggiovideoSectionHiddenBlock.style.display == 'block' )
    montaggiovideoSectionHiddenBlock.style.display = 'none'
  else
    montaggiovideoSectionHiddenBlock.style.display = 'block'
}

/* Montaggio Audio */
let montaggioaudioSectionBlock = document.getElementById('montaggioaudioSection')
let montaggioaudioSectionHiddenBlock = document.getElementById('montaggioaudioSection-hidden')

montaggioaudioSectionBlock.onclick = function() {

  if( montaggioaudioSectionHiddenBlock.style.display == 'block' )
    montaggioaudioSectionHiddenBlock.style.display = 'none'
  else
    montaggioaudioSectionHiddenBlock.style.display = 'block'
}

/* Correzione Colore */
let correzionecoloreSectionBlock = document.getElementById('correzionecoloreSection')
let correzionecoloreSectionHiddenBlock = document.getElementById('correzionecoloreSection-hidden')

correzionecoloreSectionBlock.onclick = function() {

  if( correzionecoloreSectionHiddenBlock.style.display == 'block' )
    correzionecoloreSectionHiddenBlock.style.display = 'none'
  else
    correzionecoloreSectionHiddenBlock.style.display = 'block'
}