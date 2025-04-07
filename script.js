// LOAD THE CUSTOM ELEMENTS

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="menu-container">
                    <div class="menu"><i class="fa-solid fa-bars icon"></i></div>
                    <div class="dropdown">
                        <a href="index.html">Home</a>
                        <a href="our-players.html">Our Players</a>
                        <a href="our-staff.html">Our Staff</a>
                        <a href="advising.html">Advising</a>

                    </div>
                </div>
                <!-- <a href="index.html"><img class="navbar-logo" src="resources/Marcus Carter.JPG"></a> -->
                <a href="index.html" class="website-name">MOMENTUM HOCKEY</a>
            </nav>
            <img src="resources/favicon.png" class="title header-logo" alt="Momentum Hockey Logo">
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
                    <a href="our-staff.html">About</a>
                    <a target=_self>Contact us</a>
                    <a>Contribute</a>
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

// EAMIL FORM

function showThanks() {
    document.querySelector("form").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
    return true;
}

// SCROLL TO FUNCTION

function scrollToXY(xCoord, yCoord) {
    window.scrollTo({
      left: xCoord,
      top: yCoord,
      behavior: 'smooth'
    });
}