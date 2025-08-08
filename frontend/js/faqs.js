  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            items.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                    i.querySelector(".icon").textContent = "+";
                }
            });

            item.classList.toggle("active");
            const icon = item.querySelector(".icon");
            icon.textContent = item.classList.contains("active") ? "−" : "+";
        });
    });
});
