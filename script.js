document.addEventListener("DOMContentLoaded", function () {
    // Scroll action when the Hero button is clicked
    const button = document.querySelector('#hero-button');
    button.addEventListener('click', function () {
        const currentScrollPosition = 
            window.pageYOffset || document.documentElement.scrollTop;
        let scrollDistance;

        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 675) {
            // Mobile
            scrollDistance = 830;
        } else if (screenWidth <= 1024) {
            // Tablet
            scrollDistance = 630;
        } else {
            // Desktop
            scrollDistance = 750;
        }

        const targetScrollPosition = currentScrollPosition + scrollDistance;

        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
        });
      });

      // Client side validation email
      const form = document.querySelector('form');
      const emailInput = document.querySelector('#email');
      const emailError = document.querySelector('#email-error');
      const colorError = 'hsl(343, 100%, 58%)';

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailValue = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Oops! That doesn’t look like an email address';
            emailInput.style.border = `1.6px solid ${colorError}`;
        } else {
            emailError.textContent = '';
            emailInput.style.border = '';
            form.reset();
        }
      });
    });
