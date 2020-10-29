import { animate, style, transition, trigger } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    animate(500, style({ opacity: 0 })),
  ]),
]);
