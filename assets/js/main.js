/*global window, document, location*/
var notifications_allowed = false,
    home_page_set = false,
    cookies_enabled = false,
    birth_date = new Date(),
    first_date = false,
    first_mail = false,
    location_belgrade = false,
    wants_newsletter = false,
    newsletter_email_is = "",
    need_help = false,
    help_text = "",
    ad_block_acknowledged = false,
    find_looking_for = false;

function setLocalStorage() {
    "use strict";
    window.localStorage.setItem('notifications_allowed', notifications_allowed);
    window.localStorage.setItem('home_page_set', home_page_set);
    window.localStorage.setItem('birth_date', birth_date);
    window.localStorage.setItem('location_belgrade', location_belgrade);
    window.localStorage.setItem('wants_newsletter', wants_newsletter);
    if (wants_newsletter) {
        window.localStorage.setItem('newsletter_email_is', newsletter_email_is);
    }
    window.localStorage.setItem('need_help', need_help);
    if (need_help) {
        window.localStorage.setItem('help_text', help_text);
    }
    window.localStorage.setItem('find_looking_for', find_looking_for);
}

function follow_us() {
    "use strict";
    window.setTimeout(function () {
        var div1 = document.createElement("div"),
            head2 = document.createElement("h2"),
            arr = [{link: "https://www.facebook.com/groups/133217443853219/permalink/144719669369663/", image: "assets/images/social-networks/facebook.png", alt: "Facebook Logo"},
                  {link: "https://connect.unity.com/u/5a22ab4f880c64001e4f69fe", image: "assets/images/social-networks/unity.png", alt: "Unity Logo"},
                  {link: "https://twitter.com/raroks1008en", image: "assets/images/social-networks/twitter.png", alt: "Twitter Logo"},
                  {link: "https://www.linkedin.com/in/raroks-entertainment-698399143/", image: "assets/images/social-networks/linkedin.png", alt: "LinkedIn Logo"},
                  {link: "https://plus.google.com/u/0/112765633989100563682", image: "assets/images/social-networks/googleplus.png", alt: "GooglePlus Logo"}],
            ul_list = document.createElement("ul"),
            link1 = document.createElement("a");
        div1.className = "following_holder";
        head2.className = "following_head";
        arr.forEach(function (element) {
            var li_list = document.createElement("li"),
                a_list = document.createElement("a");
            a_list.href = element.link;
            a_list.innerHTML = "<img src=\"" + element.image + "\"" + "alt=\"" + element.alt + "\"/>";
            li_list.appendChild(a_list);
            ul_list.appendChild(li_list);
        });
        head2.innerHTML = "Don't forget to subscribe to our social media";
        div1.appendChild(head2);
        div1.appendChild(ul_list);
        link1.className = "link_home";
        link1.href = "pages/main.html";
        link1.innerHTML = "Just kidding, enter site here...";
        div1.appendChild(link1);
        document.querySelector(".section_holder").appendChild(div1);
        setLocalStorage();
    }, 1000);
}

function snap() {
    "use strict";
    document.getElementById("yes_find_looking").removeEventListener("click", function () { return true; });
    document.getElementById("no_find_looking").removeEventListener("click", function () { return true; });
    document.querySelector(".looking_holder").className += " " + "flytop";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            head2 = document.createElement("h2"),
            text = document.createElement("p");
        div1.className = "snap_holder";
        head2.className = "snap_head";
        text.className = "snap_text";
        head2.innerHTML = "Aw, snap!";
        text.innerHTML = "Something went wrong while displaying this webpage. To continue, reload or go to another page.";
        div1.appendChild(head2);
        div1.appendChild(text);
        document.querySelector(".section_holder").appendChild(div1);
        follow_us();
    }, 1500);
}

function find_look() {
    "use strict";
    document.getElementById("need_support").removeEventListener("click", function () { return true; });
    document.getElementById("no_need_support").removeEventListener("click", function () { return true; });
    document.querySelector(".support_holder").className += " " + "flytop";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            div2 = document.createElement("div"),
            head2 = document.createElement("h2"),
            input1 = document.createElement("input"),
            input2 = document.createElement("input");
        div1.className = "looking_holder";
        head2.className = "looking_head";
        head2.innerHTML = "Did you find what you were looking for?";
        div2.className = "looking_button_holder";
        input1.className = "looking_button";
        input1.type = "button";
        input2.type = "button";
        input2.className = "looking_button";
        input1.value = "YES";
        input2.value = "NO";
        input1.id = "yes_find_looking";
        input2.id = "no_find_looking";
        div2.appendChild(input1);
        div2.appendChild(input2);
        div1.appendChild(head2);
        div1.appendChild(div2);
        document.querySelector(".section_holder").appendChild(div1);
        document.querySelector("#yes_find_looking").addEventListener("click", function () {
            find_looking_for = true;
            snap();
        });
        document.querySelector("#no_find_looking").addEventListener("click", function () {
            find_looking_for = false;
            snap();
        });
    }, 1500);
}

function ad_blocker() {
    "use strict";
    window.setTimeout(function () {
        var div1 = document.createElement("div"),
            head2 = document.createElement("h2"),
            input1 = document.createElement("input"),
            text = document.createElement("p");
        div1.className = "ad_blocker_holder";
        head2.className = "ad_blocker_head";
        head2.innerHTML = "It looks like you're using an ad blocker.";
        text.className = "ad_blocker_text";
        text.innerHTML = "That's okay. Who doesn't? But without advertising-income, we can't keep making this site awesome.";
        input1.type = "button";
        input1.className = "ad_blocker_button";
        input1.value = "I UNDERSTAND";
        input1.id = "ad_block_acknowledge";
        div1.appendChild(head2);
        div1.appendChild(text);
        div1.appendChild(input1);
        document.querySelector(".section_holder").appendChild(div1);
        document.getElementById("ad_block_acknowledge").addEventListener("click", function () {
            ad_block_acknowledged = true;
            document.querySelector(".ad_blocker_holder").className += " " + "flybottom";
            document.querySelector("#need_support").addEventListener("click", function () {
                need_help = true;
                help_text = document.getElementById("support_text").value;
                find_look();
            });
            document.querySelector("#no_need_support").addEventListener("click", function () {
                need_help = false;
                find_look();
            });
        });
    }, 500);
}

function support_tab() {
    "use strict";
    document.getElementById("newsletter_send").removeEventListener("click", function () { return true; });
    document.getElementById("newsletter_close").removeEventListener("click", function () { return true; });
    document.querySelector(".newsletter_holder").className += " " + "flytop";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            div2 = document.createElement("div"),
            head2 = document.createElement("h2"),
            input3 = document.createElement("textarea"),
            input1 = document.createElement("input"),
            input2 = document.createElement("input"),
            imag = document.createElement("div");
        div1.className = "support_holder";
        head2.className = "support_head";
        head2.innerHTML = "Support team: RarOks";
        input3.placeholder = "How can I help you?";
        input3.className = "support_text_area";
        input3.id = "support_text";
        imag.className = "support_assistant";
        input1.type = "button";
        input1.className = "support_button";
        input1.id = "need_support";
        input1.value = "Yes";
        input2.type = "button";
        input2.className = "support_button";
        input2.id = "no_need_support";
        input2.value = "No";
        div2.className = "support_button_holder";
        div2.appendChild(input1);
        div2.appendChild(input2);
        div2.appendChild(imag);
        div1.appendChild(head2);
        div1.appendChild(input3);
        div1.appendChild(div2);
        document.querySelector(".section_holder").appendChild(div1);
        ad_blocker();
    }, 1500);
}

function subscribe_newsletter() {
    "use strict";
    document.getElementById("yes_location_belgrade").removeEventListener("click", function () { return true; });
    document.getElementById("no_location_belgrade").removeEventListener("click", function () { return true; });
    document.querySelector(".location_holder").className += " " + "flytop";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            eks = document.createElement("input"),
            imag = document.createElement("div"),
            txt = document.createElement("p"),
            div2 = document.createElement("div"),
            input1 = document.createElement("input"),
            input2 = document.createElement("input");
        div1.className = "newsletter_holder";
        div2.className = "newsletter_mail_holder";
        eks.value = "X";
        eks.type = "button";
        eks.className = "newsletter_close";
        eks.id = "newsletter_close";
        imag.className = "newsletter_image";
        txt.className = "newsletter_text";
        txt.innerHTML = "Please subscribe to our newsletter and don't misss any important news.";
        input1.type = "email";
        input1.id = "newsletter_email";
        input1.className = "newsletter_mail";
        input1.placeholder = "Your e-mail";
        input2.type = "button";
        input2.value = "SUBSCRIBE";
        input2.id = "newsletter_send";
        input2.className = "newsletter_send_button";
        div1.appendChild(eks);
        div1.appendChild(imag);
        div1.appendChild(txt);
        div1.appendChild(div2);
        div2.appendChild(input1);
        div2.appendChild(input2);
        document.querySelector(".section_holder").appendChild(div1);
        document.querySelector("#newsletter_close").addEventListener("click", function () {
            wants_newsletter = false;
            newsletter_email_is = null;
            support_tab();
        });
        document.querySelector("#newsletter_send").addEventListener("click", function () {
            var mail_pattern = /^(\w|\d)\S*@\S+\.(\w|\d){2,}$/,
                alert_mail = document.createElement("p");
            wants_newsletter = true;
            if (mail_pattern.test(document.getElementById("newsletter_email").value)) {
                newsletter_email_is = document.getElementById("newsletter_email").value;
                support_tab();
                return;
            }
            if (!first_mail) {
                first_mail = true;
                alert_mail.innerHTML = "E-mail is not correct!";
                alert_mail.className = "alert_text_mail";
                div1.appendChild(alert_mail);
            }
        });
    }, 1500);
}

function your_location() {
    "use strict";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            div2 = document.createElement("div"),
            head2 = document.createElement("h2"),
            input1 = document.createElement("input"),
            input2 = document.createElement("input");
        div1.className = "location_holder";
        div2.className = "location_input_holder";
        head2.innerHTML = "Is your city Belgrade, SRB?";
        head2.className = "location_head";
        input1.type = "button";
        input1.value = "YES";
        input1.className = "input_location";
        input1.id = "yes_location_belgrade";
        input2.type = "button";
        input2.value = "NO";
        input2.className = "input_location";
        input2.id = "no_location_belgrade";
        div2.appendChild(input1);
        div2.appendChild(input2);
        div1.appendChild(head2);
        div1.appendChild(div2);
        document.querySelector(".section_holder").appendChild(div1);
        document.querySelector("#yes_location_belgrade").addEventListener("click", function () {
            location_belgrade = true;
            subscribe_newsletter();
        });
        document.querySelector("#no_location_belgrade").addEventListener("click", function () {
            location_belgrade = false;
            subscribe_newsletter();
        });
    }, 1500);
}

function privacy_set() {
    "use strict";
    document.getElementById("set_home_yes").removeEventListener("click", function () { return true; });
    document.getElementById("set_home_no").removeEventListener("click", function () { return true; });
    document.querySelector(".home_holder").className += " " + "flytop";
    window.setTimeout(function () {
        var div1 = document.createElement("div"),
            head2 = document.createElement("h2"),
            p1 = document.createElement("p"),
            input1 = document.createElement("input");
        head2.innerHTML = "We value your privacy";
        head2.className = "privacy_head";
        p1.innerHTML = "We and our partners use technology as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click bellow to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.";
        div1.className = "privacy_holder";
        input1.className = "privacy_button";
        input1.type = "button";
        input1.value = "I AGREE";
        input1.id = "agree_cookies";
        p1.className = "privacy_text";
        div1.appendChild(head2);
        div1.appendChild(p1);
        div1.appendChild(input1);
        document.querySelector(".section_holder").appendChild(div1);
        document.querySelector("#agree_cookies").addEventListener("click", function () {
            cookies_enabled = true;
            document.getElementById("agree_cookies").removeEventListener("click", function () { return true; });
            document.querySelector(".privacy_holder").className += " " + "flyleft";
        });
    }, 1500);
}

function over_eighteen() {
    "use strict";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            head2 = document.createElement("h2"),
            p1 = document.createElement("p"),
            div2 = document.createElement("div"),
            input1 = document.createElement("input"),
            input2 = document.createElement("input"),
            parts;
        head2.innerHTML = "Are you over 18?";
        p1.innerHTML = "This website requires you to be 18 years or older to enter";
        div1.className = "eighteen_holder";
        head2.className = "eighteen_head";
        p1.className = "eighteen_text";
        input1.className = "eighteen_button";
        input2.className = "eighteen_button";
        input1.type = "button";
        input2.type = "button";
        input1.value = "Yes";
        input2.value = "No";
        input1.id = "yes_eighteen";
        input2.id = "no_eighteen";
        div2.className = "eighteen_button_holder";
        div2.appendChild(input1);
        div2.appendChild(input2);
        div1.appendChild(head2);
        div1.appendChild(p1);
        div1.appendChild(div2);
        document.querySelector(".section_holder").appendChild(div1);
        document.querySelector("#yes_eighteen").addEventListener("click", function () {
            if (!first_date) {
                var div3 = document.createElement("div"),
                    input5 = document.createElement("input"),
                    input6 = document.createElement("input");
                div3.className = "eighteen_button_holder";
                input6.type = "date";
                input6.min = new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000);
                input6.className = "date_selector";
                input6.id = "date_value";
                input5.type = "button";
                input5.value = "SEND";
                input5.className = "eighteen_button";
                input5.id = "send_date";
                div3.appendChild(input6);
                div3.appendChild(input5);
                div1.appendChild(div3);
            }
            first_date = true;
            document.querySelector("#send_date").addEventListener("click", function () {
                birth_date = document.getElementById("date_value").value;
                parts = birth_date.split('-');
                birth_date = new Date(parts[0], parts[1] - 1, parts[2]);
                if (cookies_enabled && (Date.now() - birth_date.getTime() - 18 * 365 * 24 * 60 * 60 * 1000) > 0) {
                    document.getElementById("send_date").removeEventListener("click", function () { return true; });
                    if (document.getElementById("neki_p_tag") !== null) {
                        document.getElementById("neki_p_tag").display = "none";
                    }
                    document.querySelector(".eighteen_holder").className += " " + "flytop";
                    your_location();
                } else if (!cookies_enabled) {
                    if (document.getElementById("neki_p_tag") === null) {
                        var no_cookies_checked = document.createElement("p");
                        no_cookies_checked.id = "neki_p_tag";
                        no_cookies_checked.innerHTML = "You have to enable cookies!";
                        no_cookies_checked.style.color = "#ff0000";
                        div1.appendChild(no_cookies_checked);
                    }
                } else {
                    location.reload();
                }
            });
        });
        document.querySelector("#no_eighteen").addEventListener("click", function () {
            location.reload();
        });
    }, 1000);
}

function change_home_page() {
    "use strict";
    document.getElementById("allow_notification").removeEventListener("click", function () { return true; });
    document.getElementById("disallow_notification").removeEventListener("click", function () { return true; });
    document.querySelector(".notification_holder").className += " " + "flytop";
    window.setTimeout(function () {
        document.querySelector(".section_holder").innerHTML = "";
        var div1 = document.createElement("div"),
            div2 = document.createElement("div"),
            img1 = document.createElement("img"),
            p1 = document.createElement("p"),
            input_holder = document.createElement("div"),
            input1 = document.createElement("input"),
            input2 = document.createElement("input");
        img1.src = "assets/images/logo_50h.png";
        img1.alt = "Logo";
        p1.innerHTML = "Are you sure you want to change your home page to this website?";
        img1.className = "home_logo";
        div1.className = "home_holder";
        input_holder.className = "input_holder";
        input1.className = "home_button";
        input2.className = "home_button";
        input1.type = "button";
        input2.type = "button";
        input1.value = "Yes";
        input2.value = "No";
        input1.id = "set_home_yes";
        input2.id = "set_home_no";
        input_holder.appendChild(input1);
        input_holder.appendChild(input2);
        div2.appendChild(p1);
        p1.className = "home_text";
        div1.appendChild(img1);
        div1.appendChild(div2);
        div1.appendChild(input_holder);
        document.querySelector(".section_holder").appendChild(div1);
        document.querySelector("#set_home_yes").addEventListener("click", function () {
            home_page_set = true;
            privacy_set();
            over_eighteen();
        });
        document.querySelector("#set_home_no").addEventListener("click", function () {
            home_page_set = false;
            privacy_set();
            over_eighteen();
        });
    }, 2000);
}

function init() {
    "use strict";
    document.getElementById("enter_website").addEventListener("click", function () {
        document.getElementById("enter_website").removeEventListener("click", function () { return true; });
        document.querySelector(".logo_holder").className += " " + "flytop";
        document.querySelector(".heading").className += " " + "flytop";
        document.querySelector("#enter_website").className += " " + "flybottom";
        window.setTimeout(function () {
            document.querySelector(".section_holder").innerHTML = "";
            var div1 = document.createElement("div"),
                div2 = document.createElement("div"),
                img1 = document.createElement("img"),
                p1 = document.createElement("p"),
                p2 = document.createElement("p"),
                input_holder = document.createElement("div"),
                input1 = document.createElement("input"),
                input2 = document.createElement("input");
            img1.src = "assets/images/logo_50h.png";
            img1.alt = "Logo";
            p1.innerHTML = "WebsiteMaking wants to:";
            p2.innerHTML = "show notifications";
            img1.className = "notification_logo";
            div1.className = "notification_holder";
            input_holder.className = "input_holder";
            input1.className = "notification_button";
            input2.className = "notification_button";
            input1.type = "button";
            input2.type = "button";
            input1.value = "Allow";
            input2.value = "Block";
            input1.id = "allow_notification";
            input2.id = "disallow_notification";
            input_holder.appendChild(input1);
            input_holder.appendChild(input2);
            div2.appendChild(p1);
            div2.appendChild(p2);
            p1.className = "notification_text";
            p2.className = "notification_text";
            div1.appendChild(img1);
            div1.appendChild(div2);
            div1.appendChild(input_holder);
            document.querySelector(".section_holder").appendChild(div1);
            document.querySelector("#allow_notification").addEventListener("click", function () {
                notifications_allowed = true;
                change_home_page();
            });
            document.querySelector("#disallow_notification").addEventListener("click", function () {
                notifications_allowed = false;
                change_home_page();
            });
        }, 2000);
    });
}
init();
