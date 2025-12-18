/**
 * APEX HEADER - Lightweight CDN Component
 * Version: 1.7.0
 *
 * Self-injecting header component with smooth animations.
 * Just include this script and it handles everything.
 */

(function() {
  'use strict';

    // ============================================
  // EMBEDDED CSS
  // ============================================

  const APEX_STYLES = `:root{--apex-test:#CAF24D;--apex-garage:#6432C8;--apex-race:#FE4F18;--apex-black:#1E1E1E;--apex-gold:#A8A08B;--apex-charcoal:#646464;--apex-grey:#989795;--apex-steel:#E6E6E6;--racing-gold:#DCAB69;--ease-out-expo:cubic-bezier(0.16,1,0.3,1);--ease-out-quart:cubic-bezier(0.25,1,0.5,1);--ease-spring:cubic-bezier(0.32,0.72,0,1);--ease-smooth:cubic-bezier(0.4,0,0.2,1)}.apex-header *,.apex-header *::before,.apex-header *::after,.apex-mobile-drawer *,.apex-mobile-drawer *::before,.apex-mobile-drawer *::after{box-sizing:border-box;margin:0;padding:0}.apex-header{position:fixed;top:0;left:0;right:0;z-index:9000;background-color:transparent;padding:16px 40px 50px 40px;font-family:'acumin-pro-wide',-apple-system,BlinkMacSystemFont,sans-serif;transition:transform 0.4s var(--ease-out-expo),opacity 0.3s ease}.apex-header.is-hidden{transform:translateY(-100%);opacity:0;pointer-events:none}.apex-header.is-scrolled-hidden{transform:translateY(calc(-100% - 20px))}@media screen and (max-width:989px){.apex-header.is-scrolled-hidden{transform:translateY(calc(-100% - 30px))}}.apex-header__container{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;position:relative}.apex-header__logo{flex-shrink:0;justify-self:start;transition:transform 0.3s var(--ease-out-quart),opacity 0.3s ease}.apex-header__logo--desktop{display:block}.apex-header__logo--mobile{display:none}.apex-header__logo img{width:auto;height:50px;object-fit:contain;display:block}.apex-header__logo.is-alternate img{height:55px}.apex-header__nav{display:flex;align-items:center;justify-self:center;background:var(--apex-charcoal);border-radius:35px;padding:10px 15px;gap:8px}.apex-header__nav-item{position:relative;list-style:none}.apex-header__nav-link{display:block;padding:10px 20px;font-size:12px;font-weight:700;letter-spacing:-0.04em;text-transform:uppercase;text-decoration:none;color:#000;border-radius:35px;white-space:nowrap;transition:background-color 0.25s var(--ease-smooth),color 0.25s var(--ease-smooth),transform 0.2s var(--ease-out-quart);width:105px;text-align:center}.apex-header__nav-link:hover{background-color:#fff;color:#1C1C1C}.apex-header__nav-item:nth-child(1) .apex-header__nav-link:hover{background-color:var(--apex-gold);color:#1C1C1C}.apex-header__nav-item:nth-child(2) .apex-header__nav-link:hover{background-color:var(--apex-race);color:#fff}.apex-header__nav-item:nth-child(3) .apex-header__nav-link:hover{background-color:var(--apex-test);color:#1C1C1C}.apex-header__nav-item:nth-child(4) .apex-header__nav-link:hover{background-color:var(--apex-garage);color:#fff}.apex-header__nav-item.is-active:nth-child(1) .apex-header__nav-link{background-color:var(--apex-gold);color:#1C1C1C}.apex-header__nav-item.is-active:nth-child(2) .apex-header__nav-link{background-color:var(--apex-race);color:#fff}.apex-header__nav-item.is-active:nth-child(3) .apex-header__nav-link{background-color:var(--apex-test);color:#1C1C1C}.apex-header__nav-item.is-active:nth-child(4) .apex-header__nav-link{background-color:var(--apex-garage);color:#fff}.apex-header__dropdown{position:absolute;top:calc(100% + 12px);left:50%;min-width:200px;background:#1C1C1C;border-radius:12px;padding:8px;box-shadow:0 4px 24px rgba(0,0,0,0.3),0 0 0 1px rgba(255,255,255,0.05);opacity:0;visibility:hidden;transform:translateX(-50%) translateY(8px) scale(0.96);transform-origin:top center;transition:opacity 0.25s var(--ease-out-expo),transform 0.25s var(--ease-out-expo),visibility 0.25s;pointer-events:none}.apex-header__dropdown::before{content:'';position:absolute;top:-16px;left:0;right:0;height:20px;background:transparent}.apex-header__nav-item:hover .apex-header__dropdown,.apex-header__nav-item:focus-within .apex-header__dropdown{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0) scale(1);pointer-events:auto}.apex-header__dropdown-link{display:block;padding:12px 16px;font-size:12px;font-weight:700;letter-spacing:-0.02em;text-transform:uppercase;text-decoration:none;color:var(--apex-gold);border-radius:8px;transition:background-color 0.2s var(--ease-smooth),color 0.2s var(--ease-smooth);text-align:center;white-space:nowrap;text-align:center}.apex-header__dropdown-link:hover{background:rgba(168,160,139,0.15);color:#fff}.apex-header__nav-item:nth-child(2) .apex-header__dropdown-link:hover{color:var(--apex-race)}.apex-header__nav-item:nth-child(3) .apex-header__dropdown-link:hover{color:var(--apex-test)}.apex-header__nav-item:nth-child(4) .apex-header__dropdown-link:hover{color:var(--apex-garage)}.apex-header__actions{display:flex;gap:24px;align-items:center;justify-self:end}.apex-header__action-link{font-size:12px;font-weight:700;letter-spacing:-0.04em;font-family:'acumin-pro-wide';text-transform:uppercase;text-decoration:none;color:var(--apex-gold);background:none;border:none;cursor:pointer;padding:0;position:relative;transition:color 0.2s var(--ease-smooth);white-space:nowrap}.apex-header__action-link::after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background:var(--apex-gold);transform:scaleX(0);transform-origin:right;transition:transform 0.3s var(--ease-out-expo)}.apex-header__action-link:hover{color:var(--apex-gold)}.apex-header__action-link:hover::after{transform:scaleX(1);transform-origin:left}.apex-header__cart{position:relative;background:none;border:none;cursor:pointer;padding:8px;display:flex;align-items:center;transition:transform 0.2s var(--ease-out-quart)}.apex-header__cart:hover{transform:scale(1.1)}.apex-header__cart svg{width:24px;height:24px}.apex-header__cart-count{position:absolute;top:0;right:0;min-width:18px;height:18px;background:#fff;color:#1C1C1C;font-size:11px;font-weight:700;border-radius:50%;display:flex;align-items:center;justify-content:center;padding:0 4px;transform:scale(0);transition:transform 0.3s var(--ease-spring)}.apex-header__cart-count.has-items{transform:scale(1)}.apex-header__mobile-toggle{display:none;background:none;border:none;cursor:pointer;padding:12px;margin-right:-12px}.apex-header__hamburger{display:block;width:24px;height:2px;background:var(--apex-gold);position:relative;transition:background-color 0.2s ease}.apex-header__hamburger::before,.apex-header__hamburger::after{content:'';position:absolute;left:0;width:24px;height:2px;background:var(--apex-gold);transition:transform 0.3s var(--ease-out-expo)}.apex-header__hamburger::before{top:-8px}.apex-header__hamburger::after{top:8px}.apex-mobile-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:9998;opacity:0;visibility:hidden;transition:opacity 0.4s var(--ease-out-expo),backdrop-filter 0.4s var(--ease-out-expo),visibility 0.4s}.apex-mobile-backdrop.is-open{opacity:1;visibility:visible}.apex-mobile-drawer{position:fixed;top:9px;left:9px;right:9px;background:#5D5D5D;border-radius:30px;z-index:9999;padding:20px;overflow-y:auto;max-height:calc(100vh - 18px);font-family:'acumin-pro-wide',-apple-system,BlinkMacSystemFont,sans-serif;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);opacity:0;visibility:hidden;transform:translateY(-20px) scale(0.98);transform-origin:top center;transition:opacity 0.5s var(--ease-spring),transform 0.5s var(--ease-spring),visibility 0.5s}.apex-mobile-drawer.is-open{opacity:1;visibility:visible;transform:translateY(0) scale(1)}.apex-mobile-drawer__header{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;opacity:0;transform:translateY(-8px)}.apex-mobile-drawer.is-open .apex-mobile-drawer__header{opacity:1;transform:translateY(0);transition:opacity 0.4s var(--ease-spring) 0.05s,transform 0.4s var(--ease-spring) 0.05s}.apex-mobile-drawer__logo{flex-shrink:0}.apex-mobile-drawer__logo img{width:auto;height:40px;object-fit:contain}.apex-mobile-drawer__logo.is-alternate img{height:25px}.apex-mobile-drawer__header-actions{display:flex;align-items:center;gap:12px}.apex-mobile-drawer__close{background:rgba(255,255,255,0.1);border:none;border-radius:50%;cursor:pointer;padding:10px;transition:background-color 0.2s var(--ease-smooth),transform 0.2s var(--ease-out-quart)}.apex-mobile-drawer__close:hover{background:rgba(255,255,255,0.2);transform:scale(1.1)}.apex-mobile-drawer__close:active{transform:scale(0.95)}.apex-mobile-drawer__close svg{width:20px;height:20px;color:var(--apex-gold);display:block}.apex-mobile-drawer__nav{list-style:none}.apex-mobile-drawer__item{opacity:0;transform:translateY(12px)}.apex-mobile-drawer.is-open .apex-mobile-drawer__item{opacity:1;transform:translateY(0);transition:opacity 0.5s var(--ease-spring),transform 0.5s var(--ease-spring)}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(1){transition-delay:0.15s}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(2){transition-delay:0.2s}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(3){transition-delay:0.25s}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(4){transition-delay:0.3s}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(5){transition-delay:0.35s}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(6){transition-delay:0.4s}.apex-mobile-drawer.is-open .apex-mobile-drawer__item:nth-child(7){transition-delay:0.45s}.apex-mobile-drawer__link{display:flex;justify-content:space-between;align-items:center;padding:12px 0;font-size:24px;font-weight:700;line-height:1.15;text-transform:uppercase;text-decoration:none;color:#fff;background:none;border:none;width:100%;cursor:pointer;text-align:left;transition:color 0.2s var(--ease-smooth)}.apex-mobile-drawer__link:hover{color:var(--apex-gold)}.apex-mobile-drawer__arrow{width:20px;height:20px;color:var(--apex-grey);transition:transform 0.3s var(--ease-out-expo)}.apex-mobile-drawer__item.is-expanded .apex-mobile-drawer__arrow{transform:rotate(180deg)}.apex-mobile-drawer__submenu{overflow:hidden;max-height:0;transition:max-height 0.4s var(--ease-out-expo)}.apex-mobile-drawer__item.is-expanded .apex-mobile-drawer__submenu{max-height:300px}.apex-mobile-drawer__sublink{display:block;font-size:14px;font-weight:600;letter-spacing:-0.01em;text-transform:uppercase;text-decoration:none;color:var(--apex-grey);transition:color 0.2s var(--ease-smooth),transform 0.2s var(--ease-out-quart)}.apex-mobile-drawer__sublink:hover{color:#fff;transform:translateX(8px)}.apex-mobile-drawer__footer{margin-top:40px;padding-top:24px;border-top:1px solid rgba(168,160,139,0.15);display:flex;flex-direction:column;gap:8px;opacity:0;transform:translateY(12px)}.apex-mobile-drawer.is-open .apex-mobile-drawer__footer{opacity:1;transform:translateY(0);transition:opacity 0.5s var(--ease-spring) 0.5s,transform 0.5s var(--ease-spring) 0.5s}.apex-mobile-drawer__footer-link{padding:12px 0;font-size:14px;font-weight:700;letter-spacing:-0.02em;text-transform:uppercase;text-decoration:none;color:var(--apex-gold);background:none;border:none;cursor:pointer;text-align:left;transition:color 0.2s var(--ease-smooth)}.apex-mobile-drawer__footer-link:hover{color:#fff}@media screen and (max-width:989px){.apex-header{width:calc(100% - 18px);left:9px;top:9px;padding:0;background-color:#5D5D5D;border-radius:30px}.apex-header__container{display:flex;justify-content:space-between;padding:12px 20px}.apex-header__logo--desktop{display:none}.apex-header__logo--mobile{display:block}.apex-header__logo{width:auto;height:auto}.apex-header__logo img{height:40px}.apex-header__logo.is-alternate img{height:25px}.apex-header__nav,.apex-header__action-link{display:none}.apex-header__actions{gap:8px}.apex-header__mobile-toggle{display:block}}body.apex-menu-open{overflow:hidden}.apex-header-spacer{height:120px}@media screen and (max-width:989px){.apex-header-spacer{height:80px}}@keyframes apex-fade-in-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes apex-scale-in{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}cart-drawer,cart-drawer .drawer,.cart-drawer,.drawer.drawer--right{z-index:9001 !important}cart-drawer .drawer__overlay,.drawer__overlay{z-index:9001 !important}contact-drawer,contact-drawer .drawer{z-index:9001 !important}.apex-contact-drawer{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10001;display:flex;justify-content:flex-end;font-family:acumin-pro-wide,sans-serif;pointer-events:none;visibility:hidden;transition:visibility 0s linear 0.3s}.apex-contact-drawer.is-active{visibility:visible;pointer-events:auto;transition:visibility 0s linear 0s;width:100%}.apex-contact-drawer__overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.3);opacity:0;visibility:hidden;transition:opacity 0.3s ease,visibility 0s linear 0.3s;cursor:pointer}.apex-contact-drawer.is-active .apex-contact-drawer__overlay{opacity:1;visibility:visible;transition:opacity 0.3s ease,visibility 0s linear 0s}.apex-contact-drawer__container{position:relative;width:755px;max-width:755px;background:var(--apex-gold);height:100%;padding:3rem;transform:translateX(100%);transition:transform 0.3s ease;overflow-y:auto}.apex-contact-drawer.is-active .apex-contact-drawer__container{transform:translateX(0)}.apex-contact-drawer__header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3rem}.apex-contact-drawer__heading{color:#000;font-family:acumin-pro-wide,sans-serif;letter-spacing:-.04em;font-size:48px;font-weight:700;margin:0}.apex-contact-drawer__close{background:none;border:none;padding:0;cursor:pointer;color:#000;display:flex;align-items:center;gap:12px;font-family:acumin-pro-wide,sans-serif;font-weight:700;font-size:14px;letter-spacing:-.04em}.apex-contact-drawer__close-icon{width:40px;height:40px;background:#000;border-radius:50%;display:flex;align-items:center;justify-content:center}.apex-contact-drawer__close-icon svg{color:var(--apex-gold)}.apex-contact-drawer__form{display:flex;flex-direction:column;gap:1.5rem}.apex-contact-drawer__field{display:flex;flex-direction:column;gap:0.5rem}.apex-contact-drawer__field label{color:#000;font-family:acumin-pro-wide,sans-serif;letter-spacing:-.04em;font-weight:700;font-size:14px}.apex-contact-drawer__field input,.apex-contact-drawer__field textarea{background:transparent;border:1px solid #000;border-radius:0;padding:0.75rem;color:#000;font-family:acumin-pro-wide,sans-serif;font-size:16px}.apex-contact-drawer__field input:focus,.apex-contact-drawer__field textarea:focus{outline:none;border-color:#000}.apex-contact-drawer__submit{background:#000;color:#fff;border:none;border-radius:100px;padding:0;font-family:acumin-pro-wide,sans-serif;font-weight:700;font-size:14px;letter-spacing:-.04em;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;width:150px;margin-top:2rem}.apex-contact-drawer__submit:hover{background:#fff;color:#000;width:160px}.apex-contact-drawer__submit:hover .apex-contact-drawer__submit-icon{background:#000;color:#fff;transform:translateX(10px)}.apex-contact-drawer__submit:hover .apex-contact-drawer__submit-icon svg{color:#fff}.apex-contact-drawer__submit span{padding:16px 24px}.apex-contact-drawer__submit-icon{width:40px;height:40px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:4px;transition:all 0.2s ease}.apex-contact-drawer__submit-icon svg{color:#000;transform:scale(1.2);transition:all 0.2s ease}.apex-contact-drawer__status{margin-top:1rem;padding:0.75rem;font-family:acumin-pro-wide,sans-serif;font-size:14px;font-weight:600;letter-spacing:-.02em;color:#000;min-height:20px}.apex-contact-drawer__status--success{color:#000;background:rgba(0,0,0,0.05);border-left:3px solid #000}.apex-contact-drawer__status--error{color:#000;background:rgba(0,0,0,0.05);border-left:3px solid #000}.apex-contact-drawer__submit:disabled{opacity:0.6;cursor:not-allowed}.apex-contact-drawer__submit:disabled:hover{width:150px;background:#000;color:#fff}.apex-contact-drawer__submit:disabled:hover .apex-contact-drawer__submit-icon{transform:translateX(0);background:#fff}.apex-contact-drawer__social{display:flex;gap:1rem;margin-top:2rem}.apex-contact-drawer__social-link{color:#000;transition:opacity 0.2s ease}.apex-contact-drawer__social-link:hover{opacity:0.7}@media screen and (max-width:989px){.apex-contact-drawer__container{width:100%;max-width:100%;padding:2rem}.apex-contact-drawer__heading{font-size:36px}}`;

  // ============================================
  // INJECT STYLES
  // ============================================

  function injectStyles() {
    if (document.getElementById('apex-header-styles')) return;
    const style = document.createElement('style');
    style.id = 'apex-header-styles';
    style.textContent = APEX_STYLES;
    document.head.appendChild(style);
  }

  // Call injectStyles immediately
  injectStyles();

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
        submenu: [],
        activeOn: [] // Never show as active
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
      { label: 'MARKETPLACE', href: 'https://apex-one.us/marketplace', type: 'link' },
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
      // Hide header entirely on these domains/URLs (empty = show everywhere)
      hideHeaderOn: [],

      // Exclude from hideHeaderOn (subdomains that SHOULD show header)
      showHeaderOn: [],

      // Only show cart icon on these URL patterns (empty = hidden everywhere except these)
      showCartOn: [
        'tires.apex-one.us'
      ],

      // Show alternate logo on these URL patterns
        // Each rule: { patterns: ['url-pattern', ...], logo: { src, alt, href }, mobileLogo: { src, alt, href } }
        alternateLogo: [
          {
            // Endurance logo for race-related pages (55px desktop, 25px mobile)
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
              src: 'https://static1.squarespace.com/static/67b49f652c87060b45852167/t/67bc57234c893639ae0e3d0e/1740396323782/E-Logo.png',
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
    const hostname = window.location.hostname.toLowerCase();
    return patterns.some(pattern => {
      const p = pattern.toLowerCase();
      // Exact hostname match for domain patterns (no path)
      if (!p.includes('/')) {
        return hostname === p || hostname === 'www.' + p;
      }
      // Path matching for patterns with /
      return url.includes(p);
    });
  }

  function shouldShowHeader() {
    const hidePatterns = CONFIG.rules?.hideHeaderOn || [];
    const showPatterns = CONFIG.rules?.showHeaderOn || [];

    // First check if explicitly shown (subdomains like tires.apex-one.us)
    if (urlMatches(showPatterns)) return true;

    // Then check if should be hidden
    if (urlMatches(hidePatterns)) return false;

    return true;
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
    const showPatterns = CONFIG.rules?.showCartOn || [];
    if (showPatterns.length === 0) return true; // Show everywhere if no patterns defined
    return urlMatches(showPatterns); // Only show on matching URLs
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

      if (action.type === 'button') {
        return `<button type="button" class="${className}" data-action="${action.action}" ${desktopOnly}>${action.label}</button>`;
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

  function isAlternateLogo() {
    const rules = CONFIG.rules?.alternateLogo || [];
    const url = getCurrentUrl().toLowerCase();

    for (const rule of rules) {
      let matches = false;
      if (rule.patterns && Array.isArray(rule.patterns)) {
        matches = rule.patterns.some(p => url.includes(p.toLowerCase()));
      } else if (rule.pattern) {
        matches = url.includes(rule.pattern.toLowerCase());
      }
      if (matches) return true;
    }
    return false;
  }

  function getHeaderHTML() {
    const desktopLogo = getActiveLogo(false);
    const mobileLogo = getActiveLogo(true);
    const alternateClass = isAlternateLogo() ? ' is-alternate' : '';

    return `
    <header class="apex-header">
      <div class="apex-header__container">
        <a href="${desktopLogo.href}" class="apex-header__logo apex-header__logo--desktop${alternateClass}">
          <img src="${desktopLogo.src}" alt="${desktopLogo.alt}">
        </a>
        <a href="${mobileLogo.href}" class="apex-header__logo apex-header__logo--mobile${alternateClass}">
          <img src="${mobileLogo.src}" alt="${mobileLogo.alt}">
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
        <a href="${mobileLogo.href}" class="apex-mobile-drawer__logo${alternateClass}">
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

    <div id="apex-contact-drawer" class="apex-contact-drawer">
      <div class="apex-contact-drawer__overlay"></div>
      <div class="apex-contact-drawer__container">
        <div class="apex-contact-drawer__header">
          <h2 class="apex-contact-drawer__heading">LET'S TALK</h2>
          <button type="button" class="apex-contact-drawer__close" aria-label="Close">
            <span>CLOSE</span>
            <div class="apex-contact-drawer__close-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        <div class="apex-contact-drawer__content">
          <form id="apex-contact-form" class="apex-contact-drawer__form" action="https://formspree.io/f/xeejjnag" method="POST">
            <div class="apex-contact-drawer__field">
              <label for="apex-name">NAME</label>
              <input type="text" id="apex-name" name="name" required>
            </div>

            <div class="apex-contact-drawer__field">
              <label for="apex-phone">PHONE</label>
              <input type="tel" id="apex-phone" name="phone" required>
            </div>

            <div class="apex-contact-drawer__field">
              <label for="apex-email">EMAIL</label>
              <input type="email" id="apex-email" name="email" required>
            </div>

            <div class="apex-contact-drawer__field">
              <label for="apex-team">TEAM</label>
              <input type="text" id="apex-team" name="team" required>
            </div>

            <div class="apex-contact-drawer__field">
              <label for="apex-subject">SUBJECT</label>
              <input type="text" id="apex-subject" name="subject" required>
            </div>

            <div class="apex-contact-drawer__field">
              <label for="apex-message">MESSAGE</label>
              <textarea id="apex-message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" class="apex-contact-drawer__submit" id="apex-contact-form-button">
              <span>SUBMIT</span>
              <div class="apex-contact-drawer__submit-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>

            <p id="apex-contact-form-status" class="apex-contact-drawer__status"></p>

            <div class="apex-contact-drawer__social">
              <a href="#" class="apex-contact-drawer__social-link youtube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" class="apex-contact-drawer__social-link instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  }

  // ============================================
  // CONTACT DRAWER CLASS
  // ============================================

  class ContactDrawer {
    constructor(element) {
      this.element = element;
      this.bindEvents();
    }

    bindEvents() {
      this.closeButton = this.element.querySelector('.apex-contact-drawer__close');
      this.overlay = this.element.querySelector('.apex-contact-drawer__overlay');
      this.form = this.element.querySelector('#apex-contact-form');
      this.status = this.element.querySelector('#apex-contact-form-status');

      if (this.closeButton) {
        this.closeButton.addEventListener('click', () => this.close());
      }

      if (this.overlay) {
        this.overlay.addEventListener('click', (e) => {
          e.preventDefault();
          this.close();
        });
      }

      document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape' && this.isOpen()) {
          this.close();
        }
      });

      if (this.form) {
        this.form.addEventListener('submit', (event) => {
          this.handleSubmit(event);
        });
      }
    }

    async handleSubmit(event) {
      event.preventDefault();

      if (!this.status || !this.form) return;

      // Clear previous status
      this.status.textContent = '';
      this.status.className = 'apex-contact-drawer__status';

      // Get submit button
      const submitButton = this.form.querySelector('#apex-contact-form-button');
      if (!submitButton) return;

      const buttonSpan = submitButton.querySelector('span');
      const originalButtonText = buttonSpan ? buttonSpan.textContent : 'SUBMIT';

      // Disable submit button
      submitButton.disabled = true;
      if (buttonSpan) {
        buttonSpan.textContent = 'SUBMITTING...';
      }

      const data = new FormData(event.target);

      try {
        const response = await fetch(event.target.action, {
          method: event.target.method || 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.status.textContent = 'Thanks for your submission!';
          this.status.className = 'apex-contact-drawer__status apex-contact-drawer__status--success';
          this.form.reset();

          // Hide submit button on success
          if (submitButton) {
            submitButton.style.display = 'none';
          }

          // Close drawer after successful submission
          setTimeout(() => {
            this.close();
          }, 2000);
        } else {
          const responseData = await response.json();
          if (responseData.errors && Array.isArray(responseData.errors)) {
            this.status.textContent = responseData.errors.map(error => error.message || error).join(', ');
          } else {
            this.status.textContent = 'Oops! There was a problem submitting your form';
          }
          this.status.className = 'apex-contact-drawer__status apex-contact-drawer__status--error';
        }
      } catch (error) {
        console.error('Form submission error:', error);
        this.status.textContent = 'Oops! There was a problem submitting your form';
        this.status.className = 'apex-contact-drawer__status apex-contact-drawer__status--error';
      } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        if (buttonSpan) {
          buttonSpan.textContent = originalButtonText;
        }
      }
    }

    open() {
      if (!this.element) {
        console.error('Apex Header: Contact drawer element is null');
        return;
      }
      
      // Show submit button in case it was hidden from a previous submission
      const submitButton = this.form?.querySelector('#apex-contact-form-button');
      if (submitButton) {
        submitButton.style.display = '';
      }
      
      // Clear any previous status messages
      if (this.status) {
        this.status.textContent = '';
        this.status.className = 'apex-contact-drawer__status';
      }
      
      // Ensure element is visible and positioned correctly
      this.element.style.display = 'flex';
      
      // Add active class to trigger slide-in animation
      this.element.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      
      console.log('Apex Header: Contact drawer opened', this.element);
    }

    close() {
      // Remove active class to trigger slide-out animation
      this.element.classList.remove('is-active');

      // Wait for transform transition to complete, then restore body overflow
      setTimeout(() => {
        if (!this.element.classList.contains('is-active')) {
          document.body.style.overflow = '';
        }
      }, 300); // Match transition duration (0.3s)
    }

    isOpen() {
      return this.element.classList.contains('is-active');
    }
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
      this.initContactDrawer();
      this.bindEvents();
      this.setupAccessibility();
      this.setupScrollBehavior();
    }

    initContactDrawer() {
      // Find contact drawer element (should exist after injectHTML)
      this.contactDrawerElement = document.querySelector('#apex-contact-drawer');
      if (this.contactDrawerElement) {
        this.contactDrawer = new ContactDrawer(this.contactDrawerElement);
      } else {
        // Retry after a short delay for Shopify/async loading scenarios
        setTimeout(() => {
          this.contactDrawerElement = document.querySelector('#apex-contact-drawer');
          if (this.contactDrawerElement) {
            this.contactDrawer = new ContactDrawer(this.contactDrawerElement);
          } else {
            console.warn('Apex Header: Contact drawer element not found');
          }
        }, 100);
      }
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
      // Contact drawer will be cached in initContactDrawer
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

      // Close contact drawer if open
      if (this.contactDrawer && this.contactDrawer.isOpen()) {
        this.contactDrawer.close();
      }

      // Close any open Shopify drawers
      const cartDrawer = document.querySelector('cart-drawer');
      if (cartDrawer && typeof cartDrawer.close === 'function') {
        cartDrawer.close();
      }

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
      e.preventDefault();
      const action = e.currentTarget.dataset.action;

      // Close mobile drawer if open
      if (this.isDrawerOpen) {
        this.closeDrawer();
      }

      // Handle cart action - open Shopify cart-drawer
      if (action === 'cart') {
        // Close contact drawer if open
        if (this.contactDrawer && this.contactDrawer.isOpen()) {
          this.contactDrawer.close();
        }

        // Open Shopify cart drawer
        const cartDrawer = document.querySelector('cart-drawer');
        if (cartDrawer && typeof cartDrawer.open === 'function') {
          cartDrawer.open();
        }
      }

      // Handle contact action - open contact drawer
      if (action === 'contact') {
        // Close cart drawer if open
        const cartDrawer = document.querySelector('cart-drawer');
        if (cartDrawer && typeof cartDrawer.close === 'function') {
          cartDrawer.close();
        }

        // Ensure contact drawer element exists and is initialized
        if (!this.contactDrawerElement) {
          this.contactDrawerElement = document.querySelector('#apex-contact-drawer');
          console.log('Apex Header: Contact drawer element found:', this.contactDrawerElement);
        }
        
        if (!this.contactDrawer) {
          if (this.contactDrawerElement) {
            this.contactDrawer = new ContactDrawer(this.contactDrawerElement);
            console.log('Apex Header: Contact drawer initialized');
          } else {
            console.error('Apex Header: Contact drawer element not found in DOM');
            // Try to find it one more time
            const drawerEl = document.querySelector('#apex-contact-drawer');
            if (drawerEl) {
              this.contactDrawerElement = drawerEl;
              this.contactDrawer = new ContactDrawer(drawerEl);
              console.log('Apex Header: Contact drawer found and initialized on retry');
            }
          }
        }

        // Open internal contact drawer
        if (this.contactDrawer) {
          this.contactDrawer.open();
        } else {
          console.error('Apex Header: Contact drawer not initialized. Element:', this.contactDrawerElement);
        }
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
    // Check if header should be shown on this URL
    if (!shouldShowHeader()) {
      console.log('Apex Header: Hidden on this domain');
      return;
    }

    // Create instance and expose to window
    window.ApexHeader = new ApexHeader();

    // Convenience methods
    window.updateApexCartCount = (count) => window.ApexHeader.updateCartCount(count);
  }

})();

