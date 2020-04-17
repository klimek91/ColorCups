let kubki = document.querySelectorAll(".cup");

function klik(evt){
    console.log("klik");
}

kubki.forEach(function(kubek) {
    kubek.addEventListener('click', klik);
})

