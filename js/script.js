const newsContainer = document.querySelector("#newsAccordion");
const xhrDriver = new XMLHttpRequest();
const apiKey = "64d7755da5fb49199872ffd41a5c6214";
let source = "bbc-news";
let category = "technology";

const sendingXHR = () => {
  xhrDriver.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
  );
  xhrDriver.addEventListener("readystatechange", () => {
    if (xhrDriver.readyState === 4) {
      let articles = JSON.parse(xhrDriver.responseText)["articles"];
      console.log(articles);
      let news = "";
      articles.forEach((currentArticle, index) => {
        news += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}"
                    aria-expanded="true"
                    aria-controls="collapse${index}"
                >
                    ${currentArticle.description}
                </button>
                </h2>
                <div
                id="collapse${index}"
                class="accordion-collapse collapse"
                aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion"
                >
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is
                        shown by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control
                        the overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                </div>
            </div>
            `;
      });
      newsContainer.innerHTML = news; 
    }
  });
  xhrDriver.send(null);
};
sendingXHR();
