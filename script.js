const hamburger = document.getElementById("hamburger");
let navlist = document.getElementsByClassName("right")
hamburger.addEventListener("click",()=>{
    const rightSection = document.querySelector('.right');
    const rightul = document.querySelector('.right-ul');

    rightSection.classList.toggle('show');
    rightul.classList.toggle('show');

})