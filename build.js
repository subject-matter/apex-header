#!/usr/bin/env node

/**
 * Build script for Apex Header
 * Embeds CSS into JS and minifies
 */

const fs = require('fs');
const path = require('path');

console.log('🔨 Building Apex Header...\n');

// Read CSS file
const cssPath = path.join(__dirname, 'src', 'apex-header.css');
const css = fs.readFileSync(cssPath, 'utf8');
console.log('✅ Read CSS file');

// Minify CSS
const minifiedCSS = css
  .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
  .replace(/\s+/g, ' ') // Collapse whitespace
  .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
  .replace(/\s*{\s*/g, '{') // Remove spaces around opening braces
  .replace(/\s*}\s*/g, '}') // Remove spaces around closing braces
  .replace(/\s*:\s*/g, ':') // Remove spaces around colons
  .replace(/\s*,\s*/g, ',') // Remove spaces around commas
  .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
  .trim();

console.log('✅ Minified CSS');

// Read JS file
const jsPath = path.join(__dirname, 'src', 'apex-header.js');
const js = fs.readFileSync(jsPath, 'utf8');
console.log('✅ Read JS file');

// Find where to insert CSS (before CONFIGURATION section)
const cssMarker = '// ============================================\n  // CONFIGURATION';

// Escape the CSS string properly for template literal
const escapedCSS = minifiedCSS
  .replace(/\\/g, '\\\\')  // Escape backslashes
  .replace(/`/g, '\\`')   // Escape backticks
  .replace(/\${/g, '\\${'); // Escape template literal expressions

const cssInsert = `  // ============================================
  // EMBEDDED CSS
  // ============================================

  const APEX_STYLES = \`${escapedCSS}\`;

  // ============================================
  // INJECT STYLES
  // ============================================

  function injectStyles() {
    if (document.getElementById('apex-header-styles')) return;

    // Wait for head to exist
    if (!document.head) {
      const checkHead = setInterval(() => {
        if (document.head) {
          clearInterval(checkHead);
          doInjectStyles();
        }
      }, 10);

      setTimeout(() => {
        clearInterval(checkHead);
        if (document.head) {
          doInjectStyles();
        } else {
          console.error('Apex Header: document.head not found, styles not injected');
        }
      }, 5000);
      return;
    }

    doInjectStyles();
  }

  function doInjectStyles() {
    try {
      if (document.getElementById('apex-header-styles')) return;
      const style = document.createElement('style');
      style.id = 'apex-header-styles';
      style.textContent = APEX_STYLES;
      document.head.appendChild(style);
      console.log('Apex Header: Styles injected successfully');
    } catch (error) {
      console.error('Apex Header: Failed to inject styles', error);
    }
  }

  // Call injectStyles immediately
  injectStyles();

`;

// Insert CSS before CONFIGURATION section
const builtJS = js.replace(cssMarker, cssInsert + cssMarker);

// Write to dist
const distPath = path.join(__dirname, 'dist', 'apex-header.js');
fs.writeFileSync(distPath, builtJS, 'utf8');
console.log('✅ Built dist/apex-header.js');

console.log('\n✨ Build complete! Run "npm run build" to minify.\n');

