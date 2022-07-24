# Nicroni-2.0
A web framework for styling your website using actual html classes instead of writing css.

> ## Documentation
> This documentation outlines the usage of the Nicroni-2.0 framework.

## How To Use
<script type="module" src="https://nicroni.herokuapp.com/nicroni/cdn/nicroni.js" crossorigin="anonymous" defer></script>

#### Inside HTML
<elem class="property"></elem>

### Width
- `w-(value)` - a native css width property
- `w-children-(value)` - for applying the weight property to the child elements of the parent

### Height
- `h-(value)` - a native css height property
- `h-children-(value)` - for applying the height property to the child elements of the parent

### Font Size
- `fs-(value)` - a native css font-size property
- `fs-children-(value)` - for applying the font-size property to the child elements of the parent

### Font Weight
- `fw-(value)` - a native css font-weight property
- `fw-children-(value)` - for applying the font-weight property to the child elements of the parent

### Font Style
- `ft-(value)` - a native css font-weight property
- `ft-children-(value)` - for applying the font-style property to the child elements of the parent

### Font Family
> **NB:** When your font-family name has spaces, use the '+'
- `ff-(value)` - a native css font-family property
- `ff-children-(value)` - for applying the font-family property to the child elements of the parent

### Align Content
- `al-(left | center | right)` - a flexbox content alignment property for aligning content horizontally
- `al-children-(left | center | right)` - for applying the flexbox align property to the child elements of the parent

### Padding
- `p-(value)` - a native css padding property
- `p-children-(value)` - for applying the padding property to the child elements of the parent

- `p-(value,value)` - a shorthand native css padding property
- `p-(value,value,value,value)` - a shorthand native css padding property

- `pl-(value)` - a native css padding-left property
- `pl-children-(value)` - for applying the padding-left property to the child elements of the parent

- `pt-(value)` - a native css padding-top property
- `pt-children-(value)` - for applying the padding-top property to the child elements of the parent

- `pr-(value)` - a native css padding-right property
- `pr-children-(value)` - for applying the padding-right property to the child elements of the parent

- `pb-(value)` - a native css padding-bottom property
- `pb-children-(value)` - for applying the padding-bottom property to the child elements of the parent


### Margin
- `m-(value)` - a native css margin property
- `m-children-(value)` - applying the margin property to the child elements of the parent
- `m-(value,value)` - a shorthand native css margin property
- `m-(value,value,value,value)` - a shorthand native css margin property

- `ml-(value)` - a native css margin-left property
- `ml-children-(value)` - for applying the margin-left property to the child elements of the parent

- `mt-(value)` - a native css padding-top property
- `mt-children-(value)` - for applying the margin-top property to the child elements of the parent

- `mr-(value)` - a native css margin-right property
- `mr-children-(value)` - for applying the margin-right property to the child elements of the parent

- `mb-(value)` - a native css margin-bottom property
- `mb-children-(value)` - for applying the margin-bottom property to the child elements of the parent

### Background
- `bg-property-(value)` - a css background property supporting css background properties
- `bg-children-property-(value)` - for applying the background property to the child elements of the parent

#### The Following properties can be used:
- `bg-color-(value)` for background-color
- `bg-image-(value)` for background-image
- `bg-size-(value)` for background-size
- `bg-position-(value)` for background-position
- `bg-repeat-(value)` for background-repeat
- `bg-origin-(value)` for background-origin

### Foreground Color
- `color-(value)` - a native css color property
- `color-children-(value)` - for applying the color property to the child elements of the parent

### Display
- `d-(value)` - a native css display property
- `d-children-(value)` - for applying the display property to the child elements of the parent

### Border Radius
- `br-(value)` - a native css border-radius property
- `br-children-(value)` - for applying the border-radius property to the child elements of the parent

### Border

> **NB:** (use a comma(,) for each property without any spaces in between)

- `border-(value)` - a native css border property 
- `border-children-(value)` - for applying the border property to the child elements of the parent

- `border(l | t | r | b)-(value)` - a native css border property for all the sides, (l)-left, (t)-top, (r)-right, (b)-bottom
- `border(l | t | r | b)-children-(value)` - for applying the border property to the child elements of the parent for all sides, (l)-left, (t)-top, (r)-right, (b)-bottom

### Opacity

- `opacity-(value)` - a native css opacity property
- `opacity-children-(value)` - for applying the opacity property to the child elements of the parent
