document.addEventListener("DOMContentLoaded", () => {
  const contentEl = document.getElementById("content");

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pageUrl = link.getAttribute("data-page");

      // Если кликнули "Главная" — возвращаем из файла или оставляем текущий
      if (pageUrl === "index.html") {
        fetch(pageUrl)
          .then(res => res.text())
          .then(html => fadeContent(html));
      } else {
        fetch(pageUrl)
          .then(res => res.text())
          .then(html => fadeContent(html))
          .catch(() => {
            contentEl.innerHTML = "<p>Ошибка загрузки страницы.</p>";
          });
      }

      history.pushState({ page: pageUrl }, "", "#" + pageUrl);
    });
  });

  window.addEventListener("popstate", e => {
    if (e.state && e.state.page) {
      fetch(e.state.page)
        .then(res => res.text())
        .then(html => fadeContent(html));
    }
  });

  function fadeContent(html) {
    contentEl.style.opacity = 0;
    setTimeout(() => {
      contentEl.innerHTML = html;
      contentEl.style.opacity = 1;
    }, 200);
  }
});
