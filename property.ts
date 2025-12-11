// Get URL parameter
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Create detail card HTML
function createDetailCard(icon, label, value) {
    return `
        <div class="detail-card">
            ${icon}
            <span class="detail-card-label">${label}</span>
            <span class="detail-card-value">${value}</span>
        </div>
    `;
}

// Create feature item HTML
function createFeatureItem(feature) {
    return `
        <div class="feature-item">
            <div class="feature-check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <span>${feature}</span>
        </div>
    `;
}

// Render property details
function renderPropertyDetails(property) {
    // Update page title
    document.title = `${property.title} | LuxeEstate`;

    // Update breadcrumb
    const breadcrumb = document.getElementById('propertyBreadcrumb');
    if (breadcrumb) breadcrumb.textContent = property.title;

    // Update hero image
    const heroSection = document.getElementById('propertyHero');
    if (heroSection) {
        heroSection.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-hero-actions">
                <button class="action-btn" onclick="shareProperty()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                </button>
                <button class="action-btn" onclick="saveProperty()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        `;
    }

    // Update property info
    document.getElementById('propertyType').textContent = property.type;
    document.getElementById('propertyId').textContent = `ID: #${property.id.toString().padStart(5, '0')}`;
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('propertyLocation').textContent = property.location;
    document.getElementById('propertyPrice').textContent = formatPrice(property.price);
    document.getElementById('propertyDescription').textContent = property.description;

    // Update details grid
    const detailsGrid = document.getElementById('propertyDetails');
    if (detailsGrid) {
        const details = [
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>',
                label: 'Bedrooms',
                value: property.bedrooms
            },
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" x2="8" y1="5" y2="7"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="7" x2="7" y1="19" y2="21"></line><line x1="17" x2="17" y1="19" y2="21"></line></svg>',
                label: 'Bathrooms',
                value: property.bathrooms
            },
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>',
                label: 'Area',
                value: `${property.area} sqft`
            },
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
                label: 'Type',
                value: property.type
            },
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"></path><path d="M4 18v2"></path><path d="M20 18v2"></path><path d="M12 4v9"></path></svg>',
                label: 'Furnishing',
                value: property.furnishing
            },
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
                label: 'Year Built',
                value: property.yearBuilt
            }
        ];

        detailsGrid.innerHTML = details.map(d => createDetailCard(d.icon, d.label, d.value)).join('');
    }

    // Update features list
    const featuresList = document.getElementById('propertyFeatures');
    if (featuresList) {
        featuresList.innerHTML = property.features.map(f => createFeatureItem(f)).join('');
    }

    // Pre-fill contact form message
    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.value = `I'm interested in ${property.title}. Please contact me with more details.`;
    }
}

// Show not found message
function showNotFound() {
    document.querySelector('.property-hero')?.remove();
    document.querySelector('.property-content')?.remove();
    document.getElementById('notFound').style.display = 'block';
    document.title = 'Property Not Found | LuxeEstate';
}

// Initialize property page
document.addEventListener('DOMContentLoaded', function() {
    const propertyId = getUrlParam('id');
    
    if (!propertyId) {
        showNotFound();
        return;
    }

    const property = getPropertyById(propertyId);
    
    if (!property) {
        showNotFound();
        return;
    }

    renderPropertyDetails(property);
});
