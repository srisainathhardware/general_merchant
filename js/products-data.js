// Product Database with Company/Brand Prices
const productsDatabase = {
  // CEMENT PRODUCTS
  cement: {
    category: "Cement",
    products: [
      {
        name: "PPC (Portland Pozzolana Cement)",
        unit: "per bag (50kg)",
        brands: [
          { company: "Ultratech", price: 430 },
          { company: "JSW", price: 420 },
          { company: "Ambuja", price: 425 },
          { company: "Birla Shakthi", price: 420 },
          { company: "Birla A1", price: 440 },
          { company: "Maha", price: 410 },
          { company: "Chettinad", price: 425 },
          { company: "Deccan OPC 53", price: 415 },
        ],
      },
      {
        name: "OPC 43 Grade (Ordinary Portland Cement)",
        brands: [
          { company: "Ultratech", price: "₹420-440" },
          { company: "JSW", price: "₹410-430" },
          { company: "Ambuja", price: "₹415-435" },
          { company: "Birla Shakthi", price: "₹410-430" },
          { company: "Deccan OPC 43", price: "₹405-425" },
        ],
      },
      {
        name: "OPC 53 Grade (High Strength)",
        brands: [
          { company: "Ultratech", price: "₹450-470" },
          { company: "JSW", price: "₹440-460" },
          { company: "Ambuja", price: "₹445-465" },
          { company: "Birla A1", price: "₹460-480" },
          { company: "Deccan OPC 53", price: "₹435-455" },
        ],
      },
      {
        name: "White Cement",
        brands: [
          { company: "Ultratech", price: "₹900-1000" },
          { company: "JSW", price: "₹880-980" },
          { company: "Birla White", price: "₹920-1020" },
        ],
      },
    ],
  },

  // STEEL PRODUCTS
  steel: {
    category: "Steel & TMT Bars",
    products: [
      {
        name: "TMT Bars 6mm",
        unit: "per bar (12m)",
        brands: [
          { company: "TATA 550D", price: 238 },
          { company: "JSW Neosteel", price: 230 },
          { company: "Goel TMT", price: 198 },
          { company: "Radha TMT", price: 191 },
          { company: "MS Life", price: 210 },
        ],
      },
      {
        name: "TMT Bars 8mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 403 },
          { company: "TATA 550D", price: 406 },
          { company: "JSW Neosteel", price: 405 },
          { company: "SEL Tiger", price: 393 },
          { company: "Shree TMT Xtra", price: 339 },
          { company: "Goel TMT", price: 353 },
          { company: "Radha TMT", price: 365 },
          { company: "MS Life", price: 404 },
        ],
      },
      {
        name: "TMT Bars 10mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 618 },
          { company: "TATA 550D", price: 620 },
          { company: "JSW Neosteel", price: 622 },
          { company: "SEL Tiger", price: 599 },
          { company: "Shree TMT Xtra", price: 516 },
          { company: "Goel TMT", price: 547 },
          { company: "Radha TMT", price: 565 },
          { company: "MS Life", price: 617 },
        ],
      },
      {
        name: "TMT Bars 12mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 875 },
          { company: "TATA 550D", price: 875 },
          { company: "JSW Neosteel", price: 869 },
          { company: "SEL Tiger", price: 840 },
          { company: "Shree TMT Xtra", price: 740 },
          { company: "Goel TMT", price: 773 },
          { company: "Radha TMT", price: 797 },
          { company: "MS Life", price: 872 },
        ],
      },
      {
        name: "TMT Bars 16mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 1557 },
          { company: "TATA 550D", price: 1558 },
          { company: "JSW Neosteel", price: 1546 },
          { company: "SEL Tiger", price: 1503 },
          { company: "Shree TMT Xtra", price: 1303 },
          { company: "Goel TMT", price: 1371 },
          { company: "Radha TMT", price: 1426 },
          { company: "MS Life", price: 1554 },
        ],
      },
      {
        name: "TMT Bars 20mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 2433 },
          { company: "TATA 550D", price: 2435 },
          { company: "JSW Neosteel", price: 2418 },
          { company: "SEL Tiger", price: 2348 },
          { company: "Shree TMT Xtra", price: 2078 },
          { company: "Goel TMT", price: 2137 },
          { company: "Radha TMT", price: 2228 },
          { company: "MS Life", price: 2430 },
        ],
      },
      {
        name: "TMT Bars 25mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 3793 },
          { company: "TATA 550D", price: 3795 },
          { company: "JSW Neosteel", price: 3768 },
          { company: "SEL Tiger", price: 3650 },
          { company: "Shree TMT Xtra", price: 3241 },
          { company: "Goel TMT", price: 3303 },
          { company: "Radha TMT", price: 3482 },
          { company: "MS Life", price: 3790 },
        ],
      },
      {
        name: "TMT Bars 32mm",
        unit: "per bar (12m)",
        brands: [
          { company: "Jai Raj Steels", price: 6216 },
          { company: "TATA 550D", price: 6266 },
          { company: "JSW Neosteel", price: 6176 },
          { company: "SEL Tiger", price: 6080 },
          { company: "Shree TMT Xtra", price: 5488 },
          { company: "Goel TMT", price: 5725 },
          { company: "Radha TMT", price: 5840 },
          { company: "MS Life", price: 5800 },
        ],
      },
    ],
  },

  // CC SHEETS
  ccsheets: {
    category: "C.C Sheets (Corrugated Sheets)",
    products: [
      {
        name: "Corrugated Sheets",
        brands: [
          { company: "TATA BLUESCOPE", price: "₹45-55 per sq.ft" },
          { company: "TATA INFINIA", price: "₹48-58 per sq.ft" },
          { company: "KAMDHENU COLOUR MAX", price: "₹42-52 per sq.ft" },
          { company: "JINDHAL SABRANG", price: "₹43-53 per sq.ft" },
          { company: "INDRADHANUSH", price: "₹40-50 per sq.ft" },
        ],
      },
      {
        name: "Pre-Painted Sheets",
        brands: [
          { company: "TATA BLUESCOPE", price: "₹50-60 per sq.ft" },
          { company: "TATA INFINIA", price: "₹53-63 per sq.ft" },
          { company: "KAMDHENU COLOUR MAX", price: "₹47-57 per sq.ft" },
          { company: "JINDHAL SABRANG", price: "₹48-58 per sq.ft" },
        ],
      },
    ],
  },

  // MS PIPES
  pipes: {
    category: "MS Pipes",
    products: [
      {
        name: "MS Pipe ½ inch",
        brands: [
          { company: "TATA Structura", price: "₹55-65 per foot" },
          { company: "MPL", price: "₹50-60 per foot" },
          { company: "APOLLO", price: "₹52-62 per foot" },
          { company: "BLUE LINE ISI", price: "₹51-61 per foot" },
        ],
      },
      {
        name: "MS Pipe ¾ inch",
        brands: [
          { company: "TATA Structura", price: "₹65-75 per foot" },
          { company: "MPL", price: "₹60-70 per foot" },
          { company: "APOLLO", price: "₹62-72 per foot" },
          { company: "BLUE LINE ISI", price: "₹61-71 per foot" },
        ],
      },
      {
        name: "MS Pipe 1 inch",
        brands: [
          { company: "TATA Structura", price: "₹75-85 per foot" },
          { company: "MPL", price: "₹70-80 per foot" },
          { company: "APOLLO", price: "₹72-82 per foot" },
          { company: "BLUE LINE ISI", price: "₹71-81 per foot" },
        ],
      },
    ],
  },

  // BARBED WIRE
  barbedwire: {
    category: "Barbed Wire & Mesh",
    products: [
      {
        name: "Barbed Wire (per coil)",
        brands: [
          { company: "TATA Aayush", price: "₹2500-2800" },
          { company: "BEKART", price: "₹2300-2600" },
          { company: "Local Wire", price: "₹2000-2400" },
        ],
      },
      {
        name: "Mesh/Wire Netting",
        brands: [
          { company: "TATA", price: "₹200-250 per sq.ft" },
          { company: "BEKART", price: "₹180-230 per sq.ft" },
          { company: "Local Mesh", price: "₹150-200 per sq.ft" },
        ],
      },
    ],
  },

  // PLUMBING
  plumbing: {
    category: "Plumbing Materials",
    products: [
      {
        name: "PVC Pipes (per meter)",
        brands: [
          { company: "Finolex", price: "₹45-60" },
          { company: "Supreme", price: "₹42-57" },
          { company: "Ashirwad", price: "₹48-63" },
          { company: "Rinit", price: "₹40-55" },
        ],
      },
      {
        name: "PVC Fittings",
        brands: [
          { company: "Finolex", price: "₹50-150 per piece" },
          { company: "Supreme", price: "₹45-140 per piece" },
          { company: "Ashirwad", price: "₹55-160 per piece" },
        ],
      },
      {
        name: "Brass Fittings",
        brands: [
          { company: "Local Brand", price: "₹80-200 per piece" },
          { company: "Import Quality", price: "₹150-350 per piece" },
        ],
      },
    ],
  },
};

// Get all categories
function getCategories() {
  return Object.keys(productsDatabase);
}

// Get products for a category
function getProductsByCategory(category) {
  return productsDatabase[category] ? productsDatabase[category].products : [];
}

// Get category name
function getCategoryName(category) {
  return productsDatabase[category]
    ? productsDatabase[category].category
    : category;
}

// Get price comparison for a product
function getPriceComparison(category, productIndex) {
  const products = getProductsByCategory(category);
  return products[productIndex] ? products[productIndex] : null;
}
