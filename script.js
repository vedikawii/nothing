// Function to handle bench options
function selectBenchOption(option) {
    if (option === '2') {
        window.location.href = 'page2.html';
    }
}

// Function to handle jump squats options
function selectSquatsOption(option) {
    if (option === '1') {
        window.location.href = 'page3.html';
    }
}

// Function to handle liking option
function selectLikeOption(option) {
    if (option === 'yes') {
        window.location.href = 'final.html';
    }
}

// Function to disable option 2 in third page
function disableOption() {
    document.getElementById('no-option').setAttribute('disabled', true);
}
