let kubki = document.querySelectorAll(".cup");

function klik(evt){
    let poziom = Number(this.getAttribute("poziom", "0"));
    poziom += 23,5;
    if (poziom < 99){
        this.style.backgroundPosition = "0 " + poziom +"%";
        this.setAttribute("poziom",poziom);
    }
    else {
        this.style.cursor = "not-allowed"
    }
}

kubki.forEach(function(kubek) {
    kubek.addEventListener('click', klik);
})