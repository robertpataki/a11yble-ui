## Tabbed Sections component

This component was built based on UX and accessibility best practices outlined by W3C and Heydon Pickering (Inclusive Components):

- https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
- https://inclusive-components.design/tabbed-interfaces

## Semantics and accessibility

- Ordered list is used for the tablist tabs
- Section elements are used for the tab content sections
- Anchor elements are used for the tabs, which are linked to the corresponding section elements
- ARIA **role** and **label** attributes are used to guide the user's screen reader for enhanced user experience

## Keyboard navigation

- Users can navigate between the tabs using the LEFT and RIGHT arrow keys
- As a best practice, the tab indexes loop - when the user presses LEFT on the first item, the last item is selected, and when the RIGHT key is pressed on the last active item, the first item is selected
- The tabs are auto activated - meaning that keyboard users don't need to manually activate the tab using the ENTER or SPACE keys.
- The DOWN arrow activates the active tab's corresponding tab panel. Using the UP arrow key (or SHIFT+TAB), the user can set the focus on the active tab again.

## Dev notes

- The **ids** and **ARIA attributes** of the tabs, tab panels within the component are auto generated using the component's mandatory `id` prop.
