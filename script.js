document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://it-its.id/api/movies";

    const TitleElement = document.getElementById("Title");
    const PlotElement = document.getElementById("Plot");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.Title && data.Plot) {
                titleElement.textContent = data.Title;
                plotElement.textContent = data.Plot;
            } else {
                console.error("Data 'title' atau 'plot' tidak ditemukan dalam respons.");
            }
        })
        .catch(error => {
            console.error("Terjadi kesalahan dalam mengambil data dari API:", error);
        });
    
});
