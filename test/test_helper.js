import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiImmutable from 'chai-immutable'
import jsdom from 'jsdom';

chai.use(chaiEnzyme())
chai.use(chaiImmutable)

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
