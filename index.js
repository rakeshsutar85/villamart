function openPopup() {
    document.getElementById('popup-overlay').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    var video = document.getElementById("myVideo");
    video.pause(); // Pause the video
    video.currentTime = 0;
}

// Open the popup when the page loads
window.onload = function () {
    openPopup();
};


// Suppored by Start


// Supported by End