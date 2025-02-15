document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Simple validation
    if (!name || !email || !phone || !date || !time) {
        alert("Please fill out all fields.");
        return;
    }

    // Confirmation message
    document.getElementById("confirmation-message").innerHTML = 
        `Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}. We'll contact you at ${phone}.`;

    // Optional: Send email confirmation using EmailJS
    sendEmail(name, email, phone, service, date, time);
});

// Function to send booking details via email (optional)
function sendEmail(name, email, phone, service, date, time) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        phone: phone,
        service: service,
        date: date,
        time: time
    }).then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
            console.log("FAILED...", error);
        }
    );
}
