function style(c) {
  return {
    fillColor: c,
    weight: 3,
    opacity: 1,
    color: c,
    dashArray: '6',
    fillOpacity: 0.25
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  currentLayer.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}


function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });

  layer.bindTooltip(
    feature.properties.Name,
    {
      permanent: true,
      direction: 'center',
      className: 'countryLabel'
    }
  );
}

function clearCurrentSearch(current) {
  if (current) {
    map.removeControl(current);
  };
}
