// property.js - Handles the single property detail page

// Function to get URL parameter
function getPropertyIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

// Function to find property by ID
function findPropertyById(id) {
  return properties.find(property => property.id === id);
}

// Function to display property details
function displayPropertyDetails() {
  // Get property ID from URL
  const propertyId = getPropertyIdFromURL();

  // Find the property
  const property = findPropertyById(propertyId);

  // If property not found, show error message
  if (!property) {
    document.querySelector('.property-detail-container').innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem;">
        <h1>Property Not Found</h1>
        <p style="margin: 2rem 0; color: #6b7280;">Sorry, the property you're looking for doesn't exist.</p>
        <a href="listings.html" class="btn btn-primary">Back to Listings</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${property.title} - DreamHome`;

  // Populate property details
  document.getElementById('propertyImage').src = property.image;
  document.getElementById('propertyImage').alt = property.title;
  document.getElementById('propertyTitle').textContent = property.title;
  document.getElementById('propertyLocation').innerHTML = `📍 ${property.location}`;
  document.getElementById('propertyPrice').textContent = `₹${property.price.toLocaleString('en-IN')}`;
  document.getElementById('propertyBedrooms').textContent = `${property.bedrooms} BHK`;
  document.getElementById('propertyType').textContent = property.type;
  document.getElementById('propertyArea').textContent = `${property.area} sqft`;
  document.getElementById('propertyFurnishing').textContent = property.furnishing;
  document.getElementById('propertyDescription').textContent = property.description;
}

// Function to handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Get property ID
  const propertyId = getPropertyIdFromURL();
  const property = findPropertyById(propertyId);

  // Show alert with form data
  alert(`Thank you for your interest, ${name}!\n\nWe have received your inquiry for:\n"${property.title}"\n\nOur team will contact you soon at:\nEmail: ${email}\nPhone: ${phone}\n\nYour message:\n${message}`);

  // Reset form
  document.getElementById('contactForm').reset();
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Display property details
  displayPropertyDetails();

  // Add event listener to contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
  }
});
