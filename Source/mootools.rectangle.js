/*
---
description: Rectangle class.

license: MIT-style

authors:
- Alxandr

requires:
- core/1.2.4:Class
- core/1.2.4:Element.Dimensions
provides: [Rectangle]

...
*/

var Rectangle = new Class({
    initialize: function (left, top, width, height) {
        var reqNum = function (num) {
            if (Number.from(num) !== null) {
                return Number.from(num);
            }
            return 0;
        };
        this.getLeft = Function.from(reqNum(left));
        this.getTop = Function.from(reqNum(top));
        this.getWidth = Function.from(reqNum(width));
        this.getHeight = Function.from(reqNum(height));
        this.getRight = Function.from(this.getLeft() + this.getWidth());
        this.getBottom = Function.from(this.getTop() + this.getHeight());
        this.getSize = Function.from(this.getWidth() * this.getHeight());
        this.isEmpty = Function.from(this.getSize() === 0);
        if (this.isEmpty()) {
            return Rectangle.Empty;
        }
    },

    getIntersection: function (rect) {
        var a = this, b = rect;
        var x = Math.max(a.getLeft(), b.getLeft());
        var num2 = Math.min(a.getLeft() + a.getWidth(), b.getLeft() + b.getWidth());
        var y = Math.max(a.getTop(), b.getTop());
        var num4 = Math.min(a.getTop() + a.getHeight(), b.getTop() + b.getHeight());
        if ((num2 >= x) && (num4 >= y)) {
            return new Rectangle(x, y, num2 - x, num4 - y);
        }
        return Rectangle.Empty;
    }
});

(function () {
    var empty = new Rectangle(0, 0, 0, 0);
    Rectangle.extend({
        Empty: empty
    });
})();

Element.implement({
    getRectangle: function () {
        var crds = this.getCoordinates();
        return new Rectangle(crds.left, crds.top, crds.width, crds.height);
    }
});