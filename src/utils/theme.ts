import type { Theme } from '../store/atoms.ts';

export function setTheme(theme: Theme) {
    const root = document.documentElement;

    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
