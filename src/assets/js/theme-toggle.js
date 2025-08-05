/**
 * Theme Toggle Dialog Behavior
 * Handles positioning and interaction for the theme selection dialog
 */

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeDialog = document.getElementById("theme-dialog");
  const themeChoices = document.querySelectorAll(".theme-choice");
  const colorChoices = document.querySelectorAll(".color-choice");
  const closeButton = document.getElementById("theme-dialog-close");

  if (!themeToggle || !themeDialog) return;

  /**
   * Toggles the visibility of the theme dialog and calculates its position.
   */
  const toggleDialog = () => {
    const isVisible = themeDialog.classList.toggle("show");
    if (isVisible) {
      calculateAndSetDialogPosition();
    }
  };

  /**
   * Shows the theme dialog
   */
  const showDialog = () => {
    themeDialog.classList.add("show");
    calculateAndSetDialogPosition();
  };

  /**
   * Hides the theme dialog
   */
  const hideDialog = () => {
    themeDialog.classList.remove("show");
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

    let dialogLeft;
    let transformOrigin = "top left";

    const margin = 0;

    // If enough space to the right, place dialog to the right of the button
    if (buttonRect.right + dialogRect.width + margin < viewportWidth) {
      dialogLeft = buttonRect.right + margin;
      transformOrigin = "top left";
    } else if (buttonRect.left - dialogRect.width - margin > 0) {
      // Otherwise, place to the left of the button
      dialogLeft = buttonRect.left - dialogRect.width - margin;
      transformOrigin = "top right";
    } else {
      // Otherwise, align with the button but clamp to viewport
      dialogLeft = Math.max(
        8,
        Math.min(buttonRect.left, viewportWidth - dialogRect.width - 8)
      );
      transformOrigin = "top left";
    }

    // Clamp dialog position so it never overflows horizontally
    dialogLeft = Math.max(
      8,
      Math.min(dialogLeft, viewportWidth - dialogRect.width - 8)
    );

    // Only set the left property
    themeDialog.style.left = `${dialogLeft - buttonRect.width}px`;
    themeDialog.style.top = `${buttonRect.top}px`;
    themeDialog.style.setProperty("--dialog-transform-origin", transformOrigin);
  };

  // Event listener for the theme toggle button
  themeToggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents the document click listener from firing immediately
    toggleDialog();
  });

  // Event listener for clicks outside the dialog and button
  document.addEventListener("click", (event) => {
    const isClickInsideDialog = themeDialog.contains(event.target);
    const isClickOnButton = themeToggle.contains(event.target);

    // If the dialog is visible and the click is not on the button or inside the dialog, hide it.
    if (
      themeDialog.classList.contains("show") &&
      !isClickInsideDialog &&
      !isClickOnButton
    ) {
      hideDialog();
    }
  });

  // Event listener for the close button
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      hideDialog();
    });
  }

  // Event listeners for theme choices
  themeChoices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
      const theme = event.target.getAttribute("data-theme");
      setTheme(theme);
      // Don't close dialog immediately, let user also select color if desired
    });
  });

  // Event listeners for color choices
  colorChoices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
      const color = event.target.getAttribute("data-color");
      setColorScheme(color);
      // Don't close dialog immediately, let user make more selections if desired
    });
  });

  // Recalculate position on window resize to maintain responsiveness
  window.addEventListener("resize", () => {
    if (themeDialog.classList.contains("show")) {
      calculateAndSetDialogPosition();
    }
  });

  // Recalculate position on scroll (in case dialog is open while scrolling)
  window.addEventListener("scroll", () => {
    if (themeDialog.classList.contains("show")) {
      calculateAndSetDialogPosition();
    }
  });
});
