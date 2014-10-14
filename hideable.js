/*global jQuery*/
/*global document*/
(function ($, d) {
    'use strict';
    $.fn.hideable = function (options) {
        var defaults = {
                beforeHide: {},
                afterHide: {}
            },
            opts = $.extend(defaults, options, {});
        return this.each(function () {
            var $self = $(this);
            $(d).off('mouseup.hideable').on('mouseup.hideable', function (e) {
                if (!$self.is(e.target) && $self.find(e.target).length === 0) {
                    console.log(typeof opts.beforeHide);
                    if(typeof opts.beforeHide === 'function')
                        opts.beforeHide.apply(this, [$self]);
                    $self.hide();
                    if(typeof opts.afterHide === 'function')
                        opts.afterHide.apply(this, [$self]);
                }
            });
        });
    };
}(jQuery, document));
