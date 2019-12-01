# jquery-pick-text

Select and copy text from html element.

## Dependencies

* jquery

## Installation

Install from npm:

    $ npm install @kanety/jquery-pick-text --save

## Usage

```html
<div id="target">sample text</div>
```

```javascript
$('#target').pickText();
```

### Options

Select only:

```javascript
$('#target').pickText({ copy: false });
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
