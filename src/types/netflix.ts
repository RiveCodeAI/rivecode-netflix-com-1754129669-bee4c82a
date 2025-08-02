export interface Language {
  code: string;
  name: string;
}

export interface NavLink {
  text: string;
  href: string;
}

export interface EmailSignupForm {
  email: string;
  isValid: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  performance: boolean;
  advertising: boolean;
}

export interface FooterLink {
  text: string;
  href: string;
  category: 'help' | 'about' | 'legal' | 'account';
}