import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  
  { path: 'material/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'home/**',
    renderMode: RenderMode.Server
  },
  { path: '**',
    renderMode: RenderMode.Client
  },
];
