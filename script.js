(function () {
  
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

      
      console.log('Contact form submitted:', { name, email, message });
      alert(`Thanks, ${name}! Your message was sent (demo).`);
      form.reset();
    });
  }


  const footerP = document.querySelector('footer p');
  if (footerP) {
    footerP.textContent = `© ${new Date().getFullYear()} John Russell`;
  }
})();
