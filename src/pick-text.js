import $ from 'jquery';

export default class PickText {
  constructor(elem) {
    this.$elem = $(elem);
  }

  run({copy = true} = {}) {
    this.select();
    if (copy) this.copy();
  }

  select() {
    if (this.$elem.is(':input')) {
      this.selectInput();
    } else {
      this.selectRange();
    }
  }

  selectInput() {
    let readonly = this.$elem.prop('readonly');
    this.$elem.prop('readonly', false).select().prop('readonly', readonly);
  }

  selectRange() {
    let range = document.createRange();
    range.selectNodeContents(this.$elem.get(0));

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  copy() {
    document.execCommand('copy');
  }
}
