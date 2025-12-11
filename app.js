// Get DOM elements
const propertiesGrid = document.getElementById('propertiesGrid');
const noResults = document.getElementById('noResults');
const applyFiltersBtn = document.getElementById('applyFilters');

// Get filter elements
const locationFilter = document.getElementById('location');
const propertyTypeFilter = document.getElementById('propertyType');
const bedroomsFilter = document.getElementById('bedrooms');
const minPriceFilter = document.getElementById('minPrice');
const maxPriceFilter = document.getElementById('maxPrice');

// Store current filtered properties
let filteredProperties = [...properties];

// Function to render property cards
function renderProperties(propertiesToRender) {
  // Clear the grid
  propertiesGrid.innerHTML = '';

  // Check if there are properties to display
  if (propertiesToRender.length === 0) {
    noResults.style.display = 'block';
    return;
  } else {
    noResults.style.display = 'none';
  }

  // Create and append property cards
  propertiesToRender.forEach(property => {
    const propertyCard = createPropertyCard(property);
    propertiesGrid.innerHTML += propertyCard;
  });
}

// Function to create a property card HTML
function createPropertyCard(property) {
  return `
    <div class="property-card">
      <img src="${property.image}" alt="${property.title}" class="property-image">
      <div class="property-info">
        <h3 class="property-title">${property.title}</h3>
        <p class="property-location">📍 ${property.location}</p>
        <div class="property-details">
          <span>🛏️ ${property.bedrooms} BHK</span>
          <span>🏠 ${property.type}</span>
          <span>📐 ${property.area} sqft</span>
        </div>
        <p class="property-price">₹${property.price.toLocaleString('en-IN')}</p>
        <a href="property.html?id=${property.id}" class="btn btn-primary">View Details</a>
      </div>
    </div>
  `;
}

// Function to filter properties based on selected criteria
function filterProperties() {
  // Get filter values
  const location = locationFilter.value;
  const propertyType = propertyTypeFilter.value;
  const bedrooms = bedroomsFilter.value;
  const minPrice = minPriceFilter.value ? parseInt(minPriceFilter.value) : 0;
  const maxPrice = maxPriceFilter.value ? parseInt(maxPriceFilter.value) : Infinity;

  // Apply filters
  filteredProperties = properties.filter(property => {
    // Location filter
    if (location && property.location !== location) {
      return false;
    }

    // Property type filter
    if (propertyType && property.type !== propertyType) {
      return false;
    }

    // Bedrooms filter
    if (bedrooms) {
      const bedroomCount = parseInt(bedrooms);
      if (bedroomCount === 5) {
        // 5+ bedrooms
        if (property.bedrooms < 5) {
          return false;
        }
      } else {
        if (property.bedrooms !== bedroomCount) {
          return false;
        }
      }
    }

    // Price range filter
    if (property.price < minPrice || property.price > maxPrice) {
      return false;
    }

    // If all filters pass, include this property
    return true;
  });

  // Render filtered properties
  renderProperties(filteredProperties);
}

// Event listener for Apply Filters button
applyFiltersBtn.addEventListener('click', filterProperties);

// Event listeners for real-time filtering when user presses Enter in price inputs
minPriceFilter.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterProperties();
  }
});

maxPriceFilter.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterProperties();
  }
});

// Optional: Add real-time filtering for dropdowns
locationFilter.addEventListener('change', filterProperties);
propertyTypeFilter.addEventListener('change', filterProperties);
bedroomsFilter.addEventListener('change', filterProperties);

// Initial render of all properties when page loads
document.addEventListener('DOMContentLoaded', () => {
  renderProperties(properties);
});
