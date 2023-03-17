// Pros: we can use top-level await
// Cons: we need to `export {}`

const { response } = await fetch(
  "https://content.guardianapis.com/search?q=bundle&api-key=test",
)
  .then((r) => r.json());

for (const article of response.results) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", article.webUrl);
  anchor.innerText = article.webTitle;
  li.appendChild(anchor);
  document.querySelector("#articles")?.appendChild(li);
}

export {};
