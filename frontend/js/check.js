document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const checkButton = document.getElementById("checkPaperBtn");

    let selectedFile = null;

    fileInput.addEventListener("change", function () {
        selectedFile = fileInput.files[0];
        if (selectedFile) {
            alert(`File selected: ${selectedFile.name}`);
        }
    });

    checkButton.addEventListener("click", function () {
        if (!selectedFile) {
            alert("Please upload a file before checking.");
            return;
        }
        // Simulate check process
        alert("Checking paper format...");
        // Redirect to analytics page (to be built later)
        window.location.href = "analytics.html";
    });
});
