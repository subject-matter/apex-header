/**
 * APEX HEADER - Lightweight CDN Component
 * Version: 1.0.0
 *
 * Self-injecting header component with smooth animations.
 * Just include this script and it handles everything.
 */

(function() {
  'use strict';

  // ============================================
  // CONFIGURATION - Edit your menu items here
  // ============================================

  const CONFIG = {
    // Default logo
    logo: {
      src: '//tires.apex-one.us/cdn/shop/files/Apex_A.png?v=1750069331&width=100',
      alt: 'Apex One',
      href: 'https://apex-one.us'
    },

    // Navigation items - each can have an 'activeOn' array of URL patterns
    nav: [
      {
        label: 'APEX ONE',
        href: 'https://apex-one.us',
        submenu: null,
        activeOn: ['apex-one.us'] // Active when URL contains this
      },
      {
        label: 'RACE',
        href: 'https://apex-one.squarespace.com/race',
        submenu: [
          { label: 'MARKETPLACE', href: 'https://apex-one.us/marketplace' }
        ],
        activeOn: ['/race', 'squarespace.com/race', '/marketplace']
      },
      {
        label: 'TEST',
        href: 'https://apex-one.us/test',
        submenu: [
          { label: 'EVENT CALENDAR', href: 'https://apex-one.squarespace.com/test-events' }
        ],
        activeOn: ['/test', 'test-events']
      },
      {
        label: 'TIRES',
        href: 'https://tires.apex-one.us',
        submenu: [
          { label: 'TIRE GUIDEBOOK', href: 'https://tires.apex-one.us/pages/tire-guidebook' }
        ],
        activeOn: ['/tires', 'tire-guidebook', 'tires.apex-one.us']
      }
    ],

    actions: [
      { label: 'ABOUT', href: 'https://apex-one.us/about', type: 'link' },
      { label: 'DOCUMENTS', href: 'https://apex-one.us/documents', type: 'link' },
      { label: 'CONTACT', href: null, type: 'button', action: 'contact' }
    ],

    cart: {
      enabled: true,
      action: 'cart'
    },

    // ============================================
    // URL-BASED RULES
    // ============================================

    rules: {
      // Hide cart icon on these URL patterns
      hideCartOn: [
        'squarespace.com',

      ],

      // Show alternate logo on these URL patterns
        // Each rule: { patterns: ['url-pattern', ...], logo: { src, alt, href }, mobileLogo: { src, alt, href } }
        alternateLogo: [
          {
            pattern: 'tires.apex-one.us',
            logo: {
              src: '//tires.apex-one.us/cdn/shop/files/Apex_A.png?v=1750069331&width=100',
              alt: 'Apex Tires',
              href: 'https://tires.apex-one.us'
            }
          },
          {
            // Endurance logo for race-related pages
            patterns: [
              '/race',
              '/marketplace',
              '/marketplace-form',
              '/accreditation-form',
              '/cota-endurance',
              '/endurance-registration',
              '/sebring-endurance',
              '/tickets',
              '/gallery'
            ],
            logo: {
              src: 'https://static1.squarespace.com/static/67b49f652c87060b45852167/t/67b4bcd645dab014ad0bcd58/1739898070690/Endurance.png',
              alt: 'Apex Endurance',
              href: 'https://apex-one.squarespace.com/race'
            },
            mobileLogo: {
              src: 'https://static1.squarespace.com/static/67b49f652c87060b45852167/t/67b4bcd645dab014ad0bcd58/1739898070690/Endurance.png',
              alt: 'Apex Endurance',
              href: 'https://apex-one.squarespace.com/race'
            }
          }
        ]
    }
  };

  // ============================================
  // URL MATCHING HELPERS
  // ============================================

  function getCurrentUrl() {
    return window.location.href;
  }

  function urlMatches(patterns) {
    if (!patterns || !Array.isArray(patterns)) return false;
    const url = getCurrentUrl().toLowerCase();
    return patterns.some(pattern => url.includes(pattern.toLowerCase()));
  }

  function getActiveLogo(forMobile = false) {
    const rules = CONFIG.rules?.alternateLogo || [];
    const url = getCurrentUrl().toLowerCase();

    for (const rule of rules) {
      let matches = false;

      // Support both single pattern and array of patterns
      if (rule.patterns && Array.isArray(rule.patterns)) {
        matches = rule.patterns.some(p => url.includes(p.toLowerCase()));
      } else if (rule.pattern) {
        matches = url.includes(rule.pattern.toLowerCase());
      }

      if (matches) {
        // Return mobile logo if requested and available, otherwise desktop logo
        if (forMobile && rule.mobileLogo) {
          return rule.mobileLogo;
        }
        return rule.logo;
      }
    }
    return CONFIG.logo;
  }

  function shouldShowCart() {
    const hidePatterns = CONFIG.rules?.hideCartOn || [];
    return !urlMatches(hidePatterns);
  }

  function isNavItemActive(item) {
    return urlMatches(item.activeOn);
  }

  // ============================================
  // HTML TEMPLATES
  // ============================================

  function generateNavItems() {
    return CONFIG.nav.map(item => {
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      const isActive = isNavItemActive(item);
      const activeClass = isActive ? ' is-active' : '';

      const submenuHTML = hasSubmenu ? `
        <div class="apex-header__dropdown">
          ${item.submenu.map(sub => `
            <a href="${sub.href}" class="apex-header__dropdown-link">${sub.label}</a>
          `).join('')}
        </div>
      ` : '';

      return `
        <li class="apex-header__nav-item${activeClass}">
          <a href="${item.href}" class="apex-header__nav-link">${item.label}</a>
          ${submenuHTML}
        </li>
      `;
    }).join('');
  }

  function generateMobileNavItems() {
    return CONFIG.nav.map(item => {
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      const isActive = isNavItemActive(item);
      const activeClass = isActive ? ' is-active' : '';

      if (hasSubmenu) {
        return `
          <li class="apex-mobile-drawer__item${activeClass}">
            <button type="button" class="apex-mobile-drawer__link js-mobile-accordion">
              ${item.label}
              <svg class="apex-mobile-drawer__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div class="apex-mobile-drawer__submenu">
              <a href="${item.href}" class="apex-mobile-drawer__sublink">${item.label} HOME</a>
              ${item.submenu.map(sub => `
                <a href="${sub.href}" class="apex-mobile-drawer__sublink">${sub.label}</a>
              `).join('')}
            </div>
          </li>
        `;
      }

      return `
        <li class="apex-mobile-drawer__item${activeClass}">
          <a href="${item.href}" class="apex-mobile-drawer__link">${item.label}</a>
        </li>
      `;
    }).join('');
  }

  function generateActionLinks(forMobile = false) {
    return CONFIG.actions.map(action => {
      const className = forMobile ? 'apex-mobile-drawer__footer-link' : 'apex-header__action-link';
      const desktopOnly = forMobile ? '' : 'data-desktop-only';
      // Add infodot-btn class to contact button
      const extraClass = action.action === 'contact' ? ' infodot-btn' : '';

      if (action.type === 'button') {
        return `<button type="button" class="${className}${extraClass}" data-action="${action.action}" ${desktopOnly}>${action.label}</button>`;
      }
      return `<a href="${action.href}" class="${className}" ${desktopOnly}>${action.label}</a>`;
    }).join('');
  }

  // Cart icon SVG (reusable)
  const CART_SVG = `
    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0284 4.59541H1.97163C1.82879 4.59252 1.68714 4.6218 1.55715 4.68108C1.42717 4.74036 1.31219 4.82813 1.22073 4.93788C1.12927 5.04763 1.06368 5.17654 1.02881 5.31508C0.993935 5.45362 0.990679 5.59823 1.01928 5.7382L2.06686 10.976C2.11138 11.1943 2.23107 11.3902 2.40508 11.5294C2.57909 11.6686 2.79641 11.7423 3.0192 11.7379H10.9808C11.2036 11.7423 11.4209 11.6686 11.5949 11.5294C11.7689 11.3902 11.8886 11.1943 11.9331 10.976L12.9807 5.7382C13.0093 5.59823 13.0061 5.45362 12.9712 5.31508C12.9363 5.17654 12.8707 5.04763 12.7793 4.93788C12.6878 4.82813 12.5728 4.74036 12.4428 4.68108C12.3129 4.6218 12.1712 4.59252 12.0284 4.59541Z" stroke="#A8A08B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.90469 1.26221L10.8094 4.59535" stroke="#A8A08B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.19063 4.59535L5.09532 1.26221" stroke="#A8A08B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  function generateCartButton() {
    if (!CONFIG.cart.enabled || !shouldShowCart()) return '';
    return `
      <button type="button" class="apex-header__cart js-cart" data-action="${CONFIG.cart.action}" aria-label="Cart">
        ${CART_SVG}
        <span class="apex-header__cart-count js-cart-count">0</span>
      </button>
    `;
  }

  function getHeaderHTML() {
    const desktopLogo = getActiveLogo(false);
    const mobileLogo = getActiveLogo(true);

    return `
    <header class="apex-header">
      <div class="apex-header__container">
        <a href="${desktopLogo.href}" class="apex-header__logo">
          <img src="${desktopLogo.src}" alt="${desktopLogo.alt}">
        </a>
        
        <nav>
          <ul class="apex-header__nav">
            ${generateNavItems()}
          </ul>
        </nav>
        
        <div class="apex-header__actions">
          ${generateActionLinks(false)}
          
          <button type="button" class="apex-header__mobile-toggle js-mobile-toggle" aria-label="Open menu" aria-expanded="false">
            <span class="apex-header__hamburger"></span>
          </button>
          
          ${generateCartButton()}
        </div>
      </div>
    </header>
    
    <div class="apex-mobile-backdrop js-mobile-backdrop"></div>
    
    <div class="apex-mobile-drawer js-mobile-drawer" aria-hidden="true">
      <div class="apex-mobile-drawer__header">
        <a href="${mobileLogo.href}" class="apex-mobile-drawer__logo">
          <img src="${mobileLogo.src}" alt="${mobileLogo.alt}">
        </a>
        <div class="apex-mobile-drawer__header-actions">
          <button type="button" class="apex-mobile-drawer__close js-mobile-close" aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          ${generateCartButton()}
        </div>
      </div>
      
      <nav>
        <ul class="apex-mobile-drawer__nav">
          ${generateMobileNavItems()}
        </ul>
      </nav>
      
      <div class="apex-mobile-drawer__footer">
        ${generateActionLinks(true)}
      </div>
    </div>
    
    <div class="apex-header-spacer"></div>
  `;
  }

  // ============================================
  // CONTROLLER
  // ============================================

  class ApexHeader {
    constructor() {
      this.isDrawerOpen = false;
      this.isHeaderHidden = false;
      this.lastScrollY = 0;
      this.scrollThreshold = 50; // Minimum scroll before hiding
      this.init();
    }

    init() {
      this.injectHTML();
      this.cacheElements();
      this.bindEvents();
      this.setupAccessibility();
      this.setupScrollBehavior();
    }

    injectHTML() {
      // Insert at the beginning of body
      document.body.insertAdjacentHTML('afterbegin', getHeaderHTML());
    }

    cacheElements() {
      this.header = document.querySelector('.apex-header');
      this.mobileToggle = document.querySelector('.js-mobile-toggle');
      this.mobileDrawer = document.querySelector('.js-mobile-drawer');
      this.mobileBackdrop = document.querySelector('.js-mobile-backdrop');
      this.mobileClose = document.querySelector('.js-mobile-close');
      this.accordions = document.querySelectorAll('.js-mobile-accordion');
      this.cartCount = document.querySelectorAll('.js-cart-count');
      this.cartButtons = document.querySelectorAll('.js-cart');
      this.actionButtons = document.querySelectorAll('[data-action]');
    }

    bindEvents() {
      // Mobile menu toggle
      this.mobileToggle?.addEventListener('click', () => this.toggleDrawer());
      this.mobileClose?.addEventListener('click', () => this.closeDrawer());
      this.mobileBackdrop?.addEventListener('click', () => this.closeDrawer());

      // Accordion submenus
      this.accordions.forEach(btn => {
        btn.addEventListener('click', (e) => this.toggleAccordion(e));
      });

      // Close drawer on link click
      this.mobileDrawer?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeDrawer());
      });

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isDrawerOpen) {
          this.closeDrawer();
        }
      });

      // Close on resize to desktop
      window.addEventListener('resize', () => {
        if (window.innerWidth > 989 && this.isDrawerOpen) {
          this.closeDrawer();
        }
      });

      // Action buttons (contact, cart, etc.)
      this.actionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => this.handleAction(e));
      });
    }

    setupAccessibility() {
      // Trap focus in drawer when open
      this.mobileDrawer?.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && this.isDrawerOpen) {
          this.trapFocus(e);
        }
      });
    }

    setupScrollBehavior() {
      let ticking = false;
      
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }

    handleScroll() {
      const currentScrollY = window.scrollY;
      
      // Don't hide if drawer is open
      if (this.isDrawerOpen) {
        this.lastScrollY = currentScrollY;
        return;
      }
      
      // Always show at top of page
      if (currentScrollY < this.scrollThreshold) {
        this.showHeader();
        this.lastScrollY = currentScrollY;
        return;
      }
      
      // Scrolling down - hide header
      if (currentScrollY > this.lastScrollY && currentScrollY > this.scrollThreshold) {
        this.hideHeader();
      }
      // Scrolling up - show header
      else if (currentScrollY < this.lastScrollY) {
        this.showHeader();
      }
      
      this.lastScrollY = currentScrollY;
    }

    hideHeader() {
      if (!this.isHeaderHidden) {
        this.isHeaderHidden = true;
        this.header?.classList.add('is-scrolled-hidden');
      }
    }

    showHeader() {
      if (this.isHeaderHidden) {
        this.isHeaderHidden = false;
        this.header?.classList.remove('is-scrolled-hidden');
      }
    }

    toggleDrawer() {
      if (this.isDrawerOpen) {
        this.closeDrawer();
      } else {
        this.openDrawer();
      }
    }

    openDrawer() {
      this.isDrawerOpen = true;
      this.mobileDrawer?.classList.add('is-open');
      this.mobileBackdrop?.classList.add('is-open');
      this.header?.classList.add('is-hidden');
      document.body.classList.add('apex-menu-open');

      this.mobileToggle?.setAttribute('aria-expanded', 'true');
      this.mobileDrawer?.setAttribute('aria-hidden', 'false');

      // Focus the close button
      setTimeout(() => {
        this.mobileClose?.focus();
      }, 50);
    }

    closeDrawer() {
      this.isDrawerOpen = false;
      this.mobileDrawer?.classList.remove('is-open');
      this.mobileBackdrop?.classList.remove('is-open');
      this.header?.classList.remove('is-hidden');
      document.body.classList.remove('apex-menu-open');

      this.mobileToggle?.setAttribute('aria-expanded', 'false');
      this.mobileDrawer?.setAttribute('aria-hidden', 'true');

      // Return focus to toggle
      this.mobileToggle?.focus();
    }

    toggleAccordion(e) {
      const button = e.currentTarget;
      const item = button.closest('.apex-mobile-drawer__item');
      const isExpanded = item.classList.contains('is-expanded');

      // Close all others
      this.accordions.forEach(btn => {
        btn.closest('.apex-mobile-drawer__item')?.classList.remove('is-expanded');
      });

      // Toggle current
      if (!isExpanded) {
        item.classList.add('is-expanded');
      }
    }

    trapFocus(e) {
      const focusableElements = this.mobileDrawer.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }

    handleAction(e) {
      const action = e.currentTarget.dataset.action;

      // Close drawer if open
      if (this.isDrawerOpen) {
        this.closeDrawer();
      }

      // Dispatch custom event for external handling
      const event = new CustomEvent('apex-header:action', {
        detail: { action },
        bubbles: true
      });
      document.dispatchEvent(event);

      // Log for debugging
      console.log(`Apex Header: "${action}" action triggered`);
    }

    // Public API
    updateCartCount(count) {
      this.cartCount.forEach(el => {
        el.textContent = count;
        el.classList.toggle('has-items', count > 0);
      });
    }

    hideHeader() {
      this.header?.classList.add('is-hidden');
    }

    showHeader() {
      this.header?.classList.remove('is-hidden');
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApexHeader);
  } else {
    initApexHeader();
  }

  function initApexHeader() {
    // Create instance and expose to window
    window.ApexHeader = new ApexHeader();

    // Convenience methods
    window.updateApexCartCount = (count) => window.ApexHeader.updateCartCount(count);
  }

})();

