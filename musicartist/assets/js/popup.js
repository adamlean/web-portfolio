document.addEventListener("DOMContentLoaded", () => {
  fetch("../../pages/newsletter.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("popup-container").innerHTML = html;

      const modal = document.getElementById("popupModal");
      const closeBtn = document.querySelector(".close");

      setTimeout(() => modal.style.display = "block", 3000);

      closeBtn.onclick = () => modal.style.display = "none";
      window.onclick = e => {
        if (e.target === modal) modal.style.display = "none";
      };
    });
});