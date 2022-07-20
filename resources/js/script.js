// Navigation

function openMenu() {
    document.getElementById('navbar').style.width = "100%";
}

function closeMenu() {
    document.getElementById('navbar').style.width = "0%";
}

// Smooth Scroll 

$(function(){
    $('.menu-item a, .next-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        return false
    });
});

// Mixitup

var mixer = mixitup('.work-grid');

// Wow Animation

wow = new WOW(
    {
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();