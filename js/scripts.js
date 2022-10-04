$('.btn-nav').click(function() {
  $(this).toggleClass('arrow');
    
  if($(window).width() >= 992) {

  if($(this).hasClass('arrow')) {
    $('.dash-header').css('padding-left', '50px');
    $('.side-nav').css('width', '50px');
    $('.main-content').css('padding-left', '50px');
    $('.footer').css('left', '50');
    $('.list-text').addClass('d-none');
    $('.profpic-area p').addClass('d-none');
    $('.logo-link').addClass('d-none');
    $('.img-profile').addClass('cropped');

  } else {
    $('.dash-header').css('padding-left', '250px');
    $('.side-nav').css('width', '250px');
    $('.main-content').css('padding-left', '250px');
    $('.footer').css('left', '250');
    setTimeout(() => {
        $('.list-text').removeClass('d-none');
        $('.profpic-area p').removeClass('d-none');
        $('.logo-link').removeClass('d-none');
        $('.img-profile').removeClass('cropped');
    }, 250);
  }

} 
else if($(window).width() >= 768 && $(window).width() < 992) {
    if($(this).hasClass('arrow')) {
        $('.dash-header').css('padding-left', '250px');
        $('.dash-header').css('background', 'transparent');
        $('.side-nav').css('width', '250px');
        $('.dark-body').addClass('stat-back');
        setTimeout(() => {
            $('.list-text').removeClass('d-none');
            $('.profpic-area p').removeClass('d-none');
            $('.logo-link').removeClass('d-none');
            $('.img-profile').removeClass('cropped');
        }, 250);

    } else {
        $('.dash-header').css('padding-left', '50px');
        $('.dash-header').css('background', 'white');
        $('.side-nav').css('width', '50px');
        $('.dark-body').removeClass('stat-back');
        $('.list-text').addClass('d-none');
        $('.profpic-area p').addClass('d-none');
        $('.logo-link').addClass('d-none');
        $('.img-profile').addClass('cropped');
    }
} else if($(window).width() < 768) {
        if($(this).hasClass('arrow')) {
        $('.dash-header').css('padding-left', '250px');
        $('.dash-header').css('background', 'transparent');
        $('.not-drop').addClass('d-none');
        $('.side-nav').css('width', '250px');
        $('.dark-body').addClass('stat-back');
        setTimeout(() => {
            $('.list-text').removeClass('d-none');
            $('.profpic-area p').removeClass('d-none');
            $('.logo-link').removeClass('d-none');
            $('.img-profile').removeClass('cropped');
        }, 250);


    } else {
        $('.dash-header').css('padding-left', '0px');
        $('.dash-header').css('background', 'white');
        $('.side-nav').css('width', '0px');
        $('.dark-body').removeClass('stat-back');
        $('.list-text').addClass('d-none');
        $('.profpic-area p').addClass('d-none');
        $('.logo-link').addClass('d-none');
        $('.img-profile').addClass('cropped');
        setTimeout(() => {
            $('.not-drop').removeClass('d-none');
        }, 250);
    }
}

});

if($(window).width() >= 992) {

    $('.side-nav').mousemove(function() {
            if($('.btn-nav').hasClass('arrow')) {
        $(this).css('width', '250px');
        setTimeout(() => {
            $('.list-text').removeClass('d-none');
            $('.profpic-area p').removeClass('d-none');
            $('.logo-link').removeClass('d-none');
            $('.img-profile').removeClass('cropped');
        }, 250);
    }
    });

    $('.side-nav').mouseout(function() {
        if($('.btn-nav').hasClass('arrow')) {
        $(this).css('width', '50px');
        setTimeout(() => {
            $('.list-text').addClass('d-none');
            $('.profpic-area p').addClass('d-none');
            $('.logo-link').addClass('d-none');
            $('.img-profile').addClass('cropped');
        }, 250);
    }
    });

}

if($(window).width() >= 768 && $(window).width() < 992) {
    $('.list-text').addClass('d-none');
    $('.profpic-area p').addClass('d-none');
    $('.logo-link').addClass('d-none');
    $('.img-profile').addClass('cropped');

    $('.side-nav').mousemove(function() {
        if($('.btn-nav').hasClass('arrow')) {

        }
        else{
    $(this).css('width', '250px');
    setTimeout(() => {
        $('.list-text').removeClass('d-none');
        $('.profpic-area p').removeClass('d-none');
        $('.logo-link').removeClass('d-none');
        $('.img-profile').removeClass('cropped');
    }, 250);
}
});

$('.side-nav').mouseout(function() {
    if($('.btn-nav').hasClass('arrow')) {

    }
    else{
    $(this).css('width', '50px');
    setTimeout(() => {
        $('.list-text').addClass('d-none');
        $('.profpic-area p').addClass('d-none');
        $('.logo-link').addClass('d-none');
        $('.img-profile').addClass('cropped');
    }, 250);
}
});

}