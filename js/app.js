//UI
const checkbox=document.querySelector('.check'),
label=document.querySelector('.toggle');

const text=document.querySelector('.text');

label.addEventListener('click',()=>{
    if(!checkbox.checked){
        setTimeout(()=>{
            text.innerText='Connecting';},700);
        setTimeout(()=>{
            text.innerText='Connected';},1500);

        
        text.style.color='rgba(255, 33, 33, 0.863)';
    }
    else{
        text.innerText='Disconnected';
        text.style.color='black';
    }
})