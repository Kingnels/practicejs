

modalBtn = document.querySelector('.modal-btn')
modalOverlay = document.querySelector('.modal-overlay')
closeBtn = document.querySelector('.close-btn')

// modalBtn.onclick = ()=> modalOverlay.classList.toggle('open-modal')

// closeBtn.onclick = () => modalOverlay.classList.remove('open-modal') 

modalBtn.addEventListener('click',() => modalOverlay.classList.toggle('open-modal'))
closeBtn.addEventListener('click',() => modalOverlay.classList.remove('open-modal'))