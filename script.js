
async function startCamera() {
    const video = document.getElementById('camera-feed');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing the camera:", error);
    }
}

function captureImage() {
    alert("Details have been fetched. Please enter the bird's name to view them.");
}


function searchBird() {
    const birdName = document.getElementById('bird-name').value;
    if (birdName) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(birdName)} bird`;
        window.open(url, '_blank');
    } else {
        alert("Please enter a bird name.");
    }
}


window.onload = startCamera;



let lastScrollPosition = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down
        header.style.top = "-60px"; // Hide header (adjust height as needed)
    } else {
        // User is scrolling up
        header.style.top = "0"; // Show header
    }

    lastScrollPosition = currentScrollPosition;
});
