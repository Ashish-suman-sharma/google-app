const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#google-search-btn");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});

searchButton.addEventListener("click", function () {
  search();
});

function search() {
  const input = searchInput.value;
  window.location.href =
    "https://cse.google.com/cse?cx=f6f586d5959344ee2&q=" + encodeURIComponent(input);
}