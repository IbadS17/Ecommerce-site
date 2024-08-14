document.querySelectorAll(".qty-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".qty-btn").forEach((b) => {
      b.style.backgroundColor = "white";
      b.style.color = "black";
      b.style.borderColor = "#D1D5DB"; // Border color: gray-300
    });
    this.style.backgroundColor = "#fffff"; // Pink color
    this.style.color = "#FF6F91";
    this.style.borderColor = "#FF6F91"; // Pink border
  });
});

//
document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("hidden");
});

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    this.classList.add("hidden");
  }
});

// Remove product item when the "Remove" button is clicked
document.getElementById("remove-item").addEventListener("click", function () {
  // Remove the product item from the DOM
  document.getElementById("product-item").remove();
  // Hide the modal
  document.getElementById("modal").classList.add("hidden");
});

// Open modals when the buttons are clicked
document
  .getElementById("open-size-modal")
  .addEventListener("click", function () {
    document.getElementById("size-modal").classList.remove("hidden");
  });

// Close modals when the close icons are clicked
document
  .getElementById("close-size-modal")
  .addEventListener("click", function () {
    document.getElementById("size-modal").classList.add("hidden");
  });

// Close modals when clicking outside the modal content
document
  .getElementById("size-modal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.add("hidden");
    }
  });
