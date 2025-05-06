document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".neon-header");
  const footer = document.querySelector(".neon-footer");
  const frame = document.querySelector(".neon-frame");
  const notificationBox = document.querySelector(".notification-container");
  const confirmButton = document.querySelector(".glow-button");
  const messageBox = document.querySelector(".message-1");

  let step = 1;

  function toggleAnimation(close) {
    if (close) {
      header.style.transition = "transform 1s ease-in-out";
      footer.style.transition = "transform 1s ease-in-out";
      frame.style.transition =
        "transform 1s ease-in-out, opacity 1s ease-in-out";
      header.style.transform = "translateY(275px)";
      footer.style.transform = "translateY(-275px)";
      frame.style.transform = "scaleY(0)";
      frame.style.opacity = "0";
      setTimeout(() => {
        notificationBox.style.display = "none";
      }, 500);
    } else {
      setTimeout(() => {
        header.style.transform = "translateY(0)";
        footer.style.transform = "translateY(0)";
        frame.style.transform = "scaleY(1)";
        frame.style.opacity = "1";
        setTimeout(() => {
          notificationBox.style.display = "flex";
          notificationBox.style.opacity = "1";
        }, 500);
      }, 1000);
    }
  }

  confirmButton.addEventListener("click", () => {
    const audio = new Audio("beep2.m4a");
    audio.play();

    notificationBox.style.transition = "opacity 2s ease";
    notificationBox.style.opacity = "0";

    setTimeout(() => {
      toggleAnimation(true);
    }, 5);

    setTimeout(() => {
      toggleAnimation(false);

      if (step === 1) {
        const messageContainer2 = document.createElement("div");
        messageContainer2.classList.add("message-2", "compact-message");
        messageContainer2.innerHTML = `
         <p class="mb-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
              </svg>
              <span class="highlight-text">[You're become a Player.]</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                <path stroke="currentColor" stroke-width="1" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
              </svg>
              <span class="important-text">[Daily Quest: <b>Strength Training has arrived.</b>]</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="18" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                <path stroke="currentColor" stroke-width="1" fill="currentColor" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
              </svg>
            </p>
        `;
        messageContainer2.style.opacity = "0";
        messageContainer2.style.transition = "opacity 1.5s ease-in-out";
        messageBox.innerHTML = "";
        messageBox.appendChild(messageContainer2);

        setTimeout(() => {
          messageContainer2.style.opacity = "1";
        }, 200);

        step = 2;
      } else if (step === 2) {
        setTimeout(() => {
          const messageContainer3 = document.createElement("div");
          messageContainer3.classList.add("message-3", "compact-message");
          messageContainer3.innerHTML = `
            <p class="mb-5 text-white">[New Mission Unlocked!]</p>
            <p class="important-text">[Defeat the Training Dummy to test your Strength!]</p>
          `;
          messageContainer3.style.opacity = "0";
          messageContainer3.style.transition = "opacity 1.5s ease-in-out";
          messageBox.innerHTML = "";
          messageBox.appendChild(messageContainer3);

          setTimeout(() => {
            messageContainer3.style.opacity = "1";
          }, 200);
        }, 1000);

        step = 3;
      }
    }, 1000);
  });

  toggleAnimation(false);
});
