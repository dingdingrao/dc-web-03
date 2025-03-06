;(function ($) {
  'use strict'

  // Header Sticky
  // $(window).on('scroll', function () {
  //   if (this.scrollY > 0) {
  //     $('.navbar-area').addClass('is-sticky')
  //   } else {
  //     $('.navbar-area').removeClass('is-sticky')
  //   }
  // })

  // WoW
  new WOW({
    offset: 200,
  }).init()

  // Scroll Back to Top
  // try {
  //   let progressPath = document.querySelector('.progress-wrap path')
  //   let pathLength = progressPath.getTotalLength()
  //   progressPath.style.transition = progressPath.style.WebkitTransition = 'none'
  //   progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
  //   progressPath.style.strokeDashoffset = pathLength
  //   progressPath.getBoundingClientRect()
  //   progressPath.style.transition = progressPath.style.WebkitTransition =
  //     'stroke-dashoffset 10ms linear'
  //   let updateProgress = function () {
  //     let scroll = $(window).scrollTop()
  //     let height = $(document).height() - $(window).height()
  //     let progress = pathLength - (scroll * pathLength) / height
  //     progressPath.style.strokeDashoffset = progress
  //   }
  //   updateProgress()
  //   $(window).on('scroll', updateProgress)
  //   let offset = 50
  //   let duration = 550
  //   $(window).on('scroll', function () {
  //     if ($(this).scrollTop() > offset) {
  //       $('.progress-wrap').addClass('active-progress')
  //     } else {
  //       $('.progress-wrap').removeClass('active-progress')
  //     }
  //   })
  //   $('.progress-wrap').on('click', function (event) {
  //     event.preventDefault()
  //     $('html, body').animate({ scrollTop: 0 }, duration)
  //     return false
  //   })
  // } catch (err) {}

  // Preloader
  $(window).on('load', function () {
    $('.preloader-area').addClass('deactivate')
  })

  // 吸顶
  $(window).on('scroll', function () {
    let scrollY = window.scrollY
    let $sticky = $('#sticky')
    let $scrollArea = $('.scroll-area')

    const offset = 150

    let stickyHeight = $sticky.outerHeight() // 获取 .videos 的高度
    let areaTop = $scrollArea.offset().top - offset // 获取 .scroll-area 的顶部距离
    let areaHeight = $scrollArea.outerHeight() // 获取 .scroll-area 的高度
    let areaBottom = areaTop + areaHeight - stickyHeight // 计算 .scroll-area 的底部距离
    // console.log("sticky 高度:", stickyHeight);
    // console.log("sticky 高度:", stickyHeight);
    // console.log("areaTop:", scrollY, areaBottom, scrollY >= areaBottom);

    if (scrollY > areaTop && scrollY < areaBottom) {
      // 在 .scroll-area 范围内，固定吸顶
      $sticky.addClass('active').css({ position: 'fixed', top: offset + 'px', bottom: 'auto' })
    } else if (scrollY >= areaBottom) {
      // 超过 .scroll-area，跟随滚动
      $sticky.removeClass('active').css({ position: 'absolute', top: 'auto', bottom: 0 })
    } else {
      // 低于 .scroll-area，取消固定
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
