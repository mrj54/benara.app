function handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username && password) {
        localStorage.setItem('username', username);

        // Add playful animation before redirect
        const form = document.getElementById('loginForm');
        form.style.transform = 'scale(0.95)';
        setTimeout(() => {
          form.style.transform = 'scale(1)';
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 200);
        }, 200);
      }
    }

    // Add subtle rotation animations to shapes
    document.querySelectorAll('.shape').forEach(shape => {
      shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    });


