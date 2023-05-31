// navbar link: active / inactive

let btns = document.getElementsByClassName("navbar__link");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        
    let current = document.getElementsByClassName("navbar__link--active");

    if (current.length > 0) {
        current[0].className = current[0].className.replace(" navbar__link--active", "");
        }
    
        this.className += " navbar__link--active";
    });
}
