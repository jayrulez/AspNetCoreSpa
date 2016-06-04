
// Angular 2
import { enableProdMode } from '@angular/core';

// Environment Providers
let PROVIDERS = [];

if (process.env.ENV !== 'Development') {
  // Production
  enableProdMode();
}

//   PROVIDERS = [
//     ...PROVIDERS
//   ];

// } else {
// Development
PROVIDERS = [
  ...PROVIDERS
];

// }


export const ENV_PROVIDERS = [
  ...PROVIDERS
];
