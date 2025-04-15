;(function ($) {
  'use strict'

  // WoW
  new WOW({
    offset: 200,
  }).init()

  // Preloader
  $(window).on('load', function () {
    $('.preloader-area').addClass('deactivate')
  })

  // Ceiling
  $(window).on('scroll', function () {
    let scrollY = window.scrollY
    let $sticky = $('#sticky')
    let $scrollArea = $('.scroll-area')

    const offset = 150

    let stickyHeight = $sticky.outerHeight() // Gets the height of the .videos
    let areaTop = $scrollArea.offset().top - offset // Gets the top distance of the .scroll-area
    let areaHeight = $scrollArea.outerHeight() // Gets the height of the .scroll-area
    let areaBottom = areaTop + areaHeight - stickyHeight // Calculate the bottom distance of the .scroll-area
    // console.log("sticky height:", stickyHeight);
    // console.log("sticky height:", stickyHeight);
    // console.log("areaTop:", scrollY, areaBottom, scrollY >= areaBottom);

    if (scrollY > areaTop && scrollY < areaBottom) {
      // In the .scroll-area range, the ceiling is fixed
      $sticky.addClass('active').css({ position: 'fixed', top: offset + 'px', bottom: 'auto' })
    } else if (scrollY >= areaBottom) {
      // Exceed .scroll-area to follow the scroll
      $sticky.removeClass('active').css({ position: 'absolute', top: 'auto', bottom: 0 })
    } else {
      // Below .scroll-area, unpin
      $sticky.removeClass('active').css({ position: '', top: '' })
    }
  })

  $(document).ready(function () {
    $('.signIn').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom',
    })
  })
})(jQuery)
