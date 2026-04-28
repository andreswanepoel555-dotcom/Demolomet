// ========================
// DEMOLOMET — MAIN SCRIPT
// ========================

// ========================
// HERO PARTICLES — floating dust / sparks
// ========================
(function initHeroParticles() {
  const canvas = document.querySelector('.hero-particles');
  if (!canvas) return;
  const hero = canvas.closest('.hero');
  if (!hero) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], raf;

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function Particle() {
    this.reset = function() {
      this.x      = Math.random() * W;
      this.y      = H + Math.random() * 80;
      this.r      = Math.random() * 2.2 + 0.4;
      this.vx     = (Math.random() - 0.5) * 0.4;
      this.vy     = Math.random() * 0.7 + 0.25;
      this.maxA   = Math.random() * 0.55 + 0.15;
      this.a      = 0;
      this.life   = 0;
      this.span   = Math.random() * 260 + 140;
      this.warm   = Math.random() > 0.65;
    };
    this.reset();
  }

  function spawn() {
    while (particles.length < 55) particles.push(new Particle());
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    if (Math.random() < 0.25 && particles.length < 55) particles.push(new Particle());

    particles = particles.filter(p => {
      p.life++;
      p.y -= p.vy;
      p.x += p.vx;
      const t = p.life / p.span;
      p.a = p.maxA * (t < 0.15 ? t / 0.15 : t > 0.75 ? 1 - (t - 0.75) / 0.25 : 1);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      if (p.warm) {
        ctx.fillStyle = `rgba(255,140,44,${p.a})`;
      } else {
        ctx.fillStyle = `rgba(255,215,130,${p.a * 0.7})`;
      }
      ctx.fill();

      return p.life < p.span && p.y > -10;
    });

    raf = requestAnimationFrame(tick);
  }

  function stop() { cancelAnimationFrame(raf); }
  function start() { tick(); }

  resize();
  spawn();
  start();

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stop() : start();
  });
})();

document.addEventListener('DOMContentLoaded', () => {

  // ========================
  // NAVBAR — scroll effect
  // ========================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ========================
  // HAMBURGER MENU
  // ========================
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
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
      ((href === '/' || href === '/index.html' || href === 'index.html') && isHome) ||
      (href !== '/' && href !== '/index.html' && href !== 'index.html' && path.includes(href.replace('.html', '')))
    ) {
      link.classList.add('active');
    }
  });

  // ========================
  // HERO WORD CYCLING
  // ========================
  const heroWord = document.getElementById('heroWord');
  if (heroWord) {
    const words   = ['Experts', 'Specialists', 'Contractors', 'Solutions'];
    let current   = 0;
    let timer     = null;

    const cycleWord = () => {
      heroWord.classList.add('fade-out');
      setTimeout(() => {
        current = (current + 1) % words.length;
        heroWord.textContent = words[current];
        heroWord.classList.remove('fade-out');
        heroWord.classList.add('fade-in');
        setTimeout(() => heroWord.classList.remove('fade-in'), 380);
      }, 360);
    };

    // Don't start until hero animation has run
    setTimeout(() => {
      heroWord.classList.add('fade-in');
      setTimeout(() => heroWord.classList.remove('fade-in'), 380);
      timer = setInterval(cycleWord, 3000);
    }, 1200);

    // Pause cycle when tab is hidden (performance)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        timer = setInterval(cycleWord, 3000);
      }
    });
  }

  // ========================
  // STATS COUNT-UP
  // ========================
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.floor(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));
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
      threshold: 0.1,
      rootMargin: '0px 0px -48px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  }

  // ========================
  // CONTACT FORM
  // ========================
  const form        = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      let valid = true;

      form.querySelectorAll('.form-error-msg').forEach(el => {
        el.style.display = 'none';
      });

      const fields = [
        { id: 'fieldName',    msg: 'errorName',    type: 'text'  },
        { id: 'fieldSurname', msg: 'errorSurname', type: 'text'  },
        { id: 'fieldPhone',   msg: 'errorPhone',   type: 'phone' },
        { id: 'fieldEmail',   msg: 'errorEmail',   type: 'email' },
        { id: 'fieldMessage', msg: 'errorMessage', type: 'text'  },
      ];

      fields.forEach(({ id, msg, type }) => {
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

        if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errEl.textContent = 'Please enter a valid email address.';
          errEl.style.display = 'block';
          valid = false;
        }

        if (type === 'phone' && !/^[\d\s\+\-\(\)]{6,}$/.test(value)) {
          errEl.textContent = 'Please enter a valid contact number.';
          errEl.style.display = 'block';
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        return;
      }

      // On live Netlify — submit naturally. In preview — show success UI.
      const isLive = window.location.hostname.includes('netlify') ||
                     window.location.hostname.includes('replit.app');
      if (!isLive) {
        e.preventDefault();
        form.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }
    });
  }

});
