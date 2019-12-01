import $ from 'jquery';
import PickText from './pick-text';

$.fn.pickText = function(options) {
  return this.each((i, elem) => {
    new PickText($(elem)).run(options);
  });
};
