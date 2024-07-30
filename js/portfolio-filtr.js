(() => {
  // Select all filter buttons and portfolio items
  const filterButtons = document.querySelectorAll(".filters__button");
  const portfolioItems = document.querySelectorAll(".projects__item");

  // Add click event listener to each filter button
  filterButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");
      filterPortfolio(filterValue);
    })
  );

  // Function to filter portfolio items
  function filterPortfolio(filterValue) {
    portfolioItems.forEach((item) => {
      const itemType = item.querySelector(".projects__type").textContent.trim();
      // Check if the filterValue is 'all' or matches the itemType
      if (filterValue === "all" || itemType === filterValue) {
        item.style.display = "block"; // Show the item
      } else {
        item.style.display = "none"; // Hide the item
      }
    });
  }
})();
