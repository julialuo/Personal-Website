/**
 * Created by julia on 2016-07-11.
 */
var previous_id = "home-nav"

function nav_click (button_id) {
    document.getElementById(previous_id).className = "";
    document.getElementById(button_id).className = "active";
    previous_id = button_id;
}