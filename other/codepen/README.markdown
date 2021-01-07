# Vertical/Horizontal responsive sidebar/navbar with ARIA support

A Pen created on CodePen.io. Original URL: [https://codepen.io/fbuireu/pen/JpMJPW](https://codepen.io/fbuireu/pen/JpMJPW).

##Vertical/Horizontal responsive sidebar/navbar with ARIA support

Fully responsive sidebar that behaves as a navigation bar responsively as the window width decreases to become finally a regular bar with hamburger menu, keeping the same menu structure in mobile and desktop displays.  

The HTML uses a two mainly `<section>` (for each display), taking into account as much as possible ARIA's default attributes. It results a nested `<nav>`, `<div>`, `<ul>` and `<li>` structure. 
It's a pity to "dirty" the HTML inlining SVG,  it would be nice to use some kind of framework's macro to beautify it. In any case, the visual result would have been the same.  

Finally, the HTML has been enriched with ARIA attributes and roles to make them accessible for those who have visual diseases or for them who uses screen readers.

The SCSS, it's based in BEM methodology. The responsive structure it does not have much secrecy, it's basically settled in `flex-box` property, making the text appear with the `transform: translate` property. All the menu items, behaves as a button with `transform: scale` in this case.
The loop it's maybe the most complex part, each element of the nested dropdown, increases it's animation's delay to smooth the effect, reverting the appear/disappear order.  

The SVG has a little stroke animation when they are selected or hovered. They are [Flaticon](https://www.flaticon.com) based customized and adapted by me, changing the group shape to simplify them, the `viewbox` and the stroke and fill colors.

Regarding the JS, I've used ECMA 2016 support with jQuery, only adding/removing classes to each element to know when the user open or close some elements. 
For the ARIA, I've used a function which receives the selector and the ARIA attribute what must be toggled between true and false.

- - -

**Acknowledgements:** Gabrielle Wee ([@gabriellewee](https://codepen.io/gabriellewee))  for the [nested dropdown transitions](https://codepen.io/gabriellewee/pen/oWyObX) and James Mellers ([@jamesmellers](https://codepen.io/jamesmellers))  for the [spin animation](https://codepen.io/jamesmellers/pen/XKmyoo).

