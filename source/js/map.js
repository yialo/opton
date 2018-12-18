ymaps.ready(init);

function init() {
  var mapCenter = [55.710641, 37.688288];
  var mapElement = document.getElementById('map');
  var mapOptions = {
      center: mapCenter,
      zoom: 16,
      controls: []
  };

  var map = new ymaps.Map(mapElement, mapOptions);

  var fullscreenControlObject = new ymaps.control.FullscreenControl({
      options: {
          position: {
              top: 10,
              right: 10
          }
      }
  });

  var zoomControlObject = new ymaps.control.ZoomControl({
      options: {
          position: {
              top: 10,
              left: 10
          },
          size: 'small'
      }
  });

  var marker = new ymaps.Placemark(mapCenter, {
    balloonContentHeader: 'Opton Engineering',
    balloonContentBody: 'Москва, ул. Угрешская, д.2, стр.53'
  }, {
    preset: 'islands#redIcon'
  });

  map.behaviors.disable('scrollZoom');
  map.controls.add(zoomControlObject);
  map.controls.add(fullscreenControlObject);
  map.geoObjects.add(marker);
}
