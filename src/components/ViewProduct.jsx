import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('color1');
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/products/id").then(Response => {

        setProductDetails(Response.data)})

    }, [])

    return (
        <>
            {/* Off-canvas overlay */}
            <div className="off_canvars_overlay"></div>

            {/* Offcanvas menu */}
            <OffcanvasMenu />

            {/* Header */}
            <Header />

            {/* Sticky header */}
            <StickyHeader />

            {/* Breadcrumbs */}
            <Breadcrumbs />

            {/* Product Details Section */}
            <ProductDetailsSection 
                quantity={quantity} 
                setQuantity={setQuantity}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />

            {/* Footer */}
            <Footer />

            {/* Product Quick View Modal */}
            <ProductModal />
        </>
    );
};

// Offcanvas Menu Component
const OffcanvasMenu = () => (
    <div className="Offcanvas_menu">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="canvas_open">
                        <a href="javascript:void(0)">
                            <i className="ion-navicon" />
                        </a>
                    </div>
                    <div className="Offcanvas_menu_wrapper">
                        <div className="canvas_close">
                            <a href="javascript:void(0)">
                                <i className="ion-android-close" />
                            </a>
                        </div>
                        <div className="support_info">
                            <p>
                                Telephone Enquiry: <a href="tel:0123456789">0123456789</a>
                            </p>
                        </div>
                        <div className="top_right text-end">
                            <ul>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                        </div>
                        <SearchForm />
                        <CartWidget />
                        <Navigation />
                        <OffcanvasFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Header Component
const Header = () => (
    <header>
        <div className="main_header">
            {/* Header Top */}
            <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="support_info">
                                <p>
                                    Telephone Enquiry: <a href="tel:0123456789">0123456789</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="top_right text-end">
                                <ul>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Middle */}
            <div className="header_middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-6">
                            <div className="middel_right">
                                <SearchForm />
                                <div className="middel_right_info">
                                    <WishlistWidget />
                                    <CartWidget />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Menu */}
            <div className="main_menu_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12">
                            <CategoriesMenu />
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="main_menu menu_position">
                                <Navigation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

// Sticky Header Component
const StickyHeader = () => (
    <div className="sticky_header_area sticky-header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <div className="logo">
                        <a href="index.html">
                            <img src="assets/img/logo/logo.png" alt="Logo" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="sticky_header_right menu_position">
                        <div className="main_menu">
                            <Navigation />
                        </div>
                        <div className="middel_right_info">
                            <WishlistWidget />
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Breadcrumbs Component
const Breadcrumbs = () => (
    <div className="breadcrumbs_area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>product details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Product Details Section Component
const ProductDetailsSection = ({ quantity, setQuantity, selectedColor, setSelectedColor }) => (
    <div className="product_details mt-60 mb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ProductImages />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ProductInfo 
                        quantity={quantity}
                        setQuantity={setQuantity}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />
                </div>
            </div>
        </div>
    </div>
);

// Product Images Component
const ProductImages = () => (
    <div className="product-details-tab">
        <div id="img-1" className="zoomWrapper single-zoom">
            <a href="#">
                <img
                    id="zoom1"
                    src="/img/product/product1.jpg"
                    data-zoom-image="/img/product/product2.jpg"
                    alt="Product"
                />
            </a>
        </div>
    </div>
);

// Product Info Component
const ProductInfo = ({ quantity, setQuantity, selectedColor, setSelectedColor }) => (
    <div className="product_d_right">
        <form action="#">
            <h1>Nonstick Dishwasher PFOA</h1>
            
            <div className="product_nav">
                <ul>
                    <li className="prev">
                        <a href="#"><i className="fa fa-angle-left" /></a>
                    </li>
                    <li className="next">
                        <a href="#"><i className="fa fa-angle-right" /></a>
                    </li>
                </ul>
            </div>

            <ProductRating />

            <div className="price_box">
                <span className="current_price">$70.00</span>
                <span className="old_price">$80.00</span>
            </div>

            <div className="product_desc">
                <p>
                    eget velit. Donec ac tempus ante. Fusce ultricies massa massa. 
                    Fusce aliquam, purus eget sagittis vulputate, sapien libero 
                    hendrerit est, sed commodo augue nisi non neque.
                </p>
            </div>

            <ColorOptions selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

            <div className="product_variant quantity">
                <label>quantity</label>
                <input 
                    min={1} 
                    max={100} 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number" 
                />
                <button className="button" type="submit">add to cart</button>
            </div>

            <ProductActions />

            <div className="product_meta">
                <span>Category: <a href="#">Clothing</a></span>
            </div>
        </form>

        <SocialShare />
    </div>
);

// Product Rating Component
const ProductRating = () => (
    <div className="product_ratting">
        <ul>
            {[1, 2, 3, 4, 5].map((star) => (
                <li key={star}>
                    <a href="#"><i className="fa fa-star" /></a>
                </li>
            ))}
            <li className="review">
                <a href="#"> (customer review) </a>
            </li>
        </ul>
    </div>
);

// Color Options Component
const ColorOptions = ({ selectedColor, setSelectedColor }) => (
    <div className="product_variant color">
        <h3>Available Options</h3>
        <label>color</label>
        <ul>
            {['color1', 'color2', 'color3', 'color4'].map((color) => (
                <li 
                    key={color} 
                    className={`${color} ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                >
                    <a href="#" />
                </li>
            ))}
        </ul>
    </div>
);

// Product Actions Component
const ProductActions = () => (
    <div className="product_d_action">
        <ul>
            <li>
                <a href="#" title="Add to wishlist">+ Add to Wishlist</a>
            </li>
            <li>
                <a href="#" title="Compare">+ Compare</a>
            </li>
        </ul>
    </div>
);

// Social Share Component
const SocialShare = () => (
    <div className="priduct_social">
        <ul>
            <li>
                <a className="facebook" href="#" title="facebook">
                    <i className="fa fa-facebook" /> Like
                </a>
            </li>
            <li>
                <a className="twitter" href="#" title="twitter">
                    <i className="fa fa-twitter" /> tweet
                </a>
            </li>
            <li>
                <a className="pinterest" href="#" title="pinterest">
                    <i className="fa fa-pinterest" /> save
                </a>
            </li>
            <li>
                <a className="google-plus" href="#" title="google +">
                    <i className="fa fa-google-plus" /> share
                </a>
            </li>
            <li>
                <a className="linkedin" href="#" title="linkedin">
                    <i className="fa fa-linkedin" /> linked
                </a>
            </li>
        </ul>
    </div>
);

// Search Form Component
const SearchForm = () => (
    <div className="search_container">
        <form action="#">
            <div className="hover_category">
                <select className="select_option" name="select">
                    <option value={1}>All Categories</option>
                    <option value={2}>Accessories</option>
                    <option value={3}>Accessories &amp; More</option>
                    <option value={4}>Butters &amp; Eggs</option>
                    <option value={5}>Camera &amp; Video</option>
                    <option value={6}>Monitors</option>
                    <option value={7}>Tablets</option>
                    <option value={8}>Laptops</option>
                </select>
            </div>
            <div className="search_box">
                <input placeholder="Search product..." type="text" />
                <button type="submit">Search</button>
            </div>
        </form>
    </div>
);

// Wishlist Widget Component
const WishlistWidget = () => (
    <div className="header_wishlist">
        <a href="wishlist.html">
            <i className="fa fa-heart-o" aria-hidden="true" />
        </a>
        <span className="wishlist_quantity">3</span>
    </div>
);

// Cart Widget Component
const CartWidget = () => (
    <div className="mini_cart_wrapper">
        <a href="javascript:void(0)">
            <i className="fa fa-shopping-bag" aria-hidden="true" />
            $147.00 <i className="fa fa-angle-down" />
        </a>
        <span className="cart_quantity">2</span>
        <MiniCart />
    </div>
);

// Mini Cart Component
const MiniCart = () => (
    <div className="mini_cart">
        <CartItem 
            image="assets/img/s-product/product.jpg"
            name="Sit voluptatem rhoncus sem lectus"
            price="60.00"
        />
        <CartItem 
            image="assets/img/s-product/product2.jpg"
            name="Natus erro at congue massa commodo"
            price="60.00"
        />
        
        <div className="mini_cart_table">
            <div className="cart_total">
                <span>Sub total:</span>
                <span className="price">$138.00</span>
            </div>
            <div className="cart_total mt-10">
                <span>total:</span>
                <span className="price">$138.00</span>
            </div>
        </div>
        
        <div className="mini_cart_footer">
            <div className="cart_button">
                <a href="http://127.0.0.1:8000/api/products/id">View cart</a>
            </div>
            <div className="cart_button">
                <a href="checkout.html">Checkout</a>
            </div>
        </div>
    </div>
);

// Cart Item Component
const CartItem = ({ image, name, price }) => (
    <div className="cart_item">
        <div className="cart_img">
            <a href="#"><img src={image} alt={name} /></a>
        </div>
        <div className="cart_info">
            <a href="#">{name}</a>
            <p>Qty: 1 X <span> ${price} </span></p>
        </div>
        <div className="cart_remove">
            <a href="#"><i className="ion-android-close" /></a>
        </div>
    </div>
);

// Navigation Component
const Navigation = () => (
    <nav>
        <ul>
            <li>
                <a href="index.html">
                    home <i className="fa fa-angle-down" />
                </a>
                <ul className="sub_menu">
                    <li><a href="index.html">Home shop 1</a></li>
                    <li><a href="index-2.html">Home shop 2</a></li>
                    <li><a href="index-3.html">Home shop 3</a></li>
                    <li><a href="index-4.html">Home shop 4</a></li>
                    <li><a href="index-5.html">Home shop 5</a></li>
                </ul>
            </li>
            <li className="mega_items">
                <a className="active" href="shop.html">
                    shop <i className="fa fa-angle-down" />
                </a>
                {/* Mega menu content here */}
            </li>
            <li>
                <a href="blog.html">
                    blog <i className="fa fa-angle-down" />
                </a>
            </li>
            <li>
                <a href="#">
                    pages <i className="fa fa-angle-down" />
                </a>
            </li>
            <li><a href="about.html">about Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>
);

// Categories Menu Component
const CategoriesMenu = () => (
    <div className="categories_menu">
        <div className="categories_title">
            <h2 className="categori_toggle">ALL CATEGORIES</h2>
        </div>
        <div className="categories_menu_toggle">
            <ul>
                <li><a href="#">Brake Parts <i className="fa fa-angle-right" /></a></li>
                <li><a href="#">Wheels &amp; Tires <i className="fa fa-angle-right" /></a></li>
                <li><a href="#">Furniture &amp; Decor <i className="fa fa-angle-right" /></a></li>
                <li><a href="#">Turbo System <i className="fa fa-angle-right" /></a></li>
                <li><a href="#">Lighting</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Body Parts</a></li>
                <li><a href="#">Performance Filters</a></li>
                <li><a href="#">Engine Parts</a></li>
            </ul>
        </div>
    </div>
);

// Footer Component
const Footer = () => (
    <footer className="footer_widgets">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <FooterContactInfo />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <FooterMenu title="Information" links={[
                            { text: 'About Us', url: 'about.html' },
                            { text: 'Delivery Information', url: 'blog.html' },
                            { text: 'Privacy Policy', url: 'contact.html' },
                            { text: 'Terms & Conditions', url: 'services.html' }
                        ]} />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <FooterMenu title="My Account" links={[
                            { text: 'My Account', url: '#' },
                            { text: 'Order History', url: '#' },
                            { text: 'Wish List', url: 'wishlist.html' },
                            { text: 'Newsletter', url: '#' }
                        ]} />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <FooterNewsletter />
                    </div>
                </div>
            </div>
        </div>
        <FooterBottom />
    </footer>
);

// Footer Contact Info Component
const FooterContactInfo = () => (
    <div className="widgets_container contact_us">
        <div className="footer_logo">
            <a href="#"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
        </div>
        <div className="footer_contact">
            <p>We are a team of designers and developers that create high quality HTML Template.</p>
            <p><span>Address:</span> Your address goes here.</p>
            <p><span>Mobile:</span> <a href="tel:0123456789">0123456789</a></p>
            <p><span>Support:</span> <a href="mailto:demo@example.com">demo@example.com</a></p>
        </div>
    </div>
);

// Footer Menu Component
const FooterMenu = ({ title, links }) => (
    <div className="widgets_container widget_menu">
        <h3>{title}</h3>
        <div className="footer_menu">
            <ul>
                {links.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.text}</a></li>
                ))}
            </ul>
        </div>
    </div>
);

// Footer Newsletter Component
const FooterNewsletter = () => (
    <div className="widgets_container newsletter">
        <h3>Follow Us</h3>
        <div className="footer_social_link">
            <ul>
                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                <li><a className="instagram" href="#"><i className="fa fa-instagram" /></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
        </div>
        <div className="subscribe_form">
            <h3>Join Our Newsletter Now</h3>
            <form className="mc-form footer-newsletter">
                <input type="email" placeholder="Your email address..." />
                <button type="submit">Subscribe!</button>
            </form>
        </div>
    </div>
);

// Footer Bottom Component
const FooterBottom = () => (
    <div className="footer_bottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="copyright_area">
                        <p className="copyright-text">
                            © 2022 <a href="index.html">Junko</a>. Made with{' '}
                            <i className="fa fa-heart text-danger" /> by{' '}
                            <a href="https://hasthemes.com/" target="_blank" rel="noopener noreferrer">
                                HasThemes
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="footer_payment text-end">
                        <a href="#"><img src="assets/img/icon/payment.png" alt="Payment" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Offcanvas Footer Component
const OffcanvasFooter = () => (
    <div className="Offcanvas_footer">
        <span>
            <a href="#"><i className="fa fa-envelope-o" /> info@yourdomain.com</a>
        </span>
        <ul>
            <li className="facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
            <li className="twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
            <li className="pinterest"><a href="#"><i className="fa fa-pinterest-p" /></a></li>
            <li className="google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li className="linkedin"><a href="#"><i className="fa fa-linkedin" /></a></li>
        </ul>
    </div>
);

// Product Modal Component (placeholder - simplified)
const ProductModal = () => (
    <div className="modal fade" id="modal_box" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <button type="button" className="close" data-bs-dismiss="modal">
                    <span>×</span>
                </button>
                {/* Modal content here */}
            </div>
        </div>
    </div>
);

export default ViewProduct;