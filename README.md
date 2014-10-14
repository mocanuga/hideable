hideable
========

Hides a DIV elemtent when not clicked inside it

Usage:

Without callbacks

```
$(function() {
  var div = $('.myHideableDiv');
  $('a.myLink').on('click', function(e) {
    div.show().hideable();
  });
});
```

With callbacks

```
$(function() {
  var div = $('.myHideableDiv');
  $('a.myLink').on('click', function(e) {
    div.show().hideable({
      beforeHide: function() {
        // do some stuff before we hide it
        // can be an ajax request with the modifications made to the contents
        // or whatever
      },
      afterHide: function() {
        // clean up after we hide the element
      }
    });
  });
});
```
