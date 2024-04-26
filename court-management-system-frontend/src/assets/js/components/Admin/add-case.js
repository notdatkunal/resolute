$(function () { 
    // Set up formatting for Credit Card fields
    $('#credit .cc-number').on('input', function() {
        formatCardNumber(this);
    });
});



// Function to format credit card number
function formatCardNumber(input) {
    var value = $(input).val().replace(/\D/g, '');
    if (value) {
        value = value.match(/.{1,4}/g).join(' ');
    }
    $(input).val(value);
}