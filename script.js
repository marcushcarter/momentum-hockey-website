// LOAD THE CUSTOM ELEMENTS

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="menu-container">
                    <div class="menu"><i class="fa-solid fa-bars icon"></i></div>
                    <div class="dropdown">
                        <a href="index">Home</a>
                        <a href="/our-players">Our Players</a>
                        <a href="/our-staff">Our Staff</a>
                        <a href="/advising">Advising</a>
                        <a href="/services">Services</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/scouting">Scouting</a>
                        <a href="/rankings">Rankings</a>
                    </div>
                </div>
                <a href="/index"><img class="navbar-logo" src="resources/favicon.png"></a>
                <a class="website-name">MOMENTUM HOCKEY</a>
            </nav>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="height: 50px;"></div>
            <footer>
                <div class="social-links">
                    <a href="https://instagram.com/momentumhockeyscouts" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="extra-links">
                    <a href="our-staff">About</a>
                    <a href="contact-us" target=_self>Contact us</a>
                    <a href="services">Services</a>
                    <a>Privacy Policy</a>
                </div>
                <a class="copyright">Momentum Hockey Scouts © 2024</a>
            </footer>
        `;
    }
}

class SearchBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a class="search-bar">
                <input type="text" id="search-bar" placeholder="Search..." oninput="filterItems()">
            </a>
        `;
    }
}

customElements.define('custom-navbar', Navbar);
customElements.define('custom-footer', Footer);
customElements.define('custom-searchbar', SearchBar);

// SEARCH BAR FUNCTIONS

function filterItems() {
    let input = document.getElementById("search-bar").value.toLowerCase().trim();
    let items = document.querySelectorAll("#search-objects li");

    items.forEach(item => {
        let itemName = item.getAttribute("data-name").toLowerCase();
        let searchTerms = input.split(/\s+/); // Split input into words (spaces)

        // Check if all search terms exist somewhere in the data-name
        let matchesAll = searchTerms.every(term => itemName.includes(term));

        if (matchesAll) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// MENU BUTTON BEING CLICKABLE ON MOBILE PHONES

const menuIcon = document.querySelector('.menu');
const dropdown = document.querySelector('.dropdown');

menuIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from propagating
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!menuIcon.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// SCROLL TO FUNCTION

function goToPageAndScroll(pageUrl, elementId) {
    // Use a query parameter instead of a hash
    const url = `${pageUrl}?scrollTo=${elementId}`;
    window.location.href = url;
}


window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const elementId = params.get('scrollTo');

    if (elementId) {
        const target = document.getElementById(elementId);
        if (target) {
            const offset = 135; // pixels to go up
            const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
            const scrollPosition = elementTop - offset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
});