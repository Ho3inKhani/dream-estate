const properties = [
  {
    id: 1,
    title: "Palm Luxury Villa",
    city: "Dubai",
    location: "Palm Jumeirah, Dubai",
    type: "Villa",
    badge: "Featured",
    price: 3200000,
    bedrooms: 5,
    bathrooms: 6,
    area: 7200,
    parking: 3,
    year: 2022,
    image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Pool", "Sea View", "Smart Home", "Garden", "Cinema Room"],
    description:
      "An ultra-premium villa with panoramic waterfront views, expansive indoor-outdoor living areas, and private leisure amenities designed for luxury family living."
  },
  {
    id: 2,
    title: "Chelsea Skyline Apartment",
    city: "London",
    location: "Chelsea, London",
    type: "Apartment",
    badge: "New",
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    parking: 1,
    year: 2023,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Concierge", "Gym", "Balcony", "City View", "Storage Room"],
    description:
      "A refined apartment in one of London’s most desirable neighborhoods, combining elegant finishes, modern light-filled interiors, and full-service resident amenities."
  },
  {
    id: 3,
    title: "Manhattan Grand Penthouse",
    city: "New York",
    location: "Manhattan, New York",
    type: "Penthouse",
    badge: "Premium",
    price: 4800000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    parking: 2,
    year: 2021,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Roof Terrace", "Private Elevator", "Gym Access", "Doorman", "Fireplace"],
    description:
      "A dramatic penthouse residence with skyline views, generous entertaining space, elevated privacy, and high-end detailing throughout every room."
  },
  {
    id: 4,
    title: "Bosphorus Family Home",
    city: "Istanbul",
    location: "Sariyer, Istanbul",
    type: "Townhouse",
    badge: "Hot Deal",
    price: 890000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    parking: 2,
    year: 2020,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Garden", "Terrace", "Family Lounge", "Security", "Storage"],
    description:
      "A warm and spacious family-oriented home in a quiet district, with practical layouts, outdoor space, and strong day-to-day livability."
  },
  {
    id: 5,
    title: "Downtown Glass Tower Residence",
    city: "Toronto",
    location: "Downtown, Toronto",
    type: "Apartment",
    badge: "Featured",
    price: 1100000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    parking: 1,
    year: 2024,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Pool", "Gym", "Coworking Space", "24/7 Security", "Lounge"],
    description:
      "A contemporary residence in a prime urban tower, built for professionals who want modern amenities, efficient space, and direct access to city life."
  },
  {
    id: 6,
    title: "Miami Waterfront Escape",
    city: "Miami",
    location: "Brickell, Miami",
    type: "Apartment",
    badge: "Luxury",
    price: 2100000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    parking: 2,
    year: 2022,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Water View", "Marina Access", "Spa", "Concierge", "Guest Suite"],
    description:
      "A high-end waterfront apartment with resort-style features, open-plan interiors, and direct access to one of Miami’s most active luxury districts."
  }
];

const listingsGrid = document.getElementById("listingsGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");

const searchInput = document.getElementById("searchInput");
const cityFilter = document.getElementById("cityFilter");
const typeFilter = document.getElementById("typeFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

const themeToggle = document.getElementById("themeToggle");

const propertyModal = document.getElementById("propertyModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalBadge = document.getElementById("modalBadge");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalLocation = document.getElementById("modalLocation");
const modalBedrooms = document.getElementById("modalBedrooms");
const modalBathrooms = document.getElementById("modalBathrooms");
const modalArea = document.getElementById("modalArea");
const modalParking = document.getElementById("modalParking");
const modalDescription = document.getElementById("modalDescription");
const modalAmenities = document.getElementById("modalAmenities");
const galleryPrevBtn = document.getElementById("galleryPrevBtn");
const galleryNextBtn = document.getElementById("galleryNextBtn");

const compareWidget = document.getElementById("compareWidget");
const compareCount = document.getElementById("compareCount");
const clearCompareBtn = document.getElementById("clearCompareBtn");
const openCompareBtn = document.getElementById("openCompareBtn");

const compareModal = document.getElementById("compareModal");
const closeCompareModal = document.getElementById("closeCompareModal");
const compareTable = document.getElementById("compareTable");
const compareTableWrap = document.getElementById("compareTableWrap");
const compareScrollLeft = document.getElementById("compareScrollLeft");
const compareScrollRight = document.getElementById("compareScrollRight");

let compareSelection = [];
let currentModalProperty = null;
let currentGalleryIndex = 0;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function updatePriceLabel() {
  priceValue.textContent = formatCurrency(Number(priceRange.value));
}

function getFilteredProperties() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCity = cityFilter.value;
  const selectedType = typeFilter.value;
  const maxPrice = Number(priceRange.value);

  return properties.filter((property) => {
    const matchesSearch =
      !searchTerm ||
      property.title.toLowerCase().includes(searchTerm) ||
      property.city.toLowerCase().includes(searchTerm) ||
      property.type.toLowerCase().includes(searchTerm) ||
      property.location.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm) ||
      property.amenities.some((item) => item.toLowerCase().includes(searchTerm));

    const matchesCity = selectedCity === "all" || property.city === selectedCity;
    const matchesType = selectedType === "all" || property.type === selectedType;
    const matchesPrice = property.price <= maxPrice;

    return matchesSearch && matchesCity && matchesType && matchesPrice;
  });
}

function createPropertyCard(property) {
  const isChecked = compareSelection.includes(property.id);

  return `
    <article class="property-card ${isChecked ? "compare-selected" : ""}">
      <div class="card-media">
        <img src="${property.image}" alt="${property.title}" />
        <span class="property-badge">${property.badge}</span>
        <label class="compare-check">
          <input
            type="checkbox"
            class="compare-checkbox"
            data-id="${property.id}"
            ${isChecked ? "checked" : ""}
          />
          Compare
        </label>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <h3>${property.title}</h3>
          <strong class="card-price">${formatCurrency(property.price)}</strong>
        </div>

        <p class="card-location">
          <i class="fa-solid fa-location-dot"></i>
          ${property.location}
        </p>

        <div class="card-specs">
          <div class="card-spec">
            <i class="fa-solid fa-bed"></i>
            <strong>${property.bedrooms}</strong>
            <span>Beds</span>
          </div>
          <div class="card-spec">
            <i class="fa-solid fa-bath"></i>
            <strong>${property.bathrooms}</strong>
            <span>Baths</span>
          </div>
          <div class="card-spec">
            <i class="fa-solid fa-ruler-combined"></i>
            <strong>${formatNumber(property.area)}</strong>
            <span>Sq Ft</span>
          </div>
          <div class="card-spec">
            <i class="fa-solid fa-square-parking"></i>
            <strong>${property.parking}</strong>
            <span>Parking</span>
          </div>
        </div>

        <p class="card-desc">${property.description}</p>

        <div class="card-actions">
          <button class="btn btn-primary details-btn" data-id="${property.id}">
            View Details
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProperties() {
  const filtered = getFilteredProperties();

  listingsGrid.innerHTML = filtered.map(createPropertyCard).join("");
  resultsCount.textContent = filtered.length;
  emptyState.classList.toggle("hidden", filtered.length > 0);

  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const property = properties.find((item) => item.id === id);
      if (property) {
        openPropertyModal(property);
      }
    });
  });

  document.querySelectorAll(".compare-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = Number(checkbox.dataset.id);

      if (checkbox.checked) {
        if (!compareSelection.includes(id)) {
          if (compareSelection.length >= 4) {
            checkbox.checked = false;
            alert("You can compare up to 4 properties at a time.");
            return;
          }
          compareSelection.push(id);
        }
      } else {
        compareSelection = compareSelection.filter((item) => item !== id);
      }

      updateCompareUI();
      renderProperties();
    });
  });
}

function openPropertyModal(property) {
  currentModalProperty = property;
  currentGalleryIndex = 0;
  updateModalContent();

  propertyModal.classList.remove("hidden");
  propertyModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateModalContent() {
  if (!currentModalProperty) return;

  const gallery = currentModalProperty.gallery || [currentModalProperty.image];
  modalImage.src = gallery[currentGalleryIndex];
  modalImage.alt = currentModalProperty.title;
  modalBadge.textContent = currentModalProperty.badge;
  modalTitle.textContent = currentModalProperty.title;
  modalPrice.textContent = formatCurrency(currentModalProperty.price);
  modalLocation.textContent = currentModalProperty.location;
  modalBedrooms.textContent = `${currentModalProperty.bedrooms} Bedrooms`;
  modalBathrooms.textContent = `${currentModalProperty.bathrooms} Bathrooms`;
  modalArea.textContent = `${formatNumber(currentModalProperty.area)} Sq Ft`;
  modalParking.textContent = `${currentModalProperty.parking} Parking`;
  modalDescription.textContent = currentModalProperty.description;

  modalAmenities.innerHTML = currentModalProperty.amenities
    .map((item) => `<span>${item}</span>`)
    .join("");
}

function closePropertyModal() {
  propertyModal.classList.add("hidden");
  propertyModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrevGalleryImage() {
  if (!currentModalProperty) return;
  const gallery = currentModalProperty.gallery || [currentModalProperty.image];
  currentGalleryIndex = (currentGalleryIndex - 1 + gallery.length) % gallery.length;
  updateModalContent();
}

function showNextGalleryImage() {
  if (!currentModalProperty) return;
  const gallery = currentModalProperty.gallery || [currentModalProperty.image];
  currentGalleryIndex = (currentGalleryIndex + 1) % gallery.length;
  updateModalContent();
}

function updateCompareUI() {
  const count = compareSelection.length;

  compareWidget.classList.toggle("hidden", count === 0);
  compareCount.textContent =
    count === 1 ? "1 property selected" : `${count} properties selected`;
  openCompareBtn.disabled = count < 2;
}

function openCompareModal() {
  const selectedProperties = properties.filter((property) =>
    compareSelection.includes(property.id)
  );

  if (selectedProperties.length < 2) return;

  compareTable.innerHTML = `
    <tr>
      <th>Property</th>
      ${selectedProperties
        .map(
          (property) => `
            <td class="compare-property-head">
              <img src="${property.image}" alt="${property.title}" />
              <strong>${property.title}</strong>
              <span>${formatCurrency(property.price)}</span>
            </td>
          `
        )
        .join("")}
    </tr>
    <tr>
      <th>Location</th>
      ${selectedProperties.map((property) => `<td>${property.location}</td>`).join("")}
    </tr>
    <tr>
      <th>City</th>
      ${selectedProperties.map((property) => `<td>${property.city}</td>`).join("")}
    </tr>
    <tr>
      <th>Type</th>
      ${selectedProperties.map((property) => `<td>${property.type}</td>`).join("")}
    </tr>
    <tr>
      <th>Bedrooms</th>
      ${selectedProperties.map((property) => `<td>${property.bedrooms}</td>`).join("")}
    </tr>
    <tr>
      <th>Bathrooms</th>
      ${selectedProperties.map((property) => `<td>${property.bathrooms}</td>`).join("")}
    </tr>
    <tr>
      <th>Area</th>
      ${selectedProperties
        .map((property) => `<td>${formatNumber(property.area)} Sq Ft</td>`)
        .join("")}
    </tr>
    <tr>
      <th>Parking</th>
      ${selectedProperties.map((property) => `<td>${property.parking}</td>`).join("")}
    </tr>
    <tr>
      <th>Year</th>
      ${selectedProperties.map((property) => `<td>${property.year}</td>`).join("")}
    </tr>
    <tr>
      <th>Amenities</th>
      ${selectedProperties
        .map((property) => `<td>${property.amenities.join(", ")}</td>`)
        .join("")}
    </tr>
  `;

  compareModal.classList.remove("hidden");
  compareModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCompare() {
  compareModal.classList.add("hidden");
  compareModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function clearCompare() {
  compareSelection = [];
  updateCompareUI();
  renderProperties();
  closeCompare();
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("dreamhome-theme", isDark ? "dark" : "light");
  themeToggle.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

function loadTheme() {
  const savedTheme = localStorage.getItem("dreamhome-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

function initEvents() {
  searchInput.addEventListener("input", renderProperties);
  cityFilter.addEventListener("change", renderProperties);
  typeFilter.addEventListener("change", renderProperties);
  priceRange.addEventListener("input", () => {
    updatePriceLabel();
    renderProperties();
  });

  themeToggle.addEventListener("click", toggleTheme);

  closeModal.addEventListener("click", closePropertyModal);
  galleryPrevBtn.addEventListener("click", showPrevGalleryImage);
  galleryNextBtn.addEventListener("click", showNextGalleryImage);

  clearCompareBtn.addEventListener("click", clearCompare);
  openCompareBtn.addEventListener("click", openCompareModal);
  closeCompareModal.addEventListener("click", closeCompare);

  compareScrollLeft.addEventListener("click", () => {
    compareTableWrap.scrollBy({ left: -260, behavior: "smooth" });
  });

  compareScrollRight.addEventListener("click", () => {
    compareTableWrap.scrollBy({ left: 260, behavior: "smooth" });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", () => {
      if (backdrop.dataset.close === "modal") {
        closePropertyModal();
      }
      if (backdrop.dataset.close === "compare") {
        closeCompare();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePropertyModal();
      closeCompare();
    }

    if (!propertyModal.classList.contains("hidden")) {
      if (event.key === "ArrowLeft") {
        showPrevGalleryImage();
      }
      if (event.key === "ArrowRight") {
        showNextGalleryImage();
      }
    }
  });
}

function init() {
  loadTheme();
  updatePriceLabel();
  updateCompareUI();
  renderProperties();
  initEvents();
}

init();
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const userType = document.getElementById("userType").value;
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const requestMessage = document.getElementById("requestMessage").value.trim();
    const notRobot = document.getElementById("notRobot").checked;

    if (!userType || !fullName || !email || !requestMessage) {
      formStatus.textContent = "Please fill all fields.";
      formStatus.style.color = "red";
      return;
    }

    if (!notRobot) {
      formStatus.textContent = "Please confirm that you are not a robot.";
      formStatus.style.color = "red";
      return;
    }

    formStatus.textContent = "Sending...";
    formStatus.style.color = "inherit";

    try {
		
      const templateParams = {
        user_type: userType,
        full_name: fullName,
        email: email,
        message: requestMessage,
      };

      console.log("Send this data to email service:", templateParams);

      formStatus.textContent = "Your request has been sent successfully.";
      formStatus.style.color = "green";
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = "Failed to send request.";
      formStatus.style.color = "red";
      console.error(error);
    }
  });
}
const captchaText = document.getElementById("captchaText");
const captchaAnswer = document.getElementById("captchaAnswer");
const notRobot = document.getElementById("notRobot");

let captchaResult = 12; // 7 + 5

if (captchaText) {
  captchaText.textContent = "7 + 5 = ?";
}

function isCaptchaValid() {
  const answer = Number(captchaAnswer.value.trim());
  return notRobot.checked && answer === captchaResult;
}

function updateSubmitState() {
  const submitBtn = document.querySelector(".submit-btn");
  if (!submitBtn) return;

  submitBtn.disabled = !isCaptchaValid();
  submitBtn.style.opacity = submitBtn.disabled ? "0.6" : "1";
  submitBtn.style.cursor = submitBtn.disabled ? "not-allowed" : "pointer";
}

if (notRobot) {
  notRobot.addEventListener("change", updateSubmitState);
}

if (captchaAnswer) {
  captchaAnswer.addEventListener("input", updateSubmitState);
}
