/*jslint browser: true*/
/*global $*/
var arr = [{link: "https://www.facebook.com/groups/133217443853219/permalink/144719669369663/", image: "../assets/images/social-networks/facebook.png", alt: "Facebook Logo"},
          {link: "https://connect.unity.com/u/5a22ab4f880c64001e4f69fe", image: "../assets/images/social-networks/unity.png", alt: "Unity Logo"},
          {link: "https://twitter.com/raroks1008en", image: "../assets/images/social-networks/twitter.png", alt: "Twitter Logo"},
          {link: "https://www.linkedin.com/in/raroks-entertainment-698399143/", image: "../assets/images/social-networks/linkedin.png", alt: "LinkedIn Logo"},
          {link: "https://plus.google.com/u/0/112765633989100563682", image: "../assets/images/social-networks/googleplus.png", alt: "GooglePlus Logo"},
          {link: "../documentation/documentation.pdf", image: "../assets/images/documentation.png", alt: "Documentation"}];

function fill_dynamic() {
    "use strict";
    arr.forEach(function (e) {
        var el = document.createElement('li');
        el.innerHTML = "<a href=\"" + e.link + "\"><img src=\"" + e.image + "\" alt=\"" + e.alt + "\"/></a>";
        document.getElementById('dynamic').appendChild(el);
    });
}
function window_opening() {
    "use strict";
    var loading_screen = document.createElement('div'),
        text_indicator = document.createElement('p'),
        progress_bar_indicator = document.createElement('progress'),
        progress_value = 0,
        arr = [{percentage: 0, text: "Fetching Data"},
              {percentage: 100, text: "Retrieving User Preferences"},
              {percentage: 300, text: "Tracking Your Device"},
              {percentage: 600, text: "Hacking Your Device"},
              {percentage: 850, text: "Stealing Your Data"},
              {percentage: 1000, text: "Done, You Can Now Safelly Use Our Website Knowing Your Data Is \"Safe\" With US"}];

    loading_screen.className = 'loading_screen';
    progress_bar_indicator.className = 'progress_bar_indicator';
    progress_bar_indicator.value = 0;
    progress_bar_indicator.max = 1000;
    loading_screen.appendChild(progress_bar_indicator);
    text_indicator.className = 'text_indicator';
    loading_screen.appendChild(text_indicator);
    $('body').prepend(loading_screen);
    $('body').css("overflow", "hidden");
    $('.loading_screen').css('z-index', '10');

    setInterval(function () {
        $('.progress_bar_indicator').val(progress_value);
        arr.forEach(function (element) {
            if ($('.progress_bar_indicator').val() === element.percentage) {
                $('.text_indicator').html(element.text);
            }
            if ($('.progress_bar_indicator').val() === 1000) {
                window.clearInterval();
                setTimeout(function () {
                    $('.loading_screen').fadeOut('slow');
                    $("body").css("overflow", "auto");
                }, 4000);
            }
        });
        progress_value += 1;
    }, 30);
}

function author_images_shuffle() {
    "use strict";
    var pic = 0,
        image_loc = 'url(../assets/images/author-images/author_' + pic + '.jpg)',
        arr = ['There were a lot of trainings to do to reach this position...',
              'There was a little free time to go and explore Belgrade...',
              'Although fun was always on my side...',
              'And help was there always when it was needed...',
              'And a lot of thinking has been done to do this website...',
              'A lot of coins and bills have passed my hands...',
              'But all of this wouldn\'t be possible without her.'];
    $('.about_author').css('background-image', image_loc);
    $('.about_author p').text(arr[pic]);
    pic += 1;
    setInterval(function () {
        image_loc = 'url(../assets/images/author-images/author_' + pic + '.jpg)';
        $('.about_author').css('background-image', image_loc);
        $('.about_author p').text(arr[pic]);
        pic += 1;
        pic %= 7;
    }, 4000);
}

function cv_table_fill() {
    "use strict";
    var arr = [{column1: "BIOGRAPHY", column2: "Nikola Nedeljkovic"},
              {column1: "Date and place of birth", column2: "06.05.1996, Krusevac"},
              {column1: "Experience 2017 -", column2: "Front-End Developer at Summa Labs D.O.O"},
              {column1: "Experience 2013 -", column2: "Astronomical society of \"Eureka\" Krusevac"},
              {column1: "Experience 2013 - 2014", column2: "Member of the student team on the project GAM Asteroid Search Campaigntim"},
              {column1: "Education 2017 -", column2: "College of professional studies for information and communication technologies in Belgrade"},
              {column1: "Education 2011 - 2015", column2: "High School Krusevac"},
              {column1: "Courses and certificates", column2: "Certificate for presence on the conference Umrezavanje: New Age"},
              {column1: "Courses and certificates", column2: "Certificate for presence on the conference Umrezavanje: Knowledge For The Future"},
              {column1: "Courses and certificates", column2: "ALISON certificate for Microsoft Excel 2010"},
              {column1: "Courses and certificates", column2: "ALISON certificate for Microsoft PowerPoint 2010"},
              {column1: "Courses and certificates", column2: "Certificate for German language А1"},
              {column1: "Courses and certificates", column2: "Certificate for presence on the conference KIMUN"},
              {column1: "Courses and certificates", column2: "Award Outstanding Delegate on the conference KIMUN"},
              {column1: "Courses and certificates", column2: "Certificate for participation in InOMN 2013"},
              {column1: "Courses and certificates", column2: "FCE diploma for English language with grade A (demonstrated knowledge of C1)"},
              {column1: "Language knowledge", column2: "Serbian language (mother tongue), English language (higher level), Italian language (intermediate level), German language (initial level)"}],
        cv_table = document.createElement('table'),
        head2 = document.createElement('h2');
    head2.innerHTML = "Curriculum vitae:";
    head2.className = 'cv_title';
    arr.forEach(function (arr_el) {
        var el = document.createElement('tr'),
            col1 = document.createElement('td'),
            col2 = document.createElement('td');
        col1.innerHTML = arr_el.column1;
        col1.className = 'cv_left_column';
        col2.innerHTML = arr_el.column2;
        el.appendChild(col1);
        el.appendChild(col2);
        cv_table.appendChild(el);
    });
    cv_table.className = 'cv_table';
    $('.author_cv').append(head2);
    $('.author_cv').append(cv_table);
    $('.author_cv table tr:even').css("background-color", "#343434");
}

$(document).ready(function () {
    "use strict";
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
    window_opening();
    author_images_shuffle();
    cv_table_fill();
});
