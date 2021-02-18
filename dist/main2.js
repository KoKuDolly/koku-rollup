System.register(['./foo-fcd12692.js'], function (exports) {
  'use strict';
  var foo;
  return {
    setters: [function (module) {
      foo = module.default;
    }],
    execute: function () {

      exports('default', main2);

      function main2 () {
        console.log(foo);
      }

    }
  };
});
