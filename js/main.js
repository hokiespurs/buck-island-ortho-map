var mymap = L.map('map', {
    center: [17.7858,-64.6212],
    zoom: 15,
    maxZoom: 23,
    minZoom: 13,
    detectRetina: true // detect whether the sceen is high resolution or not.
});

var mybounds = [[17.8016, -64.6],[17.7735, -64.636]];

// Add Basemap
//L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
    minZoom: 10,
    maxNativeZoom: 21,
    maxZoom: 23
}).addTo(mymap);

L.tileLayer('http://research.engr.oregonstate.edu/lidar/pointcloud/20180319_USVI/googlemaps/20180325_BuckIslandAll/{z}/{x}/{y}.png',{
    minZoom: 10,
    maxNativeZoom: 22,
    maxZoom: 23,
    noWrap: true,
    bounds: mybounds
}).addTo(mymap);

function onMapClick(e) {
    var pixelPoint = mymap.project(e.latlng, mymap.getZoom()).floor();
    x = Math.floor(pixelPoint.x/256);
    y = Math.floor(pixelPoint.y/256);
    z = mymap.getZoom();
    console.log(x.toString() + "/" + y.toString() + "/" + z.toString());
}

mymap.on('click', onMapClick);