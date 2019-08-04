function initMap() {
  const loc = { lat: 42.719018, lng: 23.257933 };

  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 17
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}
// 42.719018, 23.257933

// Sticky Navbar Opacity:

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
        /* the - 100 means that once we scroll down to the ID, it will leave the page 100 pixels ABOVE it,
        thus it won't be covering the labels anymore. */
      },
      1000
    );
  }
});
