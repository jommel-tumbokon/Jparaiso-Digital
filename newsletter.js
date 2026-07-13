// Newsletter
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(newsletterForm);
    try {
      const response = await fetch(newsletterForm.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
      if (response.ok) {
        newsletterForm.reset();
        const successMsg = document.getElementById('newsletter-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => successMsg.style.display = 'none', 4000);
        }
      }
    } catch (error) { console.error('Newsletter error:', error); }
  });
}