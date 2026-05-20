// Returns the correct base URL for public assets depending on the environment.
// In production (GitHub Pages) Vite sets import.meta.env.BASE_URL to '/SquareUp/'
// In dev it is '/'
export const base = import.meta.env.BASE_URL

export function img(filename) {
  return `${base}images/${filename}`
}
