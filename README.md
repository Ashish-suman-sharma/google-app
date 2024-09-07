# Google Custom Search Integration

This project integrates **Google Custom Search** to provide a custom search functionality on the webpage. It allows users to search for content using the Google Custom Search API and displays the results in a clean format, along with pagination for navigating through multiple results.

## Features

- **Custom Search Bar**: Users can enter a query in the search bar to retrieve results from Google Custom Search.
- **Real-Time Search**: Trigger searches using the "Enter" key or the search button.
- **Pagination**: Navigate between search results using "Previous" and "Next" buttons.
- **Result Display**: Results are displayed with titles, URLs, and snippets. Each result includes a favicon for the website link.
- **Dynamic UI**: The search bar and results section dynamically update as search queries are made.

## Project Structure

- **Search Functionality**: 
  - The input query is captured from the search bar.
  - The search is triggered either by pressing the **Enter** key or clicking the search button.
  - Results are fetched from the Google Custom Search API using the API key and search engine ID.
  - Results are displayed dynamically, with pagination buttons enabled based on the result count.

- **UI Features**:
  - On searching, the logo and buttons disappear, and the search bar is repositioned for a clean interface.
  - Results are shown with titles, links, descriptions, and corresponding favicons of the result pages.

## How It Works

1. **Search Input**: 
   The user types a query into the search input box and presses **Enter** or clicks the search button.
   
2. **Fetching Data**: 
   The search request is made to the Google Custom Search API, using the provided API key and search engine ID (Custom Search Engine - CX).

3. **Displaying Results**: 
   The results are rendered on the page with details like titles, URLs, and snippets. Each result includes the website's favicon for a better visual experience.

4. **Pagination**: 
   Users can navigate through the search results using the "Previous" and "Next" buttons.

## Code Example

Here is a brief overview of the core functionality:

```javascript
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

async function search() {
  const input = searchInput.value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const cx = 'YOUR_CX_ID'; // Replace with your search engine ID
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(input)}&start=${startIndex}`;

  const response = await fetch(url);
  const data = await response.json();

  hideContentSection();
  displayResults(data.items);
  updatePagination(data.searchInformation.totalResults);
}
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/yourusername/google-custom-search.git](https://github.com/Ashish-suman-sharma/google-app.git)
   ```
   
2. **Add Your API Key**:
   - Replace `'YOUR_API_KEY'` with your Google Custom Search API key.
   - Replace `'YOUR_CX_ID'` with your Custom Search Engine ID.

3. **Open the index.html file** in your browser and test the search functionality.

## Technologies Used

- **HTML/CSS**: For creating the layout and styling.
- **JavaScript**: To handle search queries, results rendering, and pagination.
- **Google Custom Search API**: To fetch search results from Google.

---
