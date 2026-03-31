window.addEventListener("load", (event) => {
  
  gallery();


})


function gallery(){
  if(document.querySelector("section.stats .glide")){

    const slider  = document.querySelector("section.stats .glide");

    // create slider
    const glide = new Glide(slider, {
      type: "carousel",
      perView: 1,
      startAt: 0
    });

    glide.mount();


  }
}