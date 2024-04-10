// Function to handle button click events on index.html
function selectBenchOption(option) {
    if (option === '2') {
        window.location.href = 'page2.html'; // Redirect to page2.html when '2 vedikas' is clicked
    }
}

// Function to handle button click events on page2.html
function selectSquatsOption(option) {
    if (option === 'yes') {
        window.location.href = 'page3.html'; // Redirect to page3.html when 'yes' is clicked
    }
}

// Function to handle button click events on page3.html
function selectLikeOption(option) {
    if (option === 'yes') {
        window.location.href = 'final.html'; // Redirect to final.html when 'yes' is clicked
    }
}

// Function to disable 'no' option in page3.html
function disableNoOption() {
    document.getElementById('no-option').setAttribute('disabled', true);
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}
