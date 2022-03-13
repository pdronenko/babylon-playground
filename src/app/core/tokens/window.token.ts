import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('An abstraction over global window object', {
  providedIn: 'root',
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    return defaultView as Window;
  },
});
