// Example to update elements with selectors
document.querySelector('.logo').textContent = "DEKORIOR";
document.querySelector('.hero-text h1').style.color = "#DCAA37";

// Change navbar links color on hover
document.querySelectorAll('.nav-links li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = '#1B4A49';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#787878'; // Default color
    });
});

// Change logo color on hover
document.querySelector('.logo').addEventListener('mouseover', function() {
    this.style.color = '#000000';
});
document.querySelector('.logo').addEventListener('mouseout', function() {
    this.style.color = '#255751'; // Default color
});

// Change contact button background color on hover
document.querySelector('.contact-button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#255751';
});
document.querySelector('.contact-button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#DCAA37';
});

// Example of a basic form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});
