
(function ($) {
    "use strict";
    $('.lt-input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") { $(this).addClass('has-val'); }
            else { $(this).removeClass('has-val'); }
        })
    });
    var input = $('.lt-validate__input .lt-input'); $('.lt-validate__form').on('submit', function () {
        var check = true; for (var i = 0; i < input.length; i++) { if (validate(input[i]) == false) { showValidate(input[i]); check = false; } }
        return check;
    }); $('.lt-validate__form .lt-input').each(function () { $(this).focus(function () { hideValidate(this); }); }); function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') { if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) { return false; } }
        else { if ($(input).val().trim() == '') { return false; } }
    }
    function showValidate(input) { var thisAlert = $(input).parent(); $(thisAlert).addClass('alert-validate'); }
    function hideValidate(input) { var thisAlert = $(input).parent(); $(thisAlert).removeClass('alert-validate'); }
    var showPass = 0; $('.btn-show-pass').on('click', function () {
        if (showPass == 0) { $(this).next('input').attr('type', 'text'); $(this).find('i').removeClass('zmdi-eye'); $(this).find('i').addClass('zmdi-eye-off'); showPass = 1; }
        else { $(this).next('input').attr('type', 'password'); $(this).find('i').addClass('zmdi-eye'); $(this).find('i').removeClass('zmdi-eye-off'); showPass = 0; }
    });
})(jQuery);



var service = (function () {


    let _login = function (_) {

        // firebase.initializeApp(Config);

        //var dbRef = firebase.database();

        //var contacts = dbRef.ref('lotto-data/auth');

        // var defaultProject = firebase.initializeApp(Config);

        // var contacts = dbRef.ref('lotto-data/auth');

        //contacts.on("child_added", fun ction (snap) {
        //   console.log(snap.val())
        // });


    };


    return {
        Login: _login
    }
})();