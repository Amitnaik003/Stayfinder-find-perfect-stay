import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [listings, setListings] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredListings, setFilteredListings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dummy listings data (replace with API call in production)
    useEffect(() => {
        const dummyListings = [
            {
                id: 1,
                title: "Apartment in Bengaluru",
                location: "Bengaluru, India",
                price: 3264,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdy2xCqI5XIVajXtiuKmGF5a1Hp2dyo5_Ozg&s",
            },
            {
                id: 2,
                title: "Flat in Goa",
                location: "South Goa, India",
                price: 5250,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvt-9aZmeU1QnGWASJqttuhYn6EV7p_zfd1fFA9kpAbA6u9C3wNPzZDMnpQ6LFE0UURE&usqp=CAU",
            },
            {
                id: 3,
                title: "Guest House in Majorda",
                location: "Majorda, Goa, India",
                price: 7418,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT1MZlyahx5xOJxpw4hd0fzeU6myRUNEDcf7UlG3RWOxSAdgbpde11jaNBf2M3ohvI5I&usqp=CAU",
            },
            {
                id: 4,
                title: "Apartment in Colva",
                location: "Colva, Goa, India",
                price: 4132,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbeLJKT5MxCdDte_Q6tGZghVpSfn25SX60QGi3FBQJkHeabhfloTBCrggSD62nX2ZVuk&usqp=CAU",
            },
            {
                id: 5,
                title: "Flat in Benaulim",
                location: "Benaulim, Goa, India",
                price: 6800,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_uyI-QkSzhm3oT2_-I91DKCJcZNU-D9eWsyl5c5atU8iRNandveuMfrmRRkTEsRHqN8&usqp=CAU",
            },
            {
                id: 6,
                title: "Luxury Villa in Jaipur",
                location: "Jaipur, India",
                price: 12000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYhN8OgPzq4z4R4puJDI2uK6Eo-OV2O4ShfNx5sPyB0sfQseDOp0pE-SNYV6D-PskocU&usqp=CAU",
            },
            {
                id: 7,
                title: "Beach House in Kerala",
                location: "Alleppey, Kerala, India",
                price: 8500,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jxEodZ_p20F2r_J41apLnCRx-fw23APZpa7EkObVVAQjTniWLkqLzXHQGrDFbvZKQik&usqp=CAU",
            },
            {
                id: 8,
                title: "Cottage in Shimla",
                location: "Shimla, Himachal Pradesh, India",
                price: 6000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yDmQcU6RN0eMl72JPv3mc4pjDMmGc4VSEBZO5oX4Dvf-nfjVAKr5o2Uoyo1W0LaRoao&usqp=CAU",
            },
            {
                id: 9,
                title: "Penthouse in Mumbai",
                location: "Mumbai, India",
                price: 15000,
                image: "https://pix10.agoda.net/hotelImages/980/9808799/9808799_19101304270082025788.jpg?ca=9&ce=1&s=414x232",
            },
            {
                id: 10,
                title: "Farmhouse in Punjab",
                location: "Amritsar, Punjab, India",
                price: 7000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzY561oI-GeoJTkcHfzANGa1mro3VrKeKUtROMEB4F34uuwdM8Ax7Lfk26S-7EIPPPxEw&usqp=CAU",
            },
            {
                id: 11,
                title: "Studio Apartment in Delhi",
                location: "Delhi, India",
                price: 5000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-y73qc0aIM5ROyCPjXiXhrQMJ4c7k3UG4NA&s",
            },
            {
                id: 12,
                title: "Treehouse in Munnar",
                location: "Munnar, Kerala, India",
                price: 9000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjibZg6Uz_mMVDMQ1GER_fnROTjjW0JFP1P8DwcsMB8AH1wkt0IG_ymCbNVYZkBQ1xBM&usqp=CAU",
            },
            {
                id: 13,
                title: "Cabin in Manali",
                location: "Manali, Himachal Pradesh, India",
                price: 6500,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJBJ6UhGkjcKcD8jEUMV_3nKBiWBKN5OPEYySE9lQ1OQK04Gw3aZJ_-IgOqQbrIAl8pY&usqp=CAU",
            },
            {
                id: 14,
                title: "Villa in Udaipur",
                location: "Udaipur, Rajasthan, India",
                price: 10000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzS1Dn8c9hfGOxAGAMe79kobRZ4DQUdB2ddw&s",
            },
            {
                id: 15,
                title: "Luxury Apartment in Hyderabad",
                location: "Hyderabad, India",
                price: 8000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfin9gnA-7Iq-ELVP3GhXrPhQbd_Lx9HXC-g&s",
            },
        ];
        setListings(dummyListings);
        setFilteredListings(dummyListings);
        setLoading(false);
    }, []);

    // Filter logic
    useEffect(() => {
        let filtered = listings;
        if (searchQuery) {
            filtered = filtered.filter((l) =>
                l.location.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (minPrice) {
            filtered = filtered.filter((l) => l.price >= parseInt(minPrice));
        }
        if (maxPrice) {
            filtered = filtered.filter((l) => l.price <= parseInt(maxPrice));
        }
        setFilteredListings(filtered);
    }, [searchQuery, minPrice, maxPrice, listings]);

    return (
        <>
            <div className="home-container">
                {/* Header */}
                <header className="header">
                    <div className="header-content">
                        <Link to="/" className="logo">StayFinder</Link>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search by location"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                                style={{ width: 90 }}
                            />
                            <input
                                type="number"
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)}
                                style={{ width: 90 }}
                            />
                            <button>Search</button>
                        </div>
                        <div className="nav-links">
                            <Link to="/mybookings">My Bookings</Link>
                            <Link to ="/contact">Contact Us</Link>
                            <Link to="/about">About Us</Link>  
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="main-content">
                    <h1 className="title">Explore Your Perfect Stay</h1>
                    {loading ? (
                        <div className="spinner"></div>
                    ) : filteredListings.length === 0 ? (
                        <div className="no-results">No stays found for your search.</div>
                    ) : (
                        <div className="listings-grid">
                            {filteredListings.map((listing) => (
                                <div key={listing.id} className="listing-card">
                                    <div className="card-image-wrap">
                                        <img src={listing.image} alt={listing.title} className="listing-image" />
                                        <span className="favorite-heart">♡</span>
                                    </div>
                                    <div className="listing-details">
                                        <h2 className="listing-title">{listing.title}</h2>
                                        <p className="listing-location">{listing.location}</p>
                                        <p className="listing-price">₹{listing.price} / 2 nights</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="footer">
                    <p>© 2025 StayFinder. All rights reserved.</p>
                </footer>
            </div>
            <style>{`
        /* General Styles */
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Home Container */
.home-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.search-bar button:hover {
  background-color: #e04848;
}

.nav-links a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.nav-links a:hover {
  color: #ff5a5f;
}

/* Main Content */
.main-content {
  padding: 100px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

/* Listings Grid */
.listings-grid {
  display: flex; /* Use flexbox for horizontal layout */
  flex-wrap: wrap; /* Allow wrapping if cards overflow */
  gap: 20px; /* Add spacing between cards */
  justify-content: center; /* Center the cards horizontally */
}

.listing-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px; /* Set a fixed width for cards */
}

.listing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.listing-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.listing-details {
  padding: 15px;
}

.listing-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.listing-location {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.listing-price {
  font-size: 18px;
  font-weight: bold;
  color: #4caf50;
}

/* Footer */
.footer {
  background-color: white;
  color: #333;
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  margin-top: auto;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-avatar {
  margin-right: 6px;
  font-size: 18px;
  vertical-align: middle;
}

.card-image-wrap {
  position: relative;
}

.favorite-heart {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 22px;
  color: #ff5a5f;
  background: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
}

.favorite-heart:hover {
  background: #ffeaea;
}

.spinner {
  margin: 60px auto;
  border: 6px solid #eee;
  border-top: 6px solid #ff5a5f;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.no-results {
  text-align: center;
  color: #888;
  font-size: 1.2em;
  margin: 40px 0;
}
    `}</style>
        </>
    );
}
