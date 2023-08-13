
const input = document.querySelector(".main__input");
const button = document.querySelector(".main__btn");
const p = document.querySelector(".main__error");

button.addEventListener('click', (event) => {
    event.preventDefault();
    initApp();
});

const initApp = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = input.value;
    const found = regex.test(email);

    if(email === ""){
        
        errorStyle();
        p.textContent= "Whoops! It looks like you forgot to add your email";
     
    } else if(!found){
        errorStyle();
        p.textContent = "Please provide a valid email address";

    } else if(email || found){
        p.style.display = "none";
        button.style.marginBlockStart = ".25rem";
        input.style.border = "hsl(223, 100%, 88%)";
     
    } 
    if(screen.width > 1024 ){
        button.style.marginBlockStart = "0rem";
    }
    
}
const errorStyle = () => {
    button.style.marginBlockStart = "1.5rem";
    input.style.border = "1px solid hsl(354, 100%, 66%)"; 
    p.style.display = "block";
}
