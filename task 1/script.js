document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling effect for navigation links
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    // Handling newsletter subscription form
    const newsletterForm = document.getElementById('newsletterForm');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulating form submission (you can add your own logic here)
        let emailInput = newsletterForm.querySelector('input[type="email"]');
        let email = emailInput.value.trim();

        if (validateEmail(email)) {
            alert(`Subscribed with email: ${email}`);
            // Clear input after successful submission
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Function to validate email address
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
