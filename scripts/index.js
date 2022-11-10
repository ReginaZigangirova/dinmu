const checkbox = document.querySelectorAll('.form__checkbox');

checkbox.forEach(function(item){
    item.addEventListener("click", function(evt) {
        evt.target.classList.toggle('form__checkbox_active');
    })});

    var acc = document.getElementsByClassName("question__button");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }    

    let menuBtn = document.querySelector('.header__menu-bth');
    let menu = document.querySelector('.header__menu');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('header__menu-bth_active');
        menu.classList.toggle('activ');
    })    