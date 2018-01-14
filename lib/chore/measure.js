const {performance} = require('perf_hooks');

module.exports = function measureExecution (func) {
  const start  = performance.now();
  const result = func();
  const end    = performance.now();

  const response = Object.create(result);

  Object.defineProperty(response, 'timing', {
    value: end - start,
  });

  return response;
};
