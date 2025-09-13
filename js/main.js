// Initialize LogRocket
(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.lgrckt-in.com/LogRocket.min.js";
  script.crossOrigin = "anonymous";
  script.onload = function () {
    if (window.LogRocket) {
      window.LogRocket.init("6edvct/testing"); // <-- replace with your exact project ID
      console.log("✅ LogRocket initialized");
    }
  };
  document.head.appendChild(script);
})();

// Example interactive features
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded, JS ready ✅");

  // Log when user clicks on links
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      console.log(`User clicked link: ${link.href}`);
      if (window.LogRocket) {
        window.LogRocket.log(`User clicked link: ${link.href}`);
      }
    });
  });

  // Add hover effect on skills table
  const skills = document.querySelectorAll("table tr td:first-child");
  skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
      skill.style.backgroundColor = "#f0f0f0";
    });
    skill.addEventListener("mouseout", () => {
      skill.style.backgroundColor = "";
    });
  });

  // Alert when user opens "My Hobbies"
  const hobbiesLink = document.querySelector('a[href="hobbies.html"]');
  if (hobbiesLink) {
    hobbiesLink.addEventListener("click", () => {
      alert("You’re heading to the hobbies page!");
    });
  }
});
