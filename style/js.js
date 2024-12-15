

const eye = document.querySelector(".eye")
const pass = document.querySelector(".pass")
eye.addEventListener('click', e => {
    if(pass.type === "password"){
        pass.type = "text"
        console.log('text')
    }else{
        pass.type = "password"
        console.log('password')
    }
});


