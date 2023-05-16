let popap = document.querySelector(".popap");
let popapConteiner = document.querySelector(".popap__conteiner");
let openpopap = document.querySelector(".profile__reduct-botton");
let closepopap = document.querySelector(".popap__close-botton");
let savebutton = document.querySelector(".popap__save");
let profileName = document.querySelector(".profile__title");
let profilebg = document.querySelector(".profile__subtitle");
let newprofileName = document.querySelector(".popap__name");
let newprofilebg = document.querySelector(".popap__yours");
let like = document.querySelector(".element__like");



like.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    like.classList.add("like");


})





openpopap.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popap.classList.add("active");


})
closepopap.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popap.classList.remove("active");


})


savebutton.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();

    profileName.innerHTML = newprofileName.value


    profilebg.innerHTML = newprofilebg.value


    popap.classList.remove("active");

})