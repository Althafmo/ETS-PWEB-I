$(document).ready(function () {

    // Fetching data from the API using AJAX
    $.ajax({
        url: 'https://it-its.id/api/movies',
        //tidak perlu menulis method get lagi karena itu sudah default

        success: function (data) {
            displayMovies(data);
        },
        error: function (error) {
            console.error("fetching data error: ", error);
        }
    });

    // Function to display movies
    function displayMovies(movies) {
        let output = '';

        $.each(movies, function (key, movie) {
            output += `
            <div class="col-lg-6 col-12 mb-4"> 
                <div class="card shadow p-3 bg-white rounded">
                    <div class="card-body ">
                        <h4 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Plot}</p>
                    </div>
                </div>
            </div>
            `;
        });

        $('#movieslist').html(output);
    }
});