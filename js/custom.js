// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(18.5204, 73.8567),  // Pune location coordinates
        zoom: 15,  // Adjusted zoom level for a better view of the city
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


document.addEventListener("DOMContentLoaded", () => {
    const heroArea = document.querySelector(".hero_area");
    setTimeout(() => {
        heroArea.classList.add("active");
    }, 200); // Delay to ensure smooth entry
});


document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll('.service_section .box');
    const viewMoreButton = document.querySelector('.service_section .btn-box');

    // Function to check if the service section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    }

    // Function to handle scroll and trigger animation
    function handleScroll() {
        const serviceSection = document.querySelector('#service');

        // If the service section is in the viewport, trigger animation
        if (isInViewport(serviceSection)) {
            serviceBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('fade-in');
                }, index * 500); // Stagger the animation for each box
            });

            // Fade-in the "View More" button after all boxes
            setTimeout(() => {
                viewMoreButton.classList.add('fade-in');
            }, serviceBoxes.length * 500);
        }
    }

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Trigger animation immediately if already in view on page load
    handleScroll();
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('#about');
    const detailBox = aboutSection.querySelector('.detail-box');
    const imgBox = aboutSection.querySelector('.img-box');

    // Function to check if the About section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Function to handle scroll and trigger animation
    function handleScroll() {
        if (isInViewport(aboutSection)) {
            // Add fade-in class to both boxes
            detailBox.classList.add('fade-in');
            imgBox.classList.add('fade-in');
        }
    }

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Trigger scroll handling on initial page load in case section is already visible
    handleScroll();
});


document.addEventListener("DOMContentLoaded", function () {
    const caseBoxes = document.querySelectorAll('.case_section .box');

    // Function to check if the section is in the viewport at 70% scroll
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Check if 70% of the element is in the viewport
        return (elementTop <= window.innerHeight * 0.7 && elementTop + elementHeight >= window.innerHeight * 0.3);
    }

    // Function to handle scroll and trigger animation
    function handleScroll() {
        const caseSection = document.querySelector('.case_section');

        // If the case section is at 70% scroll, trigger animation
        if (isInViewport(caseSection)) {
            caseBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('fade-in');
                }, index * 500); // Stagger the animation for each box
            });
        }
    }

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Trigger animation immediately if already in view on page load
    handleScroll();
});



