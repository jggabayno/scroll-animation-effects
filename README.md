# Scroll Animation Effects

## Overview

Transform simple HTML elements into dynamic, scroll-triggered animations. This technique enhances user experience by bringing content to life as they scroll through the page.

## How to Use

Follow these steps to start animating your elements:

1. **Include Required Files:**

   - Add `animateOnScroll.js` to your project.
   - Use either `animateOnScroll.css` or `_animateOnScroll.scss` based on your preference.

2. **Add the `scroll-animate` Attribute:**

   - Apply the `scroll-animate` attribute to any HTML element you want to animate when it scrolls into view.

**Example:**

`<h2 scroll-animate="fadeInBottom .7s animateOnce">Technology Stack</h2>`

**Explanation:**

- **First value** (`fadeInBottom`): Type of animation (e.g., `fadeInBottom`, `fadeInLeft`).
- **Second value** (`.7s`): Duration of the animation (e.g., `.7s` or `1s`).
- **Third value (optional)** (`animateOnce`): Ensures the animation plays only once when the element reaches the viewport.

## When Does the Animation Trigger?

The animation will play when the element **reaches 100vh** in the viewport (the point where the entire element becomes visible).

**Tip:** To see the effect in action, ensure that the element with the scroll-animate attribute appears **after** a content section that fills the screen height (100vh).

## How to Run Using VSCode Live Server

Quickly preview your scroll animations by following these steps:

1. **Open Your Project in VSCode**.
2. **Install Live Server Extension**:

   - Search for **Live Server** in the VSCode extensions marketplace and install it.

3. **Launch Your Project:**

   - Right-click your `index.html` (or relevant HTML file).
   - Select **Open with Live Server**.

   Your project will open in your browser, and you’ll see the scroll animations as you scroll down the page.

## Using VSCode Sass Extension for SCSS Compilation

For those using SCSS, here’s how to compile it into CSS:

1. **Install the Sass Extension for VSCode:**

   - Search for **Sass** in the VSCode marketplace and click **Install**.

2. Compile SCSS Automatically:

   - Open your `animateOnScroll.scss` file.
   - Click **Watch Sass** in the status bar at the bottom of VSCode.

3. **Check the Output:**

   - Your **animateOnScroll.css** will now be available, ready to be included in your project.

This setup ensures a smooth development experience while working with SCSS.

## Conclusion

That’s it! You can now add smooth scroll animations to any of your elements with ease. By following these simple steps, your website will become much more interactive and engaging for your users.
