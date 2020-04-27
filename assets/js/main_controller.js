/*jslint browser: true*/
/*global $*/
var arr = [{link: "https://www.facebook.com/groups/133217443853219/permalink/144719669369663/", image: "../assets/images/social-networks/facebook.png", alt: "Facebook Logo"},
          {link: "https://connect.unity.com/u/5a22ab4f880c64001e4f69fe", image: "../assets/images/social-networks/unity.png", alt: "Unity Logo"},
          {link: "https://twitter.com/raroks1008en", image: "../assets/images/social-networks/twitter.png", alt: "Twitter Logo"},
          {link: "https://www.linkedin.com/in/raroks-entertainment-698399143/", image: "../assets/images/social-networks/linkedin.png", alt: "LinkedIn Logo"},
          {link: "https://plus.google.com/u/0/112765633989100563682", image: "../assets/images/social-networks/googleplus.png", alt: "GooglePlus Logo"},
          {link: "../documentation/documentation.pdf", image: "../assets/images/documentation.png", alt: "GooglePlus Logo"}];

function fill_dynamic() {
    "use strict";
    arr.forEach(function (e) {
        var el = document.createElement('li');
        el.innerHTML = "<a href=\"" + e.link + "\"><img src=\"" + e.image + "\" alt=\"" + e.alt + "\"/></a>";
        document.getElementById('dynamic').appendChild(el);
    });
}

function set_preferences() {
    "use strict";
    $('.user_preferences').html('');
    var head3,
        head2 = document.createElement('h2'),
        arr2 = [{name: "- Your entered username is: ", text: "entered_username"},
              {name: "- Your entered password is: ", text: "entered_password"},
              {name: "- Notifications allowed: ", text: "notifications_allowed"},
              {name: "- Home page changed to this website: ", text: "home_page_set"},
              {name: "- Your entered birthday is: ", text: "birth_date"},
              {name: "- Is your location Belgrade: ", text: "location_belgrade"},
              {name: "- Subscribed to our newsletter: ", text: "wants_newsletter"},
              {name: "- And your entered email is: ", text: "newsletter_email_is"},
              {name: "- Do you need help with our website: ", text: "need_help"},
              {name: "- Help you requested is: ", text: "help_text"}];
    head2.innerHTML = "Your preferences:";
    head2.className = 'preferences_title';
    $('.user_preferences').append(head2);
    arr2.forEach(function (element) {
        var el = window.localStorage.getItem(element.text);
        if ((typeof el) === 'string') {
            head3 = document.createElement('h3');
            head3.className = "preferences_status";
            head3.innerHTML = element.name + el;
            $('.user_preferences').append(head3);
        }
    });
}

$(document).ready(function () {
    "use strict";
    var txt = 'You can make some pretty dazzling text effects with basic CSS and a few lines of JavaScript. These effects range from text display animations to 3D rotations or anything else you can imagine. Use these as much as possible.',
        velocity = 200,
        nclick = 0;
    $('a').smoothScroll();
    $('nav li ul').hide().removeClass('fall_down');
    $('nav li').hover(
        function () {
            $('ul', this).stop().slideDown(100);
        },
        function () {
            $('ul', this).stop().slideUp(100);
        }
    );
    fill_dynamic();
    $('.welcome_screen').hover(function () {
        $('.welcome_screen').css('background-image', 'none');
        $('.welcome_screen p').text('By using images displaying all colors, genders, and statuses, our visitors get a feeling of warm welcome. By adding hover effects we set a higher lever of professionality.');
    }, function () {
        $('.welcome_screen').css('background-image', 'url(\'../assets/images/welcome_image.jpg\')');
        $('.welcome_screen p').text('Making a website in 2018 has never been easier. With a few simple clicks, and with a lot of prebuild libraries we can make a fully functional responsive website in a very small time.');
    });

    setInterval(function () {
        var nxt = $('.carousel .carousel_image.active_image').next();
        if (nxt.length) {
            $('.carousel .carousel_image.active_image').removeClass('active_image');
            nxt.addClass('active_image');
            return;
        }
        $('.carousel .carousel_image.active_image').removeClass('active_image');
        $('.carousel_image:first-child').addClass('active_image');
    }, 5000);
    $('#animation_button').click(function () {
        nclick = nclick + 1;
        if (nclick === 2 || nclick === 3) {
            $('#animation_button').val('Show text faster!');
            velocity = velocity / 2;
        }
        if (nclick === 4) {
            $('#animation_button').val('Not that faaaaaast...');
            $('.text_animation_holder').animate({
                opacity: 0,
                width: 0,
                height: 0
            }, 3000, function () {
                $('#animation_button').fadeOut();
            });
        }
        window.setInterval(function () {
            var inText = $('.text_animation_holder').text();
            inText = inText + txt.substring(0, 1);
            txt = txt.substr(1);
            if (inText.length === 0) {
                window.clearInterval();
            }
            $('.text_animation_holder').text(inText);
        }, velocity);
    });
    $('#complex_button_submit').click(function () {
        var compText = $('#complex_username_check').val(),
            compPass = $('#complex_password_check').val(),
            cap_let = /[A-Z]+/,
            two_num = /\d{2,}/,
            spec_char = /[!@#$%\^&*(),.?":{}|<>]/,
            cont_text = /(inspiringmessage)|(spell)|(gangsign)|(hieroglyph)|(bloodofavirgin)/;
        if (!compText) {
            $('.complex_warning').text('Sorry, you must enter a valid username.');
            return;
        }
        if (!cap_let.test(compPass)) {
            $('.complex_warning').text('Sorry, your password must contain a capital letter.');
            return;
        }
        if (!two_num.test(compPass)) {
            $('.complex_warning').text('Sorry, your password must contain at least two numbers.');
            return;
        }
        if (!spec_char.test(compPass)) {
            $('.complex_warning').text('Sorry, your password must contain a symbol.');
            return;
        }
        if (!cont_text.test(compPass)) {
            $('.complex_warning').text('Sorry, your password must an inspiring message or a spell or a gang sign or a hieroglyph or the blood of a virgin.');
            return;
        }
        window.localStorage.setItem('entered_username', compText);
        window.localStorage.setItem('entered_password', compPass);
        $('.complex_sign_up').html('<h2 class="complex_success">You have successfully signed up!</h2>');
        set_preferences();
    });
    set_preferences();
});
