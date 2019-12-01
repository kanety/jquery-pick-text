import { selectedText } from './helper';

describe('jquery-pick-text', () => {
  beforeEach(() => {
    document.body.innerHTML = __html__['index.html'];
    eval($('script').text());
  });

  describe('copy', () => {
    beforeEach(() => {
      spyOn(document, 'execCommand');
    });

    it('copies text', () => {
      $('span.basic').click();
      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });

    it('copies text in input', () => {
      $('input.basic').click();
      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });
  });

  describe('select', () => {
    it('selects text', () => {
      $('span.select').click();
      expect(window.getSelection().toString()).toEqual('sample text 1');
    });

    it('selects text in input', () => {
      $('input.select').click();
      expect(selectedText($('input.select'))).toEqual('sample text 2');
    });
  });
});
