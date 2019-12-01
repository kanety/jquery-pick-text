export function selectedText(elem) {
  let $elem = $(elem)
  let start = $elem.get(0).selectionStart;
  let end = $elem.get(0).selectionEnd;
  return $elem.val().substring(start, end);
}