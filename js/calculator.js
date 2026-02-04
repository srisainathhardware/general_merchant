// Calculator Logic - Complete Rewrite
document.addEventListener("DOMContentLoaded", function () {
  initializeCalculator();
  setupEventListeners();
  setYear();
});

function initializeCalculator() {
  const categorySelect = document.getElementById("categorySelect");
  const categories = getCategories();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = getCategoryName(category);
    option.style.color = "#000000";
    option.style.backgroundColor = "#ffffff";
    categorySelect.appendChild(option);
  });
}

function setupEventListeners() {
  const categorySelect = document.getElementById("categorySelect");
  const compareBtn = document.getElementById("compareBtn");

  categorySelect.addEventListener("change", function () {
    const selectedText = this.options[this.selectedIndex].text;
    document.getElementById("categoryDisplay").textContent = selectedText;
    handleCategoryChange(this.value);
  });

  compareBtn.addEventListener("click", function (e) {
    e.preventDefault();
    comparePrice();
  });
}

function handleCategoryChange(category) {
  const singleQuantitySection = document.getElementById(
    "singleQuantitySection",
  );
  const multiSizeQuantitySection = document.getElementById(
    "multiSizeQuantitySection",
  );
  const comparisonResult = document.getElementById("comparisonResult");

  // Hide results when category changes
  comparisonResult.classList.remove("show");

  if (category === "steel") {
    // Show multi-size input for TMT bars
    singleQuantitySection.style.display = "none";
    multiSizeQuantitySection.style.display = "block";
    createMultiSizeInputs();
  } else {
    // For other categories, hide both for now
    singleQuantitySection.style.display = "none";
    multiSizeQuantitySection.style.display = "none";
  }
}

function shouldUseMultiSize(productIndex) {
  // Products 0-7 are TMT bars (6mm, 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm)
  return productIndex >= 0 && productIndex <= 7;
}

function createMultiSizeInputs() {
  const multiSizeInputs = document.getElementById("multiSizeInputs");
  const sizes = [
    { label: "6mm", productIndex: 0 },
    { label: "8mm", productIndex: 1 },
    { label: "10mm", productIndex: 2 },
    { label: "12mm", productIndex: 3 },
    { label: "16mm", productIndex: 4 },
    { label: "20mm", productIndex: 5 },
    { label: "25mm", productIndex: 6 },
    { label: "32mm", productIndex: 7 },
  ];

  multiSizeInputs.innerHTML = "";

  sizes.forEach((size, index) => {
    const row = document.createElement("div");
    row.className = "size-row";
    row.innerHTML = `
      <div class="size-label">${size.label}:</div>
      <input type="number" class="size-input" id="size_${index}" data-product-index="${size.productIndex}" value="0" min="0" step="1">
      <div class="size-unit">No. of Bars</div>
    `;
    multiSizeInputs.appendChild(row);

    // Add input event listener for real-time calculation
    const input = row.querySelector(".size-input");
    input.addEventListener("input", recalculatePrices);
  });
}

function recalculatePrices() {
  const categorySelect = document.getElementById("categorySelect");
  const productSelect = document.getElementById("productSelect");
  const comparisonResult = document.getElementById("comparisonResult");
  const multiSizeQuantitySection = document.getElementById(
    "multiSizeQuantitySection",
  );

  if (!comparisonResult.classList.contains("show")) {
    return;
  }

  if (!categorySelect.value || !productSelect.value) {
    return;
  }

  const priceTableBody = document.getElementById("priceTableBody");
  priceTableBody.innerHTML = "";

  // Check if using multi-size input
  if (multiSizeQuantitySection.style.display !== "none") {
    recalculateMultiSize();
  } else {
    recalculateSingleQuantity();
  }
}

function recalculateSingleQuantity() {
  const categorySelect = document.getElementById("categorySelect");
  const productSelect = document.getElementById("productSelect");
  const quantityInput = document.getElementById("quantityInput");
  const priceTableBody = document.getElementById("priceTableBody");

  const quantity = parseFloat(quantityInput.value) || 0;
  const priceData = getPriceComparison(
    categorySelect.value,
    parseInt(productSelect.value),
  );

  if (!priceData) {
    return;
  }

  if (priceData.brands && priceData.brands.length > 0) {
    priceData.brands.forEach((brand) => {
      const numericPrice = extractNumericPrice(brand.price);
      const totalPrice =
        quantity > 0 ? (numericPrice * quantity).toFixed(2) : "0.00";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="company_name">${escapeHtml(brand.company)}</td>
        <td class="price">₹${numericPrice}</td>
        <td style="color: #333; font-weight: 600;">${quantity}</td>
        <td class="price" style="font-size: 19px;">₹${totalPrice}</td>
      `;
      priceTableBody.appendChild(row);
    });
  }
}

function recalculateMultiSize() {
  const priceTableBody = document.getElementById("priceTableBody");
  const sizes = [
    { label: "6mm", productIndex: 0 },
    { label: "8mm", productIndex: 1 },
    { label: "10mm", productIndex: 2 },
    { label: "12mm", productIndex: 3 },
    { label: "16mm", productIndex: 4 },
    { label: "20mm", productIndex: 5 },
    { label: "25mm", productIndex: 6 },
    { label: "32mm", productIndex: 7 },
  ];

  // Get all unique companies across all TMT sizes
  const allCompanies = new Set();
  sizes.forEach((size) => {
    if (size.productIndex >= 0) {
      const priceData = getPriceComparison("steel", size.productIndex);
      if (priceData && priceData.brands) {
        priceData.brands.forEach((brand) => allCompanies.add(brand.company));
      }
    }
  });

  // Calculate total for each company
  const companyTotals = new Map();

  allCompanies.forEach((company) => {
    let grandTotal = 0;
    let detailsHTML = "";

    sizes.forEach((size, index) => {
      const input = document.getElementById(`size_${index}`);
      const quantity = parseFloat(input.value) || 0;

      if (quantity > 0 && size.productIndex >= 0) {
        const priceData = getPriceComparison("steel", size.productIndex);
        if (priceData && priceData.brands) {
          const brandData = priceData.brands.find((b) => b.company === company);
          if (brandData) {
            const pricePerBar = brandData.price;
            const sizeTotal = pricePerBar * quantity;
            grandTotal += sizeTotal;
            detailsHTML += `${size.label}: ${quantity} bars × ₹${pricePerBar}/bar = ₹${sizeTotal.toFixed(2)}<br>`;
          }
        }
      }
    });

    companyTotals.set(company, { total: grandTotal, details: detailsHTML });
  });

  // Display results
  companyTotals.forEach((data, company) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="company_name">${escapeHtml(company)}</td>
      <td colspan="2" style="font-size: 13px; color: #666; line-height: 1.6;">${data.details || "No quantities entered"}</td>
      <td class="price" style="font-size: 20px; font-weight: 800;">₹${data.total.toFixed(2)}</td>
    `;
    priceTableBody.appendChild(row);
  });
}

function comparePrice() {
  const categorySelect = document.getElementById("categorySelect");
  const errorMessage = document.getElementById("errorMessage");
  const comparisonResult = document.getElementById("comparisonResult");
  const priceTableBody = document.getElementById("priceTableBody");
  const productTitle = document.getElementById("productTitle");
  const multiSizeQuantitySection = document.getElementById(
    "multiSizeQuantitySection",
  );

  if (!categorySelect.value) {
    showError("Please select a category");
    return;
  }

  errorMessage.classList.remove("show");

  const category = categorySelect.value;

  // Check if using multi-size input (TMT bars)
  if (
    category === "steel" &&
    multiSizeQuantitySection.style.display !== "none"
  ) {
    productTitle.textContent = "TMT Bars - Multi Size Calculation";
    priceTableBody.innerHTML = "";
    recalculateMultiSize();
  } else {
    showError("Please select Steel & TMT Bars category");
    return;
  }

  comparisonResult.classList.add("show");
  comparisonResult.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "⚠️ " + message;
  errorMessage.classList.add("show");

  setTimeout(() => {
    errorMessage.classList.remove("show");
  }, 5000);
}

// Extract numeric price from price strings like "₹420-440" or "₹65-72 per kg"
function extractNumericPrice(priceValue) {
  if (typeof priceValue === "number") {
    return priceValue;
  }

  if (typeof priceValue === "string") {
    // Remove currency symbol and extract first number
    const numbers = priceValue.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      return parseInt(numbers[0]);
    }
  }

  return 0;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function setYear() {
  document.getElementById("displayYear").textContent = new Date().getFullYear();
}
