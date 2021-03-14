$('.click-video-button').click(function() {
    $('.click-for-video').css('display', 'none');
    $('div.youtube').css('display', 'block');
    $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/ZOzzRlc_qho?rel=0&amp;modestbranding=1&amp;controls=2&amp;showinfo=0&amp;fs=1&amp;wmode=opaque&amp;autoplay=1&amp;enablejsapi=1&amp;');
});
