let Personalbtn:any =document.getElementById('Personalbtn')
let edubtn:any=document.getElementById('edubtn')
let expbtn:any=document.getElementById('expbtn')
let skillbtn :any=document.getElementById('skillbtn')

let perleg :any=document.getElementById('perleg')
let edu :any=document.getElementById('edu')
let exp:any=document.getElementById('exp')
let skill :any=document.getElementById('skill')

Personalbtn.addEventListener('click', ()=>{
    if( perleg.style.display ==  'block'){
  perleg.style.display=  'none'}
  else{perleg.style.display=  'block'}

  
})

edubtn.addEventListener('click', ()=>{
  if( edu.style.display ==  'block'){
edu.style.display=  'none'}
else{edu.style.display=  'block'}
})

expbtn.addEventListener('click', ()=>{
  if( exp.style.display ==  'block'){
exp.style.display=  'none'}
else{exp.style.display=  'block'}
})
skillbtn.addEventListener('click', ()=>{
  if( skill.style.display ==  'block'){
skill.style.display=  'none'}
else{skill.style.display=  'block'}
})
