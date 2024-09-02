const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#google-search-btn");
const resultsSection = document.querySelector("#results-section");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const searchBar = document.querySelector("#search-bar");
let startIndex = 1;

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    startIndex = 1;
    search();
  }
});

searchButton.addEventListener("click", function () {
  startIndex = 1;
  search();
});

prevBtn.addEventListener("click", function () {
  if (startIndex > 1) {
    startIndex -= 10;
    search();
  }
});

nextBtn.addEventListener("click", function () {
  startIndex += 10;
  search();
});

function hideContentSection() {
  document.querySelector(".logo-img").style.display = "none";
  document.querySelector(".search-btns").style.display = "none";
  searchBar.classList.add("top-margin");
}

async function search() {
  const input = searchInput.value;
  const apiKey = 'AIzaSyAYfTxq5NCv9Z-e-9tAEpoY1OP8C050NKg'; // Replace with your API key
  const cx = 'f6f586d5959344ee2'; // Replace with your search engine ID
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(input)}&start=${startIndex}`;

  const response = await fetch(url);
  const data = await response.json();

  hideContentSection();
  displayResults(data.items);
  updatePagination(data.searchInformation.totalResults);
}

function displayResults(items) {
  resultsSection.innerHTML = ''; // Clear previous results

  if (items && items.length > 0) {
    items.forEach(item => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');

      const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${item.link}`;

      resultItem.innerHTML = `
        <div class="url">
          <img src="${faviconUrl}" class="favicon" alt="favicon" />
          ${item.displayLink}
        </div>
        <h3>
          <a href="${item.link}" target="_blank">${item.title}</a>
        </h3>
        <p>${item.snippet}</p>
      `;
      resultsSection.appendChild(resultItem);
    });
  } else {
    resultsSection.innerHTML = '<p>No results found.</p>';
  }
}

function updatePagination(totalResults) {
  if (startIndex > 1) {
    prevBtn.style.display = 'inline-block';
  } else {
    prevBtn.style.display = 'none';
  }

  if (startIndex + 10 <= totalResults) {
    nextBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'none';
  }
}