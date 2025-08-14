document.addEventListener("DOMContentLoaded", function () {
    const fileName = localStorage.getItem("uploadedFileName");
    const score = localStorage.getItem("analysisScore");
    const selectedStandard = localStorage.getItem("selectedStandard");

    // ===== File name in header =====
    const fileNameElem = document.getElementById("fileName");
    if (fileName && fileName.trim() !== "") {
        fileNameElem.textContent = fileName;
    } else {
        fileNameElem.textContent = "No file found";
    }

    // ===== Score circle =====
    const scoreElem = document.getElementById("score");
    if (score && score.trim() !== "") {
        scoreElem.textContent = score + "%";
    } else {
        scoreElem.textContent = "N/A";
    }

    // ===== Selected standard in header & score description =====
    const standardElemHeader = document.getElementById("selectedStandardDisplay");
    const standardElemScoreText = document.getElementById("selectedStandardDisplayScore");

    let standardToShow = "N/A";
    if (selectedStandard && selectedStandard.trim() !== "") {
        standardToShow = selectedStandard.toUpperCase();
    }

    if (standardElemHeader) {
        standardElemHeader.textContent = standardToShow;
    }
    if (standardElemScoreText) {
        standardElemScoreText.textContent = standardToShow;
    }
});
