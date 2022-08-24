const selection = document.querySelector('.selection');
const playBoard = document.querySelector('.play-board');

const playerSelect= player =>{
    selection.classList.add('fadeOut');
    setTimeout(()=>{selection.style.display='none'},290);

    playBoard.classList.add('fadeIn');
    setTimeout(()=>{playBoard.style.display='block'},290);
}
