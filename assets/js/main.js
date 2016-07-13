/**
 * Created by julia on 2016-07-11.
 */

$(document).ready(function() {
    var previous_id = "home-nav";

    $('#home-nav, #about-nav, #projects-nav, #contact-nav').click(function () {
        $('#' + previous_id).removeClass('active');
        $(this).addClass("active");
        previous_id = this.id;
    });

    $('#home').waypoint(function() {
        $('#' + previous_id).removeClass('active');
        $('#home-nav').addClass("active");
        previous_id = 'home-nav';
    });

    $('#about').waypoint(function() {
        $('#' + previous_id).removeClass('active');
        $('#about-nav').addClass("active");
        previous_id = 'about-nav';
    });

    $('#projects').waypoint(function() {
        $('#' + previous_id).removeClass('active');
        $('#projects-nav').addClass("active");
        previous_id = 'projects-nav';
    });

    $('#contact').waypoint(function() {
        $('#' + previous_id).removeClass('active');
        $('#contact-nav').addClass("active");
        previous_id = 'contact-nav';
    });
});
