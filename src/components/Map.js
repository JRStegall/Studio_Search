import React from 'react';


function Map(){
    
        // Map options
        var options = {
            zoom: 10,
            center: { lat: 33.7490, lng: -84.3880 }
        }
        //New Map
        var map = new google.maps.Map(document.getElementById('map'), options);

        // //Add Marker
        // var marker = new google.maps.Marker({
        //     position:{lat:33.783405, lng: -84.410112 },
        //     map: map,
        // });

        // var infoWindow = new google.maps.InfoWindow({
        //     content: '<h1>11th Street Studios</h1>'
        // });

        // marker.addListener('click', function(){
        //     infoWindow.open(map, marker);
        // })


        //Array of Markers

        var markers = [
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content: '<h2>11th Street Studios</h2>'
        },
        {
            coords:{lat:33.749233, lng: -84.402165 },
            content:'<h2>AMS Studios Atlanta</h2>'
        },
        {
            coords:{lat:33.809146, lng: -84.367659 },
            content:'<h2>Atlanta Doppler Studios</h2>'
        },
        {
            coords:{lat:33.704774, lng: -84.465355 },
            content:'<h2>Atlanta HD Studios</h2>'
        },
        {
            coords:{lat:33.812548, lng: -84.36399 },
            content:'<h2>Atlanta Podcast Recording</h2>'
        },
        {
            coords:{lat:33.726568, lng: -84.366516 },
            content:'<h2>Atlanta Record Factorty</h2>'
        },
        {
            coords:{lat:33.736631, lng: -84.402298 },
            content:'<h2>Atlanta aBs Studios</h2>'
        },
        {
            coords:{lat:33.792186, lng: -84.404722 },
            content:'<h2>Blue South Recording Studios</h2>'
        },
        {
            coords:{lat:33.726133, lng: -84.367845 },
            content:'<h2>Bravo Ocean Studios</h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },{
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },{
            coords:{lat:33.704774, lng: -84.465355 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.812548, lng: -84.36399 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },{
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        },
        {
            coords:{lat:33.783405, lng: -84.410112 },
            content:'<h2></h2>'
        }
        ]


        //Loop Through Markers
        for(var i=0; i < markers.length; i++){
            addMarker(markers[i]);
        }

        //Add Marker Function
        function addMarker(props){
            var marker = new google.maps.Marker({
            position:props.coords,
            map: map,
            content: props.content
        });   
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        })
        } 
    }



    return(
        <div className="row">
            <div className="col-12">
        <iframe  id="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" title="studio_map"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYoQObhpqVlMMUMLfN3ui08JqUukmMDR4&callback=initMap">
        </iframe> 
        <script type='text/javascript' src='script.js?id=d3f88f55cdab0b90054f032428c10ef1d8e33449'></script>
        </div>
        </div>
    )
}

export default Map;