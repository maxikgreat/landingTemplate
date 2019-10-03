
export const playVideo = () => {
    let playButton = document.getElementById("playButton");
    let video = document.querySelector('video');
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.style.zIndex = -1;
    } else {
        return null
    }
    })
}
    

