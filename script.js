document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const carousel = new bootstrap.Carousel(document.getElementById("imageCarousel"));

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            carousel.to(index); 
        });
    });
});
document.querySelectorAll(".thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        document.querySelectorAll(".thumbnail").forEach(tn => tn.classList.remove("active"));
        this.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.getElementById("add-to-cart");

    if (!cartLink) {
        console.error("Error: 'add-to-cart' element not found.");
        return;
    }

    function updateCartLink() {
        const selectedFlavor = document.querySelector('input[name="flavor"]:checked');
        const selectedPurchase = document.querySelector('input[name="purchase"]:checked');

        if (selectedFlavor && selectedPurchase) {
            const newUrl = `https://example.com/cart?flavor=${selectedFlavor.value}&purchase=${selectedPurchase.value}`;
            cartLink.href = newUrl;
            cartLink.textContent = `Add to Cart (${selectedFlavor.value} - ${selectedPurchase.value})`;
        }
    }

    //event listeners to radio buttons
    document.querySelectorAll('input[name="flavor"], input[name="purchase"]').forEach((radio) => {
        radio.addEventListener("change", updateCartLink);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    function countUp() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target"); 
            let count = 0;
            const speed = 20;
            
            function updateCount() {
                count += Math.ceil(target / 50);
                if (count < target) {
                    counter.innerText = count;
                    setTimeout(updateCount, speed);
                } else {
                    counter.innerText = target;
                }
            }
            
            updateCount();
        });
    }

    function checkScroll() {
        const section = document.getElementById("percentage-section");
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight && !started) {
            started = true;
            countUp();
        }
    }

    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                document.querySelectorAll(".faq-answer").forEach((item) => {
                    item.style.display = "none";
                });
                answer.style.display = "flex";
            }
        });
    });
});



