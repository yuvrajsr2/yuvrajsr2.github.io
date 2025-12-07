  const toggleBtn = document.getElementById("themetoggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      toggleBtn.textContent = "🌙 Dark Mode";
    } else {
      toggleBtn.textContent = "☀ Light Mode";
    }
  });