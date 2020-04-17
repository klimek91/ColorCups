let kubki = document.querySelectorAll(".cup");

function klik(evt){
    let poziom = Number(this.getAttribute("poziom", "0"));
    poziom += 16,5;
    if (poziom < 99){
        this.style.backgroundPosition = "0 " + poziom +"%";
    }
    this.setAttribute("poziom",poziom);
    
}

kubki.forEach(function(kubek) {
    kubek.addEventListener('click', klik);
})