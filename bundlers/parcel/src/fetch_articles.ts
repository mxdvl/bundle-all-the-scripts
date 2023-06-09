// Pros: TypeScript is supported out-of-the-box

fetch("https://content.guardianapis.com/search?q=bundle&api-key=test")
  .then((r) => r.json())
  .then(({ response }) => {
    for (const article of response.results.slice(0, 3)) {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.setAttribute("href", article.webUrl);
      anchor.innerText = article.webTitle;
      li.appendChild(anchor);
      document.querySelector("#articles")?.appendChild(li);
    }
  });
