import { error } from '@sveltejs/kit';

export function load() {
  // Lanzar 404 para cualquier ruta no existente (catch-all)
  throw error(404, 'Página no encontrada');
}
