window.navigator.geolocation.getCurrentPosition(function (data) {
    console.log(data);

    let latitude = data.coords.latitude;
    let longitutde = data.coords.longitude;
    latitude = alert("Your latitude: " + latitude);
    longitutde = alert("Your Longitude: " + longitutde);

    $.ajax({
        url: 'https://api.opencagedata.com/geocode/v1/json?q="lat"+"long"&key=1ab191f0cab74919bf1eaca3ad4e89cf',
        success: function (data) {
            console.log(data);
            let info = [];
            info.push(data.results[0].components.state_district);
            info.push(data.results[1].components.state_state);
            info.push(data.results[2].components.country);
            info.push(data.results[3].components.continent);




            $('#result').append('<div class="container bg-primary text-white " > <h2>Location:</h2><hr>' + '<p>District:&nbsp &nbsp' + info[0] + '<hr>State: &nbsp &nbsp' + info[1] + '<hr>' + 'Country: &nbsp&nbsp' + info[2] + '<hr>' + 'Continent:&nbsp &nbsp' + info[3] + '</p></div>');

            for (let i = 0; i < info.length; i++) {
                for (let j = 0; j < 1; j++) {
                    $.ajax({
                        url: "https://api.unsplash.com/photos/random?query='+info[0]+'&client_id=3MPiya7OnCVTb4P9_5-HIcl1U_dQYd1PcXOt4f7xWMs",
                        success: function (data) {
                            console.log(data.urls.regular);

                            $('#map').append(`<div class="col-md-4 col-xs-12 " style="margin-top:210px; height:20vh;">
                         
                            <div class="card" >
                            <img src ="${data.urls.regular}" style="width:100%;height:auto">   </div></div>`);
                        }
                    });
                    $.ajax({
                        url: "https://api.unsplash.com/photos/random?query='+info[1]+'&client_id=3MPiya7OnCVTb4P9_5-HIcl1U_dQYd1PcXOt4f7xWMs",

                        success: function (data) {
                            console.log(data.urls.regular);

                            $('#map').append(`<div class="col-md-4 col-xs-12 " style="margin-top:190px; height:20vh;">
                         
                            <div class="card" >
                            <img src ="${data.urls.regular}" style="width:100%;height:auto">   </div></div>`);
                        }
                    });
                    $.ajax({
                        url: "https://api.unsplash.com/photos/random?query='+info[2]+'&client_id=3MPiya7OnCVTb4P9_5-HIcl1U_dQYd1PcXOt4f7xWMs",

                        success: function (data) {
                            console.log(data.urls.regular);

                            $('#map').append(`<div class="col-md-4 col-xs-12 " style="margin-top:190px; height:20vh;">
                         
                            <div class="card" >
                            <img src ="${data.urls.regular}" style="width:100%;height:auto">   </div></div>`);
                        }
                    });
                    $.ajax({
                        url: "https://api.unsplash.com/photos/random?query='+info[3]+'&client_id=3MPiya7OnCVTb4P9_5-HIcl1U_dQYd1PcXOt4f7xWMs",

                        success: function (data) {
                            console.log(data.urls.regular);

                            $('#map').append(`<div class="col-md-4 col-xs-12 " style="margin-top:190px; height:20vh;">
                         
                            <div class="card" >
                            <img src ="${data.urls.regular}" style="width:100%;height:auto">   </div></div>`);
                        }
                    });

                };

            };


        },
        error: function () {
            alert("error");
        }
    });




});
