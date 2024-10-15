import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import Search from "../components/Search";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(null); // State to hold any fetch errors

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = `${process.env.REACT_APP_API_URL}/products?${searchParams}`;
                console.log("Fetching products from:", url); // Log the URL for debugging

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data.products || []); // Ensure data.products is an array
            } catch (err) {
                setError(err.message); // Set the error message
                console.error('Fetch error:', err);
            }
        };

        fetchProducts();
    }, [searchParams]);

    // Inline CSS for background image
    const homeStyle = {
        backgroundImage: "url('/images/bg.jpg')", // Replace with the correct image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Full viewport height
        padding: '20px',
        color: '#fff' // Optional, set text color to ensure readability
    };

    return (
        <Fragment>*
            <div className="home" style={homeStyle}>
                <br />
                <br />
                <br />
                <h1 id="home">Welcome to our world of handmade things delights and creative craft ideas!</h1><br />
                <br />
                <center>
                    <div className="col-12 col-md-6 mt-2 mt-md-0">
                        <Search />
                    </div>
                </center><br />
                <br />
                <p><b>
                    Surround yourself with people you can always learn something from. <br />
                    Always work with people that are better at their craft than you are.
                </b></p>
                <br />
                <center><b>Just shop the product</b></center>
                <br />
            </div>
            <h1 id="products_heading">Latest Products</h1>

            {error && <div style={{ color: 'red' }}>Error: {error}</div>} {/* Display error message */}

            <section id="products" className="container mt-5">
                <div className="row">
                    {products.length > 0 ? (
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <p>No products found.</p> // Handle empty products array
                    )}
                </div>
            </section>
        </Fragment>
    );
}
