/**
 * HIEU VU DANG MINH — PREMIUM EDITORIAL ANIMATIONS ENGINE
 * Adds scroll reveal, staggered entrances, counter animations, reading progress bar,
 * and micro-interactions to standalone HTML project case studies.
 */

(function () {
  function initAnimations() {
    // 1. Top Reading Progress Bar
    if (!document.getElementById("reading-progress")) {
      const progressBar = document.createElement("div");
      progressBar.id = "reading-progress";
      document.body.prepend(progressBar);

      const updateProgress = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
      };

      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
    }

    // 2. Select Elements for Scroll Reveal
    const revealSelectors = [
      "section",
      ".hero .inner > div",
      ".hero .orb",
      ".card",
      ".step",
      ".grid > div",
      ".steps > div",
      ".two > div",
      "h2",
      ".lead",
      ".notice",
      ".stat-box",
      ".timeline-item",
      "table",
      "figure",
      ".gallery img",
    ];

    const targets = document.querySelectorAll(revealSelectors.join(", "));

    targets.forEach((el) => {
      // Add staggered delay to child items within grids/steps
      const parent = el.parentElement;
      if (
        parent &&
        (parent.classList.contains("grid") ||
          parent.classList.contains("steps") ||
          parent.classList.contains("two") ||
          parent.children.length > 1)
      ) {
        const siblingIndex = Array.from(parent.children).indexOf(el);
        if (siblingIndex > 0) {
          el.style.transitionDelay = `${Math.min(siblingIndex * 0.08, 0.45)}s`;
        }
      }
      el.classList.add("reveal-item");
    });

    // 3. Intersection Observer for Scroll Reveals
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              // Unobserve once visible for smoother performance
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      targets.forEach((el) => observer.observe(el));
    } else {
      // Fallback for older browsers
      targets.forEach((el) => el.classList.add("is-visible"));
    }

    // 4. Smooth Counter Animation for Key Statistics
    const statSelectors = [".stat", ".stat-value", ".number", ".card .num"];
    const statElements = document.querySelectorAll(statSelectors.join(", "));

    if ("IntersectionObserver" in window && statElements.length > 0) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
              entry.target.dataset.animated = "true";
              animateNumber(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      statElements.forEach((el) => counterObserver.observe(el));
    }

    function animateNumber(element) {
      const originalText = element.innerText.trim();
      const match = originalText.match(/^([^\d]*)(\d+)([^\d]*)$/);
      if (!match) return;

      const prefix = match[1];
      const targetNumber = parseInt(match[2], 10);
      const suffix = match[3];

      if (targetNumber === 0 || targetNumber > 1000000) return;

      const duration = 1200; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function (easeOutQuad)
        const easeProgress = progress * (2 - progress);
        const currentVal = Math.floor(easeProgress * targetNumber);

        element.innerText = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.innerText = originalText; // Restore exact text (formatting, punctuation)
        }
      }

      requestAnimationFrame(update);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnimations);
  } else {
    initAnimations();
  }
})();
