# Functional Requirements and Notes

Light / Dark mode toggle -- takes system pref by default, but can override with toggle

  - What HTML markup (accessible) -- https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/
  - Use fieldset, legend, radio inputs
  - Switch between light / dark mode via JS
    - prefers-colour-scheme media query -- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  - Three option toggle: light / dark / system pref -- https://cocepen.io.renddrew/pen/bRomab?editors=110

CSS Variables -- https://css-tricks.com/updating-a-css-variable-with-javascript/

Accessibility
  - Use correct headings tags
  - Screenreader-ony text for card titles/username
  - 