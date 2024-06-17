
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById("show-more-btn").addEventListener("click", function() {
    const btn = document.querySelector(".icon-button");
    const leftSecondDiv = document.querySelector(".left_second");
    const additionalText = "I offer comprehensive programming and design services tailored to your needs, including web development, UI/UX design, and more.";
    
    if (!leftSecondDiv.classList.contains("expanded")) {
        btn.style.display = "none";
        leftSecondDiv.innerHTML += additionalText;
        leftSecondDiv.classList.add("expanded");
    }
});
