(function () {
  // Simple contact form handler (demo)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.name.value || '').trim();
      const email = (form.email.value || '').trim();
      const message = (form.message.value || '').trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Demo behavior: log and show a thank-you message, then reset form.
      console.log('Contact form submitted:', { name, email, message });
      alert(`Thanks, ${name}! Your message was sent (demo).`);
      form.reset();

      // If you add a backend later, replace the demo block with fetch()/XHR to send data.
    });
  }

  // Dynamic year in footer
  const footerP = document.querySelector('footer p');
  if (footerP) {
    footerP.textContent = `© ${new Date().getFullYear()} John Doe`;
  }
})();