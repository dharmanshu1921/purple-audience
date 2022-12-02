const form = document.querySelector(".form"),
pwshowHide =  document.querySelectorAll('.eye-icon')


pwshowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",()=>{
        let pwfields =eyeIcon.parentElement .parentElement.querySelectorAll('#pass1,#pass2');

        pwfields.forEach(password =>{
            if(password.type === "password")
            {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }

            password.type ="password";
            eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
})

var loader = document.querySelector('.loader-wrapper');
function myfunction()
{
    loader.style.opacity="0";
    loader.style.zIndex = "-1";
    loader.style.transitionDuration ="2s";
}