// Example to update elements with selectors
const logo = document.querySelector('.logo');
if (logo) {
    console.log("Setting logo text");
    logo.textContent = "DEKORIOR";

    logo.addEventListener('mouseover', function() {
        this.style.color = '#000000';
    });
    logo.addEventListener('mouseout', function() {
        this.style.color = '#255751'; // Default color
    });
}

const heroText = document.querySelector('.hero-text h1');
if (heroText) {
    console.log("Changing hero text color");
    heroText.style.color = "#DCAA37";
}


// Change navbar links color on hover
document.querySelectorAll('.nav-links li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = '#1B4A49';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#787878'; // Default color
    });
});

// Change contact button background color on hover
document.querySelectorAll('.contact-button, .submit-button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#255751';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#DCAA37';
    });
});

// Form submission with success message
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const email = document.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form successfully submitted!');
    }
});


document.querySelector('.footer-content p').style.color = '#5C5C5C';

document.querySelectorAll('.contact label').forEach(function(label) {
    label.style.color = '#255751';
});

document.querySelector('.hero-section').style.backgroundColor = '#f0f0f0';

const videoSectionHeading = document.querySelector('.video-section h3');
if (videoSectionHeading) {
    videoSectionHeading.style.textAlign = 'center';
}

document.querySelector('.about-left h2').style.color = '#DCAA37';

document.querySelectorAll('.about-left p').forEach(function(p) {
    p.style.textAlign = 'justify';
});

document.querySelectorAll('.portfolio-image').forEach(function(img) {
    img.style.border = '2px solid #255751';
});

document.querySelectorAll('.contact input, .contact textarea').forEach(function(input) {
    input.style.backgroundColor = '#f7f7f7';
});
