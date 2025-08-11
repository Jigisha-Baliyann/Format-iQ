document.addEventListener("DOMContentLoaded", function () {
    const fileName = localStorage.getItem("uploadedFileName");
    const score = localStorage.getItem("analysisScore");

    if (fileName) {
        document.getElementById("fileName").textContent = fileName;
    } else {
        document.getElementById("fileName").textContent = "No file found";
    }

    if (score) {
        document.getElementById("score").textContent = score + "%";
    } else {
        document.getElementById("score").textContent = "N/A";
    }
});
