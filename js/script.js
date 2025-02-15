document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Ensure EmailJS template variables match exactly
    let emailParams = {
        name: name,         // MUST match EmailJS template variable
        email: email,
        phone: phone,
        service: service,
        date: date,
        time: time
    };

    // Send email via EmailJS
    emailjs.send("service_lo04nma", "template_my82eqo", emailParams)
    .then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your booking is confirmed! Check your email.");
        },
        function(error) {
            console.log("FAILED...", error);
            alert("Failed to send confirmation email. Please check console.");
        }
    );
});
