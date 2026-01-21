# Hide Storyline Elements Until Available

Ensure that the "Continue" button and "Punishment" text (including titles and images) are completely hidden until the appropriate time during storytelling sequences.

## Proposed Changes

### [CSS Layer]

#### [MODIFY] [style.css](file:///Users/vib/Documents/GitHub/loki/style.css)
- Add `#transition-overlay img` to the list of elements hidden by default in the transition overlay.
- Ensure `#transition-overlay.show-content img` makes the image visible.
- Refine `.punishment-title` and `.punishment-text` to ensure they are strictly hidden until `.show-content` is applied.
- Ensure `.continue-btn` is hidden by default and its "Click to Continue" functionality is only apparent when `.visible` is added.

### [Game Logic Layer]

#### [MODIFY] [index.html](file:///Users/vib/Documents/GitHub/loki/game/index.html)
- Ensure that both `triggerLevelTransition` and `triggerTimeWarp` explicitly reset the visibility of the "Continue" button and the content container before starting the delay.

## Verification Plan

### Manual Verification
1.  **Trigger a Realm Transition**:
    *   Play the game and reach the end of a level (or use the `banana` cheat code).
    *   Verify that the "Entering [Realm]" title, description, bunny image, and "Continue" button are NOT visible for the first 4.5 seconds.
    *   Verify that they all appear together after the delay.
2.  **Trigger a Punishment (Time Warp)**:
    *   Fail a Gatekeeper question (or manually call `triggerTimeWarp()` in console).
    *   Verify that "Your Punishment", the story text, and the "Continue" button are NOT visible for the first 4.5 seconds.
    *   Verify that they all appear together after the delay.
3.  **Check Top of Page**:
    *   Ensure no "Continue" button or "Your Punishment" text is floating at the top of the page during normal gameplay.
