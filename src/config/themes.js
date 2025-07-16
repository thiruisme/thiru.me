/**
 * Theme Configuration
 * 
 * This file contains all theme definitions in a structured, easy-to-edit format.
 * Each theme is an object with semantic color names mapped to hex values.
 * 
 * To add a new theme:
 * 1. Add a new theme object to the themes export
 * 2. Define all required color properties
 * 3. Add the theme to the themeNames array
 * 
 * To modify colors:
 * 1. Find the theme you want to modify
 * 2. Update the hex values for the desired properties
 * 3. The changes will automatically apply across the site
 */

// Base color palette for easier maintenance
const colorPalettes = {
  emerald: {
    primary: '#1b4d3e',
    secondary: '#2b7a57',
    accent: '#a7f542',
    accentDark: '#5db92c'
  },
  autumn: {
    primary: '#8b4513',
    secondary: '#cd853f',
    accent: '#ff8c00',
    accentDark: '#ff6347'
  },
  beach: {
    primary: '#1e3a8a',
    secondary: '#3b82f6',
    accent: '#fde047',
    accentDark: '#eab308'
  }
};

// Theme definitions with semantic naming
export const themes = {
  default: {
    // Core brand colors
    'emerald-dark': colorPalettes.emerald.primary,
    'emerald-light': colorPalettes.emerald.secondary,
    'emerald-light-rgb': '43, 122, 87',
    'accent-top': colorPalettes.emerald.accent,
    'accent-bot': colorPalettes.emerald.accentDark,
    
    // Navigation colors
    'nav-hover-border': colorPalettes.emerald.accent,
    'nav-inactive-border': colorPalettes.emerald.accentDark,
    'nav-tab-bg': '#dcefd9',
    'nav-tab-active-bg': '#e8f5e9',
    
    // Typography colors
    'text-color': '#222',
    'heading-color': '#0f623b',
    
    // Layout colors
    'footer-bg': '#dcefd9',
    'footer-text': '#225327',
    'shell-bg-light': '#e8f5e9',
    'shell-bg-grid': '#dceedc',
    'body-bg': colorPalettes.emerald.primary,
    'body-grid': '#2B7A57',
    
    // Component colors
    'card-bg': '#f5fff4',
    'card-hover-bg': colorPalettes.emerald.primary,
    'blockquote-bg': '#ffffff',
    'h-card-bg': '#F5FFF4',
    'h-card-pattern': '#e9fae7',
    'mail-form-bg': '#fcf8f3',
    'code-bg': '#efefef',
    'pre-bg': '#111',
    'pre-color': '#d6ffdb',
    'table-header-bg': '#e2f2e3'
  },

  autumn: {
    // Core brand colors
    'emerald-dark': colorPalettes.autumn.primary,
    'emerald-light': colorPalettes.autumn.secondary,
    'emerald-light-rgb': '205, 133, 63',
    'accent-top': colorPalettes.autumn.accent,
    'accent-bot': colorPalettes.autumn.accentDark,
    
    // Navigation colors
    'nav-hover-border': colorPalettes.autumn.accent,
    'nav-inactive-border': colorPalettes.autumn.accentDark,
    'nav-tab-bg': '#ffeaa7',
    'nav-tab-active-bg': '#fff8e1',
    
    // Typography colors
    'text-color': '#2f1b14',
    'heading-color': colorPalettes.autumn.primary,
    
    // Layout colors
    'footer-bg': '#ffeaa7',
    'footer-text': colorPalettes.autumn.primary,
    'shell-bg-light': '#fff8e1',
    'shell-bg-grid': '#f4e4bc',
    'body-bg': colorPalettes.autumn.primary,
    'body-grid': '#d2b48c',
    
    // Component colors
    'card-bg': '#fefcf3',
    'card-hover-bg': colorPalettes.autumn.primary,
    'blockquote-bg': '#fffaf0',
    'h-card-bg': '#fefcf3',
    'h-card-pattern': '#f4e4bc',
    'mail-form-bg': '#fdf6e3',
    'code-bg': '#f5f5dc',
    'pre-bg': '#2f1b14',
    'pre-color': '#ffeaa7',
    'table-header-bg': '#f4e4bc'
  },

  beach: {
    // Core brand colors
    'emerald-dark': colorPalettes.beach.primary,
    'emerald-light': colorPalettes.beach.secondary,
    'emerald-light-rgb': '59, 130, 246',
    'accent-top': colorPalettes.beach.accent,
    'accent-bot': colorPalettes.beach.accentDark,
    
    // Navigation colors (specialized for beach theme)
    'nav-hover-border': '#60a5fa', // Light blue for better UX
    'nav-inactive-border': colorPalettes.beach.secondary,
    'nav-tab-bg': '#e0f2fe',
    'nav-tab-active-bg': '#f0f9ff',
    
    // Typography colors
    'text-color': '#1e293b',
    'heading-color': colorPalettes.beach.primary,
    
    // Layout colors
    'footer-bg': '#e0f2fe',
    'footer-text': colorPalettes.beach.primary,
    'shell-bg-light': '#f0f9ff',
    'shell-bg-grid': '#e0f2fe',
    'body-bg': colorPalettes.beach.primary,
    'body-grid': colorPalettes.beach.secondary,
    
    // Component colors
    'card-bg': '#f8fafc',
    'card-hover-bg': colorPalettes.beach.primary,
    'blockquote-bg': '#ffffff',
    'h-card-bg': '#f8fafc',
    'h-card-pattern': '#e0f2fe',
    'mail-form-bg': '#fffbeb',
    'code-bg': '#f1f5f9',
    'pre-bg': '#1e293b',
    'pre-color': '#e0f2fe',
    'table-header-bg': '#e0f2fe'
  }
};

// Theme metadata for easy management
export const themeNames = ['default', 'autumn', 'beach'];

export const themeMetadata = {
  default: {
    name: 'Default',
    description: 'Emerald green with natural tones',
    icon: '🌿'
  },
  autumn: {
    name: 'Autumn',
    description: 'Warm browns and oranges',
    icon: '🍂'
  },
  beach: {
    name: 'Beach',
    description: 'Deep blue with sunny yellow accents',
    icon: '🏖️'
  }
};

// Helper function to get theme colors
export function getThemeColors(themeName) {
  return themes[themeName] || themes.default;
}

// Helper function to validate theme
export function isValidTheme(themeName) {
  return themeNames.includes(themeName);
}