$(document).ready(function () {
    const quote = $('#quote');
    const input = $('#input');
    const result = $('#result');
    let startTime;

    // Load a random sentence from the server
    $.get('/get_sentence', function (data) {
        quote.text(data.sentence);
        input.val('');
        startTime = new Date().getTime();
    });

    // Event listener for typing
    input.on('input', function () {
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        const words = input.val().trim().split(' ').length;
        const typingSpeed = (words / elapsedTime) * 60;
        result.text('Result: ' + typingSpeed.toFixed(2) + ' WPM');
    });
});
