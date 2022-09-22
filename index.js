const popContainer = document.querySelector('.pop-container');
const closeIcon = document.querySelector('i');
const btnEl = document.querySelector('.btn');
const bodyEl = document.querySelector('body');
const container = document.querySelector('.container');
btnEl.addEventListener('click', ()=>{

  popContainer.classList.add('active');
  container.classList.add('blury');

})
closeIcon.addEventListener('click', ()=>{
   
      popContainer.classList.remove('active');
      container.classList.remove('blury');
 
      
    })