# Digital Nature WordPress base theme

Contains the base theme for Digital Nature site builds.

## Usage
This should be base on which you build your site theme.

### Child theme link
[Child theme docs](https://developer.wordpress.org/themes/advanced-topics/child-themes/)

WordPress insist that you put the parent theme as a 'Template' within your style.css file. Below is an example of a (very) minimal style.css file 


```css
# style.css
/*
Theme Name: Your theme name
...
Template: digital-nature
*/
```

## Contributing
PRs are welcome. Please follow the build process below if you want to make any js/css changes

### Updating versions
Use semantic versioning.

When updating, you will need to make the change in a few places:
- assets/src/package.json
- assets/src/css/frontend/frontend.scss
- also add a git tag for the same version number

### Build process
Navigate to the `assets/src` directory and run build/watch

Note that you will need to run `npm i` first, to install the dependencies

```shell
# navigate to the src directory
cd assets/src

# watch for changes and auto-build
npm run watch

# build for production
npm run build
```