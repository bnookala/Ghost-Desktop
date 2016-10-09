/* globals blanket, module */

var options = {
  modulePrefix: 'ghost-desktop',
  filter: '//.*ghost-desktop/.*/',
  antifilter: '//.*(tests|template|electron).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
