/*global jQuery*/
/*global document*/
(function ($, d) {
    'use strict';
    $.fn.hideable = function (options) {
        var defaults = {
                beforeHide: {}, // called before we hide the div
                afterHide: {} // called after we hide the div
            },
            opts = $.extend(defaults, options, {});
        return this.each(function () {
            var $self = $(this);
            // we bind to the document mouseup event
            $(d).off('mouseup.hideable').on('mouseup.hideable', function (e) {
                // if the click is not inside our div
                if (!$self.is(e.target) && $self.find(e.target).length === 0) {
                    opts.beforeHide.apply(this, [$self]);
                    $self.hide();
                    opts.afterHide.apply(this, [$self]);
                }
            });
        });
    };
}(jQuery, document));
