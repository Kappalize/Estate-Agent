$('#contac-form').submit(function(e) {
    var name = document.getElementById('inputName'),
        email = document.getElementById('inputEmail'),
        message = document.getElementById('inputMessage');

    if (name.value || !email.value || !message.value) {
        alertify.error('Please check your entries');
    } else {
        $.ajax({
            url: "https://formspree.io/samnatangwe@live.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.seccess('Message sent');
    }

});