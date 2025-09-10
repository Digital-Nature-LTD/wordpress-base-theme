# Config
The files in this directory should be added to all themes. You should copy the directory from the Digital Nature theme into your own theme.

These files define the breakpoints and adjust the WordPress spacing in order to make it responsive, at breakpoints to suit this site.

To use this, add the css-variables.scss to your theme

```scss
// theme.scss
@use "../config/css-variables.scss";
...
```

You can also use the **scss** variables in your own `.scss` files, should you need to add consistent responsive
breakpoints throughout the theme

```scss
// your-custom-styles.scss
@use "../config/variables";

@media screen and (max-width: #{variables.$breakpoint-desktop}) {
    // your styles here
    ...
}
```