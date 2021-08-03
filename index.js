var hello = document.querySelector('#hello');
window.onmousemove = (e)=>{
    hello.style.left =`${e.x}px`;
    hello.style.top =`${e.y}px`;
};