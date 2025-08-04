/**
 * Theme Toggle Dialog Behavior
 * Handles positioning and interaction for the theme selection dialog
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeDialog = document.getElementById('theme-dialog');
    const themeChoices = document.querySelectorAll('.theme-choice');
    const colorChoices = document.querySelectorAll('.color-choice');
    const closeButton = document.getElementById('theme-dialog-close');

    if (!themeToggle || !themeDialog) return;

    /**
     * Toggles the visibility of the theme dialog and calculates its position.
     */
    const toggleDialog = () => {
        const isVisible = themeDialog.classList.toggle('show');
        if (isVisible) {
            calculateAndSetDialogPosition();
        }
    };

    /**
     * Shows the theme dialog
     */
    const showDialog = () => {
        themeDialog.classList.add('show');
        calculateAndSetDialogPosition();
    };

    /**
     * Hides the theme dialog
     */
    const hideDialog = () => {
        themeDialog.classList.remove('show');
    };

    /**
     * Calculates the optimal position for the dialog based on the button's location
     * and the viewport size to ensure it stays on screen.
     */
    const calculateAndSetDialogPosition = () => {
        const buttonRect = themeToggle.getBoundingClientRect();
        const dialogRect = themeDialog.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let dialogTop, dialogLeft;
        let transformOrigin = 'top left';

        const margin = -2; // Reduced margin for closer positioning
        const viewportMargin = 30; // Minimum margin from viewport edges to ensure visibility

        // Case 1: Place dialog below the button (preferred)
        if (buttonRect.bottom + dialogRect.height + Math.abs(margin) < viewportHeight) {
            dialogTop = buttonRect.bottom + margin;
            dialogLeft = Math.max(viewportMargin, buttonRect.left - (dialogRect.width / 2) + (buttonRect.width / 2));
            transformOrigin = 'top center';
        }
        // Case 2: Not enough space below, try above the button
        else if (buttonRect.top - dialogRect.height - Math.abs(margin) > 0) {
            dialogTop = buttonRect.top - dialogRect.height - margin;
            dialogLeft = Math.max(viewportMargin, buttonRect.left - (dialogRect.width / 2) + (buttonRect.width / 2));
            transformOrigin = 'bottom center';
        }
        // Case 3: Try to the right of the button
        else if (buttonRect.right + dialogRect.width + Math.abs(margin) < viewportWidth) {
            dialogTop = Math.max(viewportMargin, buttonRect.top - (dialogRect.height / 2) + (buttonRect.height / 2));
            dialogLeft = buttonRect.right + margin;
            transformOrigin = 'center left';
        }
        // Case 4: Try to the left of the button
        else if (buttonRect.left - dialogRect.width - Math.abs(margin) > 0) {
            dialogTop = Math.max(viewportMargin, buttonRect.top - (dialogRect.height / 2) + (buttonRect.height / 2));
            dialogLeft = buttonRect.left - dialogRect.width - margin;
            transformOrigin = 'center right';
        }
        // Fallback: Center it on the screen
        else {
            dialogTop = (viewportHeight - dialogRect.height) / 2;
            dialogLeft = (viewportWidth - dialogRect.width) / 2;
            transformOrigin = 'center';
        }

        // Adjust for viewport boundaries if the calculated position is out of bounds
        dialogTop = Math.max(viewportMargin, Math.min(dialogTop, viewportHeight - dialogRect.height - viewportMargin));
        dialogLeft = Math.max(viewportMargin, Math.min(dialogLeft, viewportWidth - dialogRect.width - viewportMargin));

        // Apply the calculated position and transform origin
        themeDialog.style.top = `${dialogTop}px`;
        themeDialog.style.left = `${dialogLeft}px`;
        themeDialog.style.setProperty('--dialog-transform-origin', transformOrigin);
    };

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the document click listener from firing immediately
        toggleDialog();
    });

    // Event listener for clicks outside the dialog and button
    document.addEventListener('click', (event) => {
        const isClickInsideDialog = themeDialog.contains(event.target);
        const isClickOnButton = themeToggle.contains(event.target);
        
        // If the dialog is visible and the click is not on the button or inside the dialog, hide it.
        if (themeDialog.classList.contains('show') && !isClickInsideDialog && !isClickOnButton) {
            hideDialog();
        }
    });

    // Event listener for the close button
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            hideDialog();
        });
    }

    // Event listeners for theme choices
    themeChoices.forEach(choice => {
        choice.addEventListener('click', (event) => {
            const theme = event.target.getAttribute('data-theme');
            setTheme(theme);
            // Don't close dialog immediately, let user also select color if desired
        });
    });

    // Event listeners for color choices
    colorChoices.forEach(choice => {
        choice.addEventListener('click', (event) => {
            const color = event.target.getAttribute('data-color');
            setColorScheme(color);
            // Don't close dialog immediately, let user make more selections if desired
        });
    });

    // Recalculate position on window resize to maintain responsiveness
    window.addEventListener('resize', () => {
        if (themeDialog.classList.contains('show')) {
            calculateAndSetDialogPosition();
        }
    });

    // Recalculate position on scroll (in case dialog is open while scrolling)
    window.addEventListener('scroll', () => {
        if (themeDialog.classList.contains('show')) {
            calculateAndSetDialogPosition();
        }
    });
});
