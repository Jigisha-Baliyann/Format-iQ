document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const fileLabel = document.getElementById("fileLabel");
    const checkButton = document.getElementById("checkPaperBtn");
    const standardSelect = document.getElementById("standardSelect");
    let selectedFile = null;

    // Loader Element
    const loader = document.createElement("div");
    loader.id = "loadingSpinner";
    loader.style.display = "none";
    loader.style.position = "fixed";
    loader.style.top = "50%";
    loader.style.left = "50%";
    loader.style.transform = "translate(-50%, -50%)";
    loader.style.backgroundColor = "rgba(0,0,0,0.85)";
    loader.style.color = "#fff";
    loader.style.padding = "20px 40px";
    loader.style.borderRadius = "10px";
    loader.style.fontSize = "1.2rem";
    loader.style.zIndex = "1000";
    loader.style.textAlign = "center";
    loader.innerHTML = `
        <div style="border:4px solid #f3f3f3;
                    border-top:4px solid #2563eb;
                    border-radius:50%;
                    width:30px;
                    height:30px;
                    animation:spin 1s linear infinite;
                    margin:0 auto 10px auto;">
        </div>
        <p>Checking paper format...</p>
    `;
    document.body.appendChild(loader);

    // Spinner Animation CSS
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // File selection → update label text
    fileInput.addEventListener("change", function () {
        selectedFile = fileInput.files[0];
        if (selectedFile) {
            fileLabel.textContent = `Selected: ${selectedFile.name}`;
        } else {
            fileLabel.textContent = "📂 Upload a file";
        }
    });

    // Label click → trigger file selection
    fileLabel.addEventListener("click", () => fileInput.click());

    // Button click
    checkButton.addEventListener("click", function () {
        if (!selectedFile) {
            alert("Please upload a file before checking.");
            return;
        }

        // Save data to localStorage for results page
        localStorage.setItem("uploadedFileName", selectedFile.name);
        localStorage.setItem("analysisScore", "85");
        localStorage.setItem("selectedStandard", standardSelect.value);

        // Show loader
        loader.style.display = "block";

        // Simulate processing
        setTimeout(function () {
            loader.style.display = "none";
            window.location.href = "results.html";
        }, 2000);
    });
});
