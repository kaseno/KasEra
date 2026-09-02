const modal=document.getElementById('modal');
function openModal(){modal.classList.add('show');modal.setAttribute('aria-hidden','false')}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
function submitForm(e){e.preventDefault();closeModal();setTimeout(()=>alert('新品編申請已送出，案件將進入覆核流程。'),50);e.target.reset()}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
