function AllTypeClick() {
    $("#all-type").addClass("radio_active active").removeClass("radio_not_active");
    $("#translit-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#translate-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#sign-type").removeClass("radio_active active").addClass("radio_not_active");
};

function TranslitTypeClick() {
    $("#translit-type").addClass("radio_active active").removeClass("radio_not_active");
    $("#all-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#translate-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#sign-type").removeClass("radio_active active").addClass("radio_not_active");
};

function TranslateTypeClick() {
    $("#translate-type").addClass("radio_active active").removeClass("radio_not_active");
    $("#translit-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#all-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#sign-type").removeClass("radio_active active").addClass("radio_not_active");
};

function SignTypeClick() {
    $("#sign-type").addClass("radio_active active").removeClass("radio_not_active");
    $("#translit-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#translate-type").removeClass("radio_active active").addClass("radio_not_active");
    $("#all-type").removeClass("radio_active active").addClass("radio_not_active");
};

function ExactMatchToggle() {
    if ($("#exact-match").hasClass("active")) {
        $("#exact-match").removeClass("active");
        $("#match-check").prop('checked', false);
    } else {
        $("#exact-match").addClass("active");
        $("#match-check").prop('checked', true);
    }
}