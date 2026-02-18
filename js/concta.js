// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validate form
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // WhatsApp integration (optional)
      const whatsappNumber = "212708360169"; // Replace with actual number
      const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${text}`;
      
      // You can either open WhatsApp or send via email service
      // For now, we'll show a success message and reset the form
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
      
      // Uncomment the line below to open WhatsApp instead
      // window.open(url, "_blank");
    });
  }
});
