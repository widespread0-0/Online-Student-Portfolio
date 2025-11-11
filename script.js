(function () {
  // Code to handle the contact form
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

      // To log and show a thank-you message, then reset the form.
      console.log('Contact form submitted:', { name, email, message });
      alert(`Thanks, ${name}! Your message was sent (demo).`);
      form.reset();

  }

  // Dynamic year in footer
  const footerP = document.querySelector('footer p');
  if (footerP) {
    footerP.textContent = `© ${new Date().getFullYear()} John Russell`;
  }
})();
