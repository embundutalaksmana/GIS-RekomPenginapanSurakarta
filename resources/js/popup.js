
var container = document.getElementById('popup-wisata'),
    content_element = document.getElementById('popup-content-custom'),
    closer = document.getElementById('popup-closer-custom');


closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    offset: [0, -10]
});

map.addOverlay(overlay);
var FullScreen = new ol.control.FullScreen();
map.addControl(FullScreen);

map.on('click', function (evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature, layer) {
            return feature;
        });

    if (feature) {
        var geometry = feature.getGeometry();
        var coord = geometry.getCoordinates();
        var content = 'Nama Tempat Wisata : <h3>' + feature.get('Tempat') + '</h3>';
        content_element.innerHTML = content;

        overlay.setPosition(coord);
        console.info(feature.getProperties());
    }else{
        
    }
});

///

// var container = document.getElementById('popup');
// var content = document.getElementById('popup-content');
// var closer = document.getElementById('popup-closer');

// var overlay = new ol.Overlay({
//     element: container,
//     autoPan: true,
//     autoPanAnimation: {
//         duration: 250
//     }
// });
// map.addOverlay(overlay);

// closer.onclick = function() {
//     overlay.setPosition(undefined);
//     closer.blur();
//     return false;
// };

// map.on('singleclick', function (event) {
//     if (map.hasFeatureAtPixel(event.pixel) === true) {
//         var coordinate = event.coordinate;

//         content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
//         overlay.setPosition(coordinate);
//     } else {
//         overlay.setPosition(undefined);
//         closer.blur();
//     }
// });
