// ========================
// DEMOLOMET — MAIN SCRIPT
// ========================

document.addEventListener('DOMContentLoaded', () => {

  // ========================
  // NAVBAR — scroll effect
  // ========================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ========================
  // HAMBURGER MENU
  // ========================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ========================
  // ACTIVE NAV LINK
  // ========================
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    const isHome = (path === '/' || path === '/index.html' || path.endsWith('/demolomet/') || path.endsWith('/demolomet'));
    if (
      (href === '/' || href === '/index.html') && isHome ||
      href !== '/' && href !== '/index.html' && path.includes(href.replace('.html', ''))
    ) {
      link.classList.add('active');
    }
  });

  // ========================
  // HERO WORD CYCLING
  // ========================
  const heroWord = document.getElementById('heroWord');
  if (heroWord) {
    const words = ['Experts', 'Specialists', 'Professionals', 'Contractors', 'Solutions'];
    let current = 0;

    const cycleWord = () => {
      heroWord.classList.add('fade-out');

      setTimeout(() => {
        current = (current + 1) % words.length;
        heroWord.textContent = words[current];
        heroWord.classList.remove('fade-out');
        heroWord.classList.add('fade-in');

        setTimeout(() => {
          heroWord.classList.remove('fade-in');
        }, 400);
      }, 400);
    };

    // Trigger initial fade-in
    heroWord.classList.add('fade-in');
    setTimeout(() => heroWord.classList.remove('fade-in'), 400);

    setInterval(cycleWord, 2800);
  }

  // ========================
  // SCROLL REVEAL
  // ========================
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  }

  // ========================
  // CONTACT FORM
  // ========================
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      let valid = true;

      // Clear previous errors
      form.querySelectorAll('.form-error-msg').forEach(el => {
        el.style.display = 'none';
      });

      // Validate fields
      const fields = [
        { id: 'fieldName', msg: 'errorName', label: 'Name' },
        { id: 'fieldSurname', msg: 'errorSurname', label: 'Surname' },
        { id: 'fieldPhone', msg: 'errorPhone', label: 'Contact number' },
        { id: 'fieldEmail', msg: 'errorEmail', label: 'Email' },
        { id: 'fieldMessage', msg: 'errorMessage', label: 'Message' },
      ];

      fields.forEach(({ id, msg }) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(msg);
        if (!input || !errEl) return;

        const value = input.value.trim();

        if (!value) {
          errEl.textContent = 'This field is required.';
          errEl.style.display = 'block';
          valid = false;
          return;
        }

        if (id === 'fieldEmail') {
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(value)) {
            errEl.textContent = 'Please enter a valid email address.';
            errEl.style.display = 'block';
            valid = false;
          }
        }

        if (id === 'fieldPhone') {
          const phoneRe = /^[\d\s\+\-\(\)]{6,}$/;
          if (!phoneRe.test(value)) {
            errEl.textContent = 'Please enter a valid contact number.';
            errEl.style.display = 'block';
            valid = false;
          }
        }
      });

      if (!valid) {
        e.preventDefault();
        return;
      }

      // For Netlify forms — let it submit naturally if hosted on Netlify
      // For non-Netlify preview, show success message
      if (!window.location.hostname.includes('netlify') && !window.location.hostname.includes('replit.app')) {
        e.preventDefault();
        form.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }
      // On actual Netlify deployment, the form submits normally to Netlify's handler
    });
  }

});
