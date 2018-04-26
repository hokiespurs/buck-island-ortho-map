var mymap = L.map('map', {
    center: [17.78266,-64.62116],
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

var tiles = L.tileLayer('http://research.engr.oregonstate.edu/lidar/pointcloud/20180319_USVI/googlemaps/20180325_MavicBuckIsland/{z}/{x}/{y}.png',{
    minZoom: 10,
    maxNativeZoom: 22,
    maxZoom: 23,
    noWrap: true,
    bounds: mybounds,
    attribution: '<div id="credits" style="display:inline">UAS Imagery acquired by Oregon State University in collaboration with NOAA and NPS | Basemap &copy; ArcGIS | Made By Richie Slocum | <a href="https://github.com/hokiespurs/usvi-noaa-data"><i class="fa fa-github"></i> More Info </a></div>'
}).addTo(mymap);

L.control.polylineMeasure(options).addTo(mymap);
L.easyButton( '<span class="btn"><i class="fa fa-home"></i></span>', zoom2home).addTo(mymap);
L.easyButton( '<span class="btn"><i class="fa fa-star"></i></span>', zoom2highlights).addTo(mymap);
L.easyButton( '<span class="btn"><i class="fa fa-info-circle"></i></span>', showinfo).addTo(mymap);

var highlights = [[17.7845335, -64.625899, 22],
    [17.7844109, -64.615966, 21],
    [17.7877548, -64.609541, 22],
    [17.7920430, -64.621370, 20],
    [17.7902309, -64.632024, 21]];
//     [17.78266, -64.62116, 15]
var ih = 0;
function zoom2highlights() {
    mymap.flyTo([highlights[ih][0], highlights[ih][1]],highlights[ih][2]);
    ih+=1;
    if (ih>highlights.length-1) {ih=0;}
}
function zoom2home() {
    var homelat = 17.78266;
    var homelng = -64.62116;
    var homezoom = 15;
    mymap.flyTo([homelat, homelng],homezoom);
}
function showinfo() {
    modal.style.display = "block";
}


L.control.scale().addTo(mymap);

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

