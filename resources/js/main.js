var mapView = new ol.View({
    center: ol.proj.fromLonLat([110.82331244560362, -7.556152465080592]),
    zoom: 13
});

var map = new ol.Map({
    target: 'map',
    view: mapView
});

var osmTile = new ol.layer.Tile({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);

var SurakartaVector = new ol.layer.Vector({
    title: "Kota Surakarta",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/surakarta.json',
        visible: true
    })
});
map.addLayer(SurakartaVector);


var Rumahsakit = new ol.layer.Vector({
    title: "Rumah Sakit",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/RUMAHSAKIT.json',
        visible: true
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraticon',
            anchorYUnits: 'pixels',
            src: 'resources/icon/hospital.png'
        })
    })
});
map.addLayer(Rumahsakit);



// Create an OpenLayers VectorLayer
var Wisata = new ol.layer.Vector({
    title: "Wisata",
    source: new ol.source.Vector({
      url: 'http://localhost/KELOMPOKGIS/cek.php', // URL to your PHP script
      format: new ol.format.GeoJSON(),
      visible: true
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraticon',
            anchorYUnits: 'pixels',
            src: 'resources/icon/marker.png'
        })
    })
  });
  map.addLayer(Wisata);

var Bangunan = new ol.layer.Vector({
    title: "Bangunan",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Bangunan.json',
        visible: true
    }),
});
map.addLayer(Bangunan);

var Jalan = new ol.layer.Vector({
    title: "Jalan",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Jalan.json',
        visible: true
    }),
});
map.addLayer(Jalan);

var Sungai = new ol.layer.Vector({
    title: "Sungai",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Sungai.json',
        visible: true
    }),
});
map.addLayer(Sungai);

var Danau = new ol.layer.Vector({
    title: "Danau",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Danau.json',
        visible: true
    }),
});
map.addLayer(Danau);

var Jalan20m = new ol.layer.Vector({
    title: "Jalan Buffer 20m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Jalan_Buffer_20m_Clear.json',
        visible: true
    }),
});
map.addLayer(Jalan20m);

var Sungai3m = new ol.layer.Vector({
    title: "Sungai Buffer 3m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Sungai_Buffer_3m.json',
        visible: true
    }),
});
map.addLayer(Sungai3m);

var Wisatabuffer = new ol.layer.Vector({
    title: "Wisata Buffer 500m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Tempat_Wisata_Buffer_500m.json',
        visible: true
    }),
});
map.addLayer(Wisatabuffer);

var daerahfix = new ol.layer.Vector({
    title: "Hasil",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Daerah_1_Bangunan_Sungai_Erase.json',
        visible: true
    }),
});
map.addLayer(daerahfix);
// =================================================



// =================================================
function toggleLayer(eve) {
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function (element) {
        if (lyrname == element.get('title')) {
            element.setVisible(checkedStatus);
        }
    });
}