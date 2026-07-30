(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.removeAttribute('data-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    if (isOpen) {
      nav.removeAttribute('data-open');
    } else {
      nav.setAttribute('data-open', 'true');
    }
  });

  // Intercepts click events on nested spans, svgs, or text nodes inside navigation links
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  // Performance Optimization: Synchronizes logic with the 760px CSS framework breakpoint without event thrashing
  const desktopBreakpoint = window.matchMedia('(min-width: 761px)');
  
  const handleBreakpointChange = (event) => {
    if (event.matches) {
      closeMenu();
    }
  };

  try {
    desktopBreakpoint.addEventListener('change', handleBreakpointChange);
  } catch (error) {
    desktopBreakpoint.addListener(handleBreakpointChange); // Legacy fallback fallback support
  }
})();
