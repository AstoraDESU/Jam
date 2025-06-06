let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let btn = document.querySelector("button");
let waktuJepang = false // Flag untuk Zona waktu
let gantiTeks = document.querySelector("span", "#gantiZona")

updateTeks = () => {
    gantiTeks.textContent = waktuJepang
    ? ": Zona Waktu Jepang"
    : ": Zona Waktu Indonesia"
};
updateClock = () => {
    let currentTime = new Date();

    if(waktuJepang){
        //Konversi ke zona waktu Jepang
        currentTime = new Date(currentTime.toLocaleString("en-US", {
            timeZone: "Asia/Tokyo"
        }));
    }
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}

setInterval(updateClock, 1000)

btn.addEventListener("click", function(){
    waktuJepang = !waktuJepang; // Toggle
    btn.textContent = waktuJepang ? "Waktu Lokal" : "Waktu Jepang";
    updateTeks(); //Perbarui teks
    updateClock(); //Perbarui jam
});

