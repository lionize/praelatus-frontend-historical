/*
  Configuration file for .png extensions. Allows mocha to understand how to
  handle the file format in component tests.
*/

require.extensions['.png'] = function mochaPngConfig() { return null; }
