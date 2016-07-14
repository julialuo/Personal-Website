/**
 * Created by julia on 2016-07-11.
 */

$(document).ready(function() {
    var previous_id = 'home-nav';

    $('#home').waypoint(function(direction) {
        if (direction == 'down') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#home-nav').css('background-color', 'rgb(181, 170, 255)');
            previous_id = 'home-nav';
        }
    });

    $('#home').waypoint(function(direction) {
        if (direction == 'up') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#home-nav').css('background-color', 'rgb(181, 170, 255)');
            previous_id = 'home-nav';
        }
    }, {
        offset: '-1%'
    });

    $('#about').waypoint(function(direction) {
        if (direction == 'down') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#about-nav').css('background-color', 'rgb(138, 255, 138)');
            previous_id = 'about-nav';
        }
    });

    $('#about').waypoint(function(direction) {
        if (direction == 'up') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#about-nav').css('background-color', 'rgb(138, 255, 138)');
            previous_id = 'about-nav';
        }
    }, {
        offset: '-1%'
    });

    $('#projects').waypoint(function(direction) {
        if (direction == 'down') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#projects-nav').css('background-color', 'rgb(255, 179, 181)');
            previous_id = 'projects-nav';
        }
    });

    $('#projects').waypoint(function(direction) {
        if (direction == 'up') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#projects-nav').css('background-color', 'rgb(255, 179, 181)');
            previous_id = 'projects-nav';
        }
    }, {
        offset: '-1%'
    });

    $('#contact').waypoint(function(direction) {
        if (direction == 'down') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#contact-nav').css('background-color', 'rgb(255, 188, 121)');
            previous_id = 'contact-nav';
        }
    });

    $('#contact').waypoint(function(direction) {
        if (direction == 'up') {
            $('#' + previous_id).css('background-color', 'rgb(9, 38, 68)');
            $('#contact-nav').css('background-color', 'rgb(255, 188, 121)');
            previous_id = 'contact-nav';
        }
    }, {
        offset: '-1%'
    });
});
