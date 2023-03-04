/*----------------Filtre dynamique------------*/

window.onload = () =>{
    let filters = document.querySelectorAll("#filters div");

        for(let filter of filters){
            filter.addEventListener("click", function(){
                let tag = this.id;                         
                let images = document.querySelectorAll(".galery img")
                for(let image of images){
                    image.classList.replace("active","inactive")
                        if(tag in image.dataset){
                            image.classList.replace("inactive","active")
                        }
                }
            })
        }
}

/*------------Formulaire----------------*/
