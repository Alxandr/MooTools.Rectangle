MooTools Rectangle
===========

MooTools rectangle adds functionallity to calculate rectangles and intersection between fictionate
or existing elements on the page.

How to Use
----------

Rectangle is essentially very easy to use, to create a new Rectangle use the new construct.

    #JS
	new Rectangle(/*left*/10, /*top*/10, /*width*/10, /*height*/10);

To get an empty rectangle use the `Rectangle.Empty`-propety. Also, if you try to
create a empty rectangle, it will return the empty rectangle, therefore the following
is true:

    #JS
    new Rectangle(/*left*/10, /*top*/10, /*width*/0, /*height*/0) === Rectangle.Empty;

Another way to check this is to use the `isEmpty()` function on the rectangle-object.

To get a rectangle bouding a dom-element you can do this:

    #JS
    var rect = $(dom_elm).getRectangle();

Documentation
--------------------------

Rectangle supports 8 getters:

 *   `int getLeft()`: Get's the left-most point of the rectangle
 *   `int getRight()`: Get's the right-most point of the rectangle
 *   `int getTop()`: Get's the top-most point of the rectangle
 *   `int getBottom()`: Get's the bottom-most point of the rectangle
 *   `int getHeight()`: Get's the height of the rectangle
 *   `int getWidth()`: Get's the width of the rectangle
 *   `int getSize()`: Get's the size of the rectangle
 *   `bool isEmpty()`: Get's a value spesifying wheater or not the rectangle is empty.

Also, to calculate intersection between 2 rectangles use the `Rectangle getIntersection(Rectangle rect)`-function.

    #JS
    var rectDiv1 = $('div1').getRectangle();
    var rectDiv2 = $('div2').getRectangle();
    if(rectDiv1.getIntersection(rectDiv2).getSize() > 10) {
        alert('more than 10 px overlap!');
    }