const STORAGE_KEY = 'theme'

export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY)
}

export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
}

export function initTheme() {
  const theme = getStoredTheme() ?? getSystemTheme()
  applyTheme(theme)
}

export function getCurrentTheme() {
  return document.documentElement.dataset.theme || getSystemTheme()
}

export function toggleTheme() {
  const current = getCurrentTheme()
  const next = current === 'dark' ? 'light' : 'dark'
  localStorage.setItem(STORAGE_KEY, next)
  applyTheme(next)
  return next
}
