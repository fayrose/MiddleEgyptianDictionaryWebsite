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

function MyToggle() {
    if ($(".my-toggle").hasClass("active")) {
        $(".my-toggle").removeClass("active");
        $(".toggle-check").prop('checked', false);
    } else {
        $(".my-toggle").addClass("active");
        $(".toggle-check").prop('checked', true);
    }
}