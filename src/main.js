// export default function () {
//   import('./foo.js').then(({ default: foo }) => console.log(foo));
// }

import foo from './foo.js';
export default function () {
  console.log(foo);
}