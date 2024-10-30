// Example to update elements with selectors
document.querySelector('.logo').textContent = "DEKORIOR";
document.querySelector('.hero-text h1').style.color = "#DCAA37";

// Example to add mouse events
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
