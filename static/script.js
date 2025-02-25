

    // Load navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar-container").innerHTML = data);

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data);
        
 //#DEV: Code for counter       
function startCounter(entries, observer) {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 100;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
        
        observer.disconnect();
    }
        });
    }
    // DEV: code for cards
    document.addEventListener("DOMContentLoaded", function () {
        const cardData = [
            {
                img: "/static/image.jpg",
                title: '"A" Frame',
                description: "One of the most popular designs in the world, our A shape is popular amongst the resorts & farm houses.",
            },
            {
                img: "/static/image.jpg",
                title: "Alpine Villa",
                description: "Something different and dynamic design with options of 1 & 2 BHK suitable for farm houses, holiday homes, etc.",
            },
            {
                img: "/static/image.jpg",
                title: "Barn House",
                description: "Typical barn house concept with option of spacious 1/2/3 BHK suitable for farm houses, holiday homes, resorts etc.",
            },
            {
                img: "/static/image.jpg",
                title: '"A" Frame',
                description: "One of the most popular designs in the world, our A shape is popular amongst the resorts & farm houses.",
            },
            {
                img: "/static/image.jpg",
                title: "Alpine Villa",
                description: "Something different and dynamic design with options of 1 & 2 BHK suitable for farm houses, holiday homes, etc.",
            },
            {
                img: "/static/image.jpg",
                title: "Barn House",
                description: "Typical barn house concept with option of spacious 1/2/3 BHK suitable for farm houses, holiday homes, resorts etc.",
            },
            {
                img: "/static/image.jpg",
                title: "Barn House",
                description: "Typical barn house concept with option of spacious 1/2/3 BHK suitable for farm houses, holiday homes, resorts etc.",
            }
            
        ];
    
        const cardContainer = document.getElementById("card-container");
        cardContainer.classList.add(
            "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3",  // 🔥 3 columns on large screens
            "gap-8",  // Space between cards
            "max-w-full", "mx-auto", "p-6"
        );
    
        cardData.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add(
                "bg-white", "shadow-lg", "rounded-xl", "overflow-hidden",
                "w-full", "h-[600px]", "p-6"  // 🔥 Cards stretch to full width of column
            );
    
            cardElement.innerHTML = `
                <img src="${card.img}" alt="${card.title}" class="w-full h-[80%] object-cover rounded-lg">
                <div class="p-6">
                    <h2 class="text-2xl font-bold mb-1">${card.title}</h2>
                    <p class="text-lg text-gray-700">${card.description}</p>
                </div>
            `;
    
            cardContainer.appendChild(cardElement);
        });
    });
    
//    DEV: code for scrollbar indicator 
document.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    const progressIndicator = document.getElementById("progressIndicator");
    const progressText = document.getElementById("progressText");
    const progressCircle = document.getElementById("progressCircle");

    // Show indicator when scrolling starts
    if (scrollTop > 50) {
        progressIndicator.classList.add("show");
    } else {
        progressIndicator.classList.remove("show");
    }

    // Change text to arrow at 100%
    if (scrollPercentage === 100) {
        progressText.innerHTML = '<i class="fa-solid fa-arrow-up-long arrow"></i>';
    } else {
        progressText.textContent = scrollPercentage + "%";
    }

    // Update progress bar
    const totalLength = 163.36;
    const offset = totalLength - (scrollPercentage / 100) * totalLength;
    progressCircle.style.strokeDashoffset = offset;
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// ########################################################
    
    const observer = new IntersectionObserver(startCounter, { threshold: 0.5 });
    observer.observe(document.querySelector(".bg-black"));    



       // #DEV: for responsive navbar
   const menuBtn = document.getElementById("menuBtn");
   const mobileMenu = document.getElementById("mobileMenu");
   
   menuBtn.addEventListener("click", () => {
       mobileMenu.classList.toggle("hidden");
   });
   