   let timeoutId;

    function showStory() {
      const story = document.getElementById("story");
      const progress = document.getElementById("progress");
      story.style.display = "flex";
      progress.style.width = "0";
      setTimeout(() => {
        progress.style.width = "100%";
      }, 10);
      timeoutId = setTimeout(() => {
        hideStory();
      }, 30000);
    }

    function hideStory() {
      const story = document.getElementById("story");
      const progress = document.getElementById("progress");
      story.style.display = "none";
      progress.style.width = "0";
      clearTimeout(timeoutId);
    }

    document.getElementById("story").addEventListener("click", function (e) {
      if (e.target === this) {
        hideStory();
      }
    });