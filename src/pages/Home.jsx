import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Product from '../components/Product'

const Home = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        axios.get("./data/products.json").then(Response => {
        setproducts(Response.data)})
    })

    return (
        <>
            {/*header area start*/}
            {/*Offcanvas menu area start*/}
            <div className="off_canvars_overlay"></div>
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
                                        <li>
                                            <a href="my-account.html"> My Account </a>
                                        </li>
                                        <li>
                                            <a href="checkout.html"> Checkout </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="search_container">
                                    <form action="#">
                                        <div className="hover_category">
                                            <select className="select_option" name="select" id="categori">
                                                <option selected="" value={1}>
                                                    All Categories
                                                </option>
                                                <option value={2}>Accessories</option>
                                                <option value={3}>Accessories &amp; More</option>
                                                <option value={4}>Butters &amp; Eggs</option>
                                                <option value={5}>Camera &amp; Video </option>
                                                <option value={6}>Mornitors</option>
                                                <option value={7}>Tablets</option>
                                                <option value={8}>Laptops</option>
                                                <option value={9}>Handbags</option>
                                                <option value={10}>Headphone &amp; Speaker</option>
                                                <option value={11}>Herbs &amp; botanicals</option>
                                                <option value={12}>Vegetables</option>
                                                <option value={13}>Shop</option>
                                                <option value={14}>Laptops &amp; Desktops</option>
                                                <option value={15}>Watchs</option>
                                                <option value={16}>Electronic</option>
                                            </select>
                                        </div>
                                        <div className="search_box">
                                            <input placeholder="Search product..." type="text" />
                                            <button type="submit">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="middel_right_info">
                                    <div className="header_wishlist">
                                        <a href="wishlist.html">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                        <span className="wishlist_quantity">3</span>
                                    </div>
                                    <div className="mini_cart_wrapper">
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-shopping-bag" aria-hidden="true" />
                                            $147.00 <i className="fa fa-angle-down" />
                                        </a>
                                        <span className="cart_quantity">2</span>
                                        {/*mini cart*/}
                                        <div className="mini_cart">
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="#">
                                                        <img src="/img/s-product/product.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart_info">
                                                    <a href="#">Sit voluptatem rhoncus sem lectus</a>
                                                    <p>
                                                        Qty: 1 X <span> $60.00 </span>
                                                    </p>
                                                </div>
                                                <div className="cart_remove">
                                                    <a href="#">
                                                        <i className="ion-android-close" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="#">
                                                        <img src="/img/s-product/product2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart_info">
                                                    <a href="#">Natus erro at congue massa commodo</a>
                                                    <p>
                                                        Qty: 1 X <span> $60.00 </span>
                                                    </p>
                                                </div>
                                                <div className="cart_remove">
                                                    <a href="#">
                                                        <i className="ion-android-close" />
                                                    </a>
                                                </div>
                                            </div>
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
                                                    <a href="cart.html">View cart</a>
                                                </div>
                                                <div className="cart_button">
                                                    <a href="checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*mini cart end*/}
                                    </div>
                                </div>
                                <div id="menu" className="text-start ">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children active">
                                            <a href="#">Home</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home 3</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home 4</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Home 5</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Shop</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="#">Shop Layouts</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="shop.html">shop</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth.html">Full Width</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth-list.html">Full Width list</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right-sidebar.html">Right Sidebar </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right-sidebar-list.html">
                                                                {" "}
                                                                Right Sidebar list
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list.html">List View</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#">other Pages</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="cart.html">cart</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                        <li>
                                                            <a href="my-account.html">my account</a>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">Error 404</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#">Product Types</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="product-details.html">product details</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sidebar.html">product sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-grouped.html">product grouped</a>
                                                        </li>
                                                        <li>
                                                            <a href="variable-product.html">product variable</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-countdown.html">product countdown</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to ="/blog">blog</Link>|{""}
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">blog details</a>
                                                </li>
                                                <li>
                                                    <a href="blog-fullwidth.html">blog fullwidth</a>
                                                </li>
                                                <li>
                                                    <a href="blog-sidebar.html">blog left sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-no-sidebar.html">blog no sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">pages </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="services.html">services</a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">privacy policy</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">Frequently Questions</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">contact</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">Error 404</a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">Compare</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="my-account.html">my account</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="about.html">about Us</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="contact.html"> Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Offcanvas_footer">
                                    <span>
                                        <a href="#">
                                            <i className="fa fa-envelope-o" /> info@yourdomain.com
                                        </a>
                                    </span>
                                    <ul>
                                        <li className="facebook">
                                            <a href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="pinterest">
                                            <a href="#">
                                                <i className="fa fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                            <a href="#">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="#">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Offcanvas menu area end*/}
            <header>
                <div className="main_header">
                    {/*header top start*/}
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
                                            <li>
                                                <a href="my-account.html"> My Account </a>
                                            </li>
                                            <li>
                                                <a href="checkout.html"> Checkout </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*header top start*/}
                    {/*header middel start*/}
                    <div className="header_middle">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="/img/logo/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-6">
                                    <div className="middel_right">
                                        <div className="search_container">
                                            <form action="#">
                                                <div className="hover_category">
                                                    <select
                                                        className="select_option"
                                                        name="select"
                                                        id="categori1"
                                                    >
                                                        <option selected="" value={1}>
                                                            All Categories
                                                        </option>
                                                        <option value={2}>Accessories</option>
                                                        <option value={3}>Accessories &amp; More</option>
                                                        <option value={4}>Butters &amp; Eggs</option>
                                                        <option value={5}>Camera &amp; Video </option>
                                                        <option value={6}>Mornitors</option>
                                                        <option value={7}>Tablets</option>
                                                        <option value={8}>Laptops</option>
                                                        <option value={9}>Handbags</option>
                                                        <option value={10}>Headphone &amp; Speaker</option>
                                                        <option value={11}>Herbs &amp; botanicals</option>
                                                        <option value={12}>Vegetables</option>
                                                        <option value={13}>Shop</option>
                                                        <option value={14}>Laptops &amp; Desktops</option>
                                                        <option value={15}>Watchs</option>
                                                        <option value={16}>Electronic</option>
                                                    </select>
                                                </div>
                                                <div className="search_box">
                                                    <input placeholder="Search product..." type="text" />
                                                    <button type="submit">Search</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="middel_right_info">
                                            <div className="header_wishlist">
                                                <a href="wishlist.html">
                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                </a>
                                                <span className="wishlist_quantity">3</span>
                                            </div>
                                            <div className="mini_cart_wrapper">
                                                <a href="javascript:void(0)">
                                                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                                                    $147.00 <i className="fa fa-angle-down" />
                                                </a>
                                                <span className="cart_quantity">2</span>
                                                {/*mini cart*/}
                                                <div className="mini_cart">
                                                    <div className="cart_item">
                                                        <div className="cart_img">
                                                            <a href="#">
                                                                <img
                                                                    src="/img/s-product/product.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="cart_info">
                                                            <a href="#">Sit voluptatem rhoncus sem lectus</a>
                                                            <p>
                                                                Qty: 1 X <span> $60.00 </span>
                                                            </p>
                                                        </div>
                                                        <div className="cart_remove">
                                                            <a href="#">
                                                                <i className="ion-android-close" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="cart_item">
                                                        <div className="cart_img">
                                                            <a href="#">
                                                                <img
                                                                    src="/img/s-product/product2.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="cart_info">
                                                            <a href="#">Natus erro at congue massa commodo</a>
                                                            <p>
                                                                Qty: 1 X <span> $60.00 </span>
                                                            </p>
                                                        </div>
                                                        <div className="cart_remove">
                                                            <a href="#">
                                                                <i className="ion-android-close" />
                                                            </a>
                                                        </div>
                                                    </div>
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
                                                            <a href="cart.html">View cart</a>
                                                        </div>
                                                        <div className="cart_button">
                                                            <a href="checkout.html">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*mini cart end*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*header middel end*/}
                    {/*header bottom satrt*/}
                    <div className="main_menu_area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-12">
                                    <div className="categories_menu">
                                        <div className="categories_title">
                                            <h2 className="categori_toggle">ALL CATEGORIES</h2>
                                        </div>
                                        <div className="categories_menu_toggle">
                                            <ul>
                                                <li className="menu_item_children">
                                                    <a href="#">
                                                        Brake Parts <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu">
                                                        <li className="menu_item_children">
                                                            <a href="#">Dresses</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Sweater</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Evening</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Day</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Sports</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">Handbags</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Shoulder</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Satchels</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">kids</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">coats</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">shoes</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Ankle Boots</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Clog sandals </a>
                                                                </li>
                                                                <li>
                                                                    <a href="">run</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Books</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">Clothing</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Coats Jackets </a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Raincoats</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Jackets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">T-shirts</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="#">
                                                        {" "}
                                                        Wheels &amp; Tires <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu column_3">
                                                        <li className="menu_item_children">
                                                            <a href="#">Chair</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Dining room</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">bedroom</a>
                                                                </li>
                                                                <li>
                                                                    <a href=""> Home &amp; Office</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">living room</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">Lighting</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Ceiling Lighting</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Wall Lighting</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Outdoor Lighting</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Smart Lighting</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">Sofa</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Fabric Sofas</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Leather Sofas</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Corner Sofas</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Sofa Beds</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="#">
                                                        {" "}
                                                        Furnitured &amp; Decor{" "}
                                                        <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu column_2">
                                                        <li className="menu_item_children">
                                                            <a href="#">Brake Tools</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Driveshafts</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Spools</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Diesel </a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Gasoline</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">Emergency Brake</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Dolls for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Girls' Learning Toys</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Arts and Crafts for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Video Games for Girls</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu_item_children">
                                                    <a href="#">
                                                        {" "}
                                                        Turbo System <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="categories_mega_menu column_2">
                                                        <li className="menu_item_children">
                                                            <a href="#">Check Trousers</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Building</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Electronics</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">action figures </a>
                                                                </li>
                                                                <li>
                                                                    <a href="">specialty &amp; boutique toy</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_item_children">
                                                            <a href="#">Calculators</a>
                                                            <ul className="categorie_sub_menu">
                                                                <li>
                                                                    <a href="">Dolls for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Girls' Learning Toys</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Arts and Crafts for Girls</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Video Games for Girls</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#"> Lighting</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="#">Body Parts</a>
                                                </li>
                                                <li>
                                                    <a href="#">Perfomance Filters</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Engine Parts</a>
                                                </li>
                                                <li id="cat_toggle" className="has-sub">
                                                    <a href="#"> More Categories</a>
                                                    <ul className="categorie_sub">
                                                        <li>
                                                            <a href="#">Hide Categories</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12">
                                    <div className="main_menu menu_position">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="index.html">
                                                        home
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu">
                                                        <li>
                                                            <a href="index.html">Home shop 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Home shop 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Home shop 3</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Home shop 4</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Home shop 5</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega_items">
                                                    <a className="active" href="shop.html">
                                                        shop
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                    <div className="mega_menu">
                                                        <ul className="mega_menu_inner">
                                                            <li>
                                                                <a href="#">Shop Layouts</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shop-fullwidth.html">Full Width</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-fullwidth-list.html">
                                                                            Full Width list
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-right-sidebar.html">
                                                                            Right Sidebar{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-right-sidebar-list.html">
                                                                            {" "}
                                                                            Right Sidebar list
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-list.html">List View</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">other Pages</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">cart</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="wishlist.html">Wishlist</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="checkout.html">Checkout</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="my-account.html">my account</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="404.html">Error 404</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Product Types</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="product-details.html">
                                                                            product details
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-sidebar.html">
                                                                            product sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-grouped.html">
                                                                            product grouped
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="variable-product.html">
                                                                            product variable
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-countdown.html">
                                                                            product countdown
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Concrete Tools</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shop.html">Cables &amp; Connectors</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-list.html">Graphics Tablets</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-fullwidth.html">
                                                                            Printers, Ink &amp; Toner
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-fullwidth-list.html">
                                                                            Refurbished Tablets
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-right-sidebar.html">
                                                                            Optical Drives
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="blog.html">
                                                        blog
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu pages">
                                                        <li>
                                                            <a href="blog-details.html">blog details</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-fullwidth.html">blog fullwidth</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-sidebar.html">blog left sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-no-sidebar.html">blog no sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        pages <i className="fa fa-angle-down" />
                                                    </a>
                                                    <ul className="sub_menu pages">
                                                        <li>
                                                            <a href="about.html">About Us</a>
                                                        </li>
                                                        <li>
                                                            <a href="services.html">services</a>
                                                        </li>
                                                        <li>
                                                            <a href="privacy-policy.html">privacy policy</a>
                                                        </li>
                                                        <li>
                                                            <a href="faq.html">Frequently Questions</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact.html">contact</a>
                                                        </li>
                                                        <li>
                                                            <a href="login.html">login</a>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">Error 404</a>
                                                        </li>
                                                        <li>
                                                            <a href="compare.html">Compare</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="about.html">about Us</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html"> Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*header bottom end*/}
                </div>
            </header>
            {/*header area end*/}
            {/*sticky header area start*/}
            <div className="sticky_header_area sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/img/logo/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="sticky_header_right menu_position">
                                <div className="main_menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="index.html">
                                                    home
                                                    <i className="fa fa-angle-down" />
                                                </a>
                                                <ul className="sub_menu">
                                                    <li>
                                                        <a href="index.html">Home shop 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Home shop 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Home shop 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Home shop 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Home shop 5</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mega_items">
                                                <a className="active" href="shop.html">
                                                    shop
                                                    <i className="fa fa-angle-down" />
                                                </a>
                                                <div className="mega_menu">
                                                    <ul className="mega_menu_inner">
                                                        <li>
                                                            <a href="#">Shop Layouts</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="shop-fullwidth.html">Full Width</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-fullwidth-list.html">
                                                                        Full Width list
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-right-sidebar.html">
                                                                        Right Sidebar{" "}
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-right-sidebar-list.html">
                                                                        {" "}
                                                                        Right Sidebar list
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-list.html">List View</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">other Pages</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="cart.html">cart</a>
                                                                </li>
                                                                <li>
                                                                    <a href="wishlist.html">Wishlist</a>
                                                                </li>
                                                                <li>
                                                                    <a href="checkout.html">Checkout</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-account.html">my account</a>
                                                                </li>
                                                                <li>
                                                                    <a href="404.html">Error 404</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Product Types</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="product-details.html">product details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-sidebar.html">product sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-grouped.html">product grouped</a>
                                                                </li>
                                                                <li>
                                                                    <a href="variable-product.html">
                                                                        product variable
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-countdown.html">
                                                                        product countdown
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Concrete Tools</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="shop.html">Cables &amp; Connectors</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-list.html">Graphics Tablets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-fullwidth.html">
                                                                        Printers, Ink &amp; Toner
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-fullwidth-list.html">
                                                                        Refurbished Tablets
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-right-sidebar.html">
                                                                        Optical Drives
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="blog.html">
                                                    blog
                                                    <i className="fa fa-angle-down" />
                                                </a>
                                                <ul className="sub_menu pages">
                                                    <li>
                                                        <a href="blog-details.html">blog details</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-fullwidth.html">blog fullwidth</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-sidebar.html">blog left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-no-sidebar.html">blog no sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    pages <i className="fa fa-angle-down" />
                                                </a>
                                                <ul className="sub_menu pages">
                                                    <li>
                                                        <a href="about.html">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="services.html">services</a>
                                                    </li>
                                                    <li>
                                                        <a href="privacy-policy.html">privacy policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">Frequently Questions</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">login</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Error 404</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">Compare</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="about.html">about Us</a>
                                            </li>
                                            <li>
                                                <a href="contact.html"> Contact Us</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="middel_right_info">
                                    <div className="header_wishlist">
                                        <a href="wishlist.html">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </a>
                                        <span className="wishlist_quantity">3</span>
                                    </div>
                                    <div className="mini_cart_wrapper">
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-shopping-bag" aria-hidden="true" />
                                            $147.00 <i className="fa fa-angle-down" />
                                        </a>
                                        <span className="cart_quantity">2</span>
                                        {/*mini cart*/}
                                        <div className="mini_cart">
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="#">
                                                        <img src="/img/s-product/product.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart_info">
                                                    <a href="#">Sit voluptatem rhoncus sem lectus</a>
                                                    <p>
                                                        Qty: 1 X <span> $60.00 </span>
                                                    </p>
                                                </div>
                                                <div className="cart_remove">
                                                    <a href="#">
                                                        <i className="ion-android-close" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="#">
                                                        <img src="/img/s-product/product2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart_info">
                                                    <a href="#">Natus erro at congue massa commodo</a>
                                                    <p>
                                                        Qty: 1 X <span> $60.00 </span>
                                                    </p>
                                                </div>
                                                <div className="cart_remove">
                                                    <a href="#">
                                                        <i className="ion-android-close" />
                                                    </a>
                                                </div>
                                            </div>
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
                                                    <a href="cart.html">View cart</a>
                                                </div>
                                                <div className="cart_button">
                                                    <a href="checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*mini cart end*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*sticky header area end*/}
            {/*breadcrumbs area start*/}
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li>
                                        <a href="index.html">home</a>
                                    </li>
                                    <li>Camera &amp; Video </li>
                                    <li>shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*shop  area start*/}
            <div className="shop_area shop_reverse mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            {/*sidebar widget start*/}
                            <aside className="sidebar_widget">
                                <div className="widget_inner">
                                    <div className="widget_list widget_categories">
                                        <h2>Product categories</h2>
                                        <ul>
                                            <li>
                                                <a href="#">Cameras &amp; Camcoders</a>
                                            </li>
                                            <li className="widget_sub_categories">
                                                <a href="javascript:void(0)">Computer &amp; Networking</a>
                                                <ul className="widget_dropdown_categories">
                                                    <li>
                                                        <a href="#">Computer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Networking</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Games &amp; Consoles</a>
                                            </li>
                                            <li>
                                                <a href="#">Headphone &amp; Speaker</a>
                                            </li>
                                            <li>
                                                <a href="#">Movies &amp; Video Games</a>
                                            </li>
                                            <li>
                                                <a href="#">Smartphone</a>{" "}
                                            </li>
                                            <li>
                                                <a href="#">Uncategorized</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_filter">
                                        <h2>Filter by price</h2>
                                        <form action="#">
                                            <div id="slider-range" />
                                            <button type="submit">Filter</button>
                                            <input type="text" name="text" id="amount" />
                                        </form>
                                    </div>
                                    <div className="widget_list">
                                        <h2>Compare Products</h2>
                                        <div className="recent_product_container">
                                            <article className="recent_product_list">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <a href="product-details.html">
                                                            <img src="/img/product/product1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3>
                                                            <a href="product-details.html">
                                                                Natus erro at congue
                                                            </a>
                                                        </h3>
                                                        <div className="product_ratings">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="price_box">
                                                            <span className="old_price">$70.00</span>
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </article>
                                            <article className="recent_product_list">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <a href="product-details.html">
                                                            <img src="/img/product/product2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3>
                                                            <a href="product-details.html">Auctor gravida enim</a>
                                                        </h3>
                                                        <div className="product_ratings">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="price_box">
                                                            <span className="old_price">$70.00</span>
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </article>
                                            <article className="recent_product_list">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <a href="product-details.html">
                                                            <img src="/img/product/product24.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3>
                                                            <a href="product-details.html">
                                                                Cillum dolore tortor
                                                            </a>
                                                        </h3>
                                                        <div className="product_ratings">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="ion-android-star-outline" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="price_box">
                                                            <span className="old_price">$70.00</span>
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="widget_list tags_widget">
                                        <h2>Product tags</h2>
                                        <div className="tag_cloud">
                                            <a href="#">blouse</a>
                                            <a href="#">clothes</a>
                                            <a href="#">fashion</a>
                                            <a href="#">handbag</a>
                                            <a href="#">laptop</a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            {/*sidebar widget end*/}
                        </div>
                        <div className="col-lg-9 col-md-12">
                            {/*shop wrapper start*/}
                            {/*shop toolbar start*/}
                            <div className="shop_toolbar_wrapper">
                                <div className="shop_toolbar_btn">
                                    <button
                                        data-role="grid_3"
                                        type="button"
                                        className="active btn-grid-3"
                                        data-bs-toggle="tooltip"
                                        title={3}
                                    />
                                    <button
                                        data-role="grid_4"
                                        type="button"
                                        className=" btn-grid-4"
                                        data-bs-toggle="tooltip"
                                        title={4}
                                    />
                                    <button
                                        data-role="grid_list"
                                        type="button"
                                        className="btn-list"
                                        data-bs-toggle="tooltip"
                                        title="List"
                                    />
                                </div>
                                <div className=" niceselect_option">
                                    <form className="select_option" action="#">
                                        <select name="orderby" id="short">
                                            <option selected="" value={1}>
                                                Sort by average rating
                                            </option>
                                            <option value={2}>Sort by popularity</option>
                                            <option value={3}>Sort by newness</option>
                                            <option value={4}>Sort by price: low to high</option>
                                            <option value={5}>Sort by price: high to low</option>
                                            <option value={6}>Product Name: Z</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="page_amount">
                                    <p>Showing 1–9 of 21 results</p>
                                </div>
                            </div>
                            {/*shop toolbar end*/}

                            {/* Product Components */}
                            <div className="row shop_wrapper">

                                {products.map((product) => {

                                    return (
                                        <Product 
                                        primary_img={product.primary_img}
                                        secondary_img={product.secondary_img}
                                        oldprice={product.oldprice}
                                        currentprice={product.currentprice}
                                        productname={product.productname}
                                        />
                                    )
                                })}
                                
                                {/* <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product1.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product2.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Natus erro at congue massa commodo sit
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Natus erro at congue massa commodo sit
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product3.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product4.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Auctor gravida enim pellentesque quam ut risus
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Auctor gravida enim pellentesque quam ut risus
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product5.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product6.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Auctor gravida enim pellentesque quam ut risus
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Auctor gravida enim pellentesque quam ut risus
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product7.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product8.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Cillum dolore tortor nisl fermentum quam
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Cillum dolore tortor nisl fermentum quam
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product9.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product10.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Condimentum posuere consectetur urna
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Condimentum posuere consectetur urna
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product11.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product12.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Cras neque metus eugiat felis sem
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Cras neque metus eugiat felis sem
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product13.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product14.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Donec tempus pretium arcu et faucibus commodo
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Donec tempus pretium arcu et faucibus commodo
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product15.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product16.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Duis pulvinar obortis eleifend elementum
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Duis pulvinar obortis eleifend elementum
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product17.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product18.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Epicuri per lobortis eleifend elementum viverra odio
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Epicuri per lobortis eleifend elementum viverra odio
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product19.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product20.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Natus erro at congue massa commodo sit
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Natus erro at congue massa commodo sit
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product21.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product22.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Cras neque metus eugiat felis sem
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Cras neque metus eugiat felis sem
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src="/img/product/product23.jpg" alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src="/img/product/product24.jpg" alt="" />
                                                </a>
                                                <div className="label_product">
                                                    <span className="label_sale">sale</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html" title="Add to Wishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                            </a>
                                                        </li>
                                                        <li className="compare">
                                                            <a href="#" title="compare">
                                                                <span className="ion-levels" />
                                                            </a>
                                                        </li>
                                                        <li className="quick_button">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modal_box"
                                                                title="quick view"
                                                            >
                                                                {" "}
                                                                <span className="ion-ios-search-strong" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add_to_cart">
                                                    <a href="cart.html" title="add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product_content grid_content">
                                                <div className="price_box">
                                                    <span className="old_price">$86.00</span>
                                                    <span className="current_price">$79.00</span>
                                                </div>
                                                <div className="product_ratings">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-android-star-outline" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="product_name grid_name">
                                                    <a href="product-details.html">
                                                        Cras neque honcus consectetur magna
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="product_content list_content">
                                                <div className="left_caption">
                                                    <div className="price_box">
                                                        <span className="old_price">$86.00</span>
                                                        <span className="current_price">$79.00</span>
                                                    </div>
                                                    <h3 className="product_name">
                                                        <a href="product-details.html">
                                                            Cras neque honcus consectetur magna
                                                        </a>
                                                    </h3>
                                                    <div className="product_ratings">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ion-android-star-outline" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_desc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco,Proin lectus ipsum,
                                                            gravida et mattis vulputate, tristique ut lectus
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right_caption">
                                                    <div className="add_to_cart">
                                                        <a href="cart.html" title="add to cart">
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="wishlist">
                                                                <a href="wishlist.html" title="Add to Wishlist">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                                                                    Add to Wishlist
                                                                </a>
                                                            </li>
                                                            <li className="compare">
                                                                <a href="#" title="compare">
                                                                    <span className="ion-levels" /> Compare
                                                                </a>
                                                            </li>
                                                            <li className="quick_button">
                                                                <a
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modal_box"
                                                                    title="quick view"
                                                                >
                                                                    {" "}
                                                                    <span className="ion-ios-search-strong" /> Quick
                                                                    View
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div> */}
                            </div>
                            <div className="shop_toolbar t_bottom">
                                <div className="pagination">
                                    <ul>
                                        <li className="current">1</li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li className="next">
                                            <a href="#">next</a>
                                        </li>
                                        <li>
                                            <a href="#">&gt;&gt;</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*shop toolbar end*/}
                            {/*shop wrapper end*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*shop  area end*/}
            {/*footer area start*/}
            <footer className="footer_widgets">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="widgets_container contact_us">
                                    <div className="footer_logo">
                                        <a href="#">
                                            <img src="/img/logo/logo.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="footer_contact">
                                        <p>
                                            We are a team of designers and developers that create high
                                            quality HTML Template, Woocommerce, Shopify Theme.
                                        </p>
                                        <p>
                                            <span>Address</span> Your address goes here.
                                        </p>
                                        <p>
                                            <span>Mobile: </span>
                                            <a href="tel:0123456789">0123456789</a> –{" "}
                                            <a href="tel:0123456789">0123456789</a>{" "}
                                        </p>
                                        <p>
                                            <span>Support: </span>
                                            <a href="mailto:demo@example.com">demo@example.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="widgets_container widget_menu">
                                    <h3>Information</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">Delivery Information</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="services.html">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Returns</a>
                                            </li>
                                            <li>
                                                <a href="#">Gift Certificates</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="widgets_container widget_menu">
                                    <h3>My Account</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li>
                                                <a href="#">My Account</a>
                                            </li>
                                            <li>
                                                <a href="#">Order History</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wish List</a>
                                            </li>
                                            <li>
                                                <a href="#">Newsletter</a>
                                            </li>
                                            <li>
                                                <a href="#">Affiliate</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">International Orders</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="widgets_container newsletter">
                                    <h3>Follow Us</h3>
                                    <div className="footer_social_link">
                                        <ul>
                                            <li>
                                                <a className="facebook" href="#" title="Facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="twitter" href="#" title="Twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="instagram" href="#" title="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="linkedin" href="#" title="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="rss" href="#" title="rss">
                                                    <i className="fa fa-rss" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="subscribe_form">
                                        <h3>Join Our Newsletter Now</h3>
                                        <form id="mc-form" className="mc-form footer-newsletter">
                                            <input
                                                id="mc-email"
                                                type="email"
                                                autoComplete="off"
                                                placeholder="Your email address..."
                                            />
                                            <button id="mc-submit">Subscribe!</button>
                                        </form>
                                        {/* mailchimp-alerts Start */}
                                        <div className="mailchimp-alerts text-centre">
                                            <div className="mailchimp-submitting" />
                                            {/* mailchimp-submitting end */}
                                            <div className="mailchimp-success" />
                                            {/* mailchimp-success end */}
                                            <div className="mailchimp-error" />
                                            {/* mailchimp-error end */}
                                        </div>
                                        {/* mailchimp-alerts end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright_area">
                                    <p className="copyright-text">
                                        © 2022 <a href="index.html">Junko</a>. Made with{" "}
                                        <i className="fa fa-heart text-danger" /> by{" "}
                                        <a href="https://hasthemes.com/" target="_blank">
                                            HasThemes
                                        </a>{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="footer_payment text-end">
                                    <a href="#">
                                        <img src="/img/icon/payment.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*footer area end*/}
            {/* modal area start*/}
            <div
                className="modal fade"
                id="modal_box"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="modal_tab">
                                            <div className="tab-content product-details-large">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="tab1"
                                                    role="tabpanel"
                                                >
                                                    <div className="modal_tab_img">
                                                        <a href="#">
                                                            <img src="/img/product/product1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#">
                                                            <img src="/img/product/product2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#">
                                                            <img src="/img/product/product3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#">
                                                            <img src="/img/product/product5.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal_tab_button">
                                                <ul
                                                    className="nav product_navactive owl-carousel"
                                                    role="tablist"
                                                >
                                                    <li>
                                                        <a
                                                            className="nav-link active"
                                                            data-bs-toggle="tab"
                                                            href="#tab1"
                                                            role="tab"
                                                            aria-controls="tab1"
                                                            aria-selected="false"
                                                        >
                                                            <img src="/img/product/product1.jpg" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav-link"
                                                            data-bs-toggle="tab"
                                                            href="#tab2"
                                                            role="tab"
                                                            aria-controls="tab2"
                                                            aria-selected="false"
                                                        >
                                                            <img src="/img/product/product2.jpg" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav-link button_three"
                                                            data-bs-toggle="tab"
                                                            href="#tab3"
                                                            role="tab"
                                                            aria-controls="tab3"
                                                            aria-selected="false"
                                                        >
                                                            <img src="/img/product/product3.jpg" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav-link"
                                                            data-bs-toggle="tab"
                                                            href="#tab4"
                                                            role="tab"
                                                            aria-controls="tab4"
                                                            aria-selected="false"
                                                        >
                                                            <img src="/img/product/product5.jpg" alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="modal_right">
                                            <div className="modal_title mb-10">
                                                <h2>Handbag feugiat</h2>
                                            </div>
                                            <div className="modal_price mb-10">
                                                <span className="new_price">$64.99</span>
                                                <span className="old_price">$78.99</span>
                                            </div>
                                            <div className="modal_description mb-15">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Mollitia iste laborum ad impedit pariatur esse optio
                                                    tempora sint ullam autem deleniti nam in quos qui nemo
                                                    ipsum numquam, reiciendis maiores quidem aperiam, rerum
                                                    vel recusandae{" "}
                                                </p>
                                            </div>
                                            <div className="variants_selects">
                                                <div className="variants_size">
                                                    <h2>size</h2>
                                                    <select className="select_option">
                                                        <option selected="" value={1}>
                                                            s
                                                        </option>
                                                        <option value={1}>m</option>
                                                        <option value={1}>l</option>
                                                        <option value={1}>xl</option>
                                                        <option value={1}>xxl</option>
                                                    </select>
                                                </div>
                                                <div className="variants_color">
                                                    <h2>color</h2>
                                                    <select className="select_option">
                                                        <option selected="" value={1}>
                                                            purple
                                                        </option>
                                                        <option value={1}>violet</option>
                                                        <option value={1}>black</option>
                                                        <option value={1}>pink</option>
                                                        <option value={1}>orange</option>
                                                    </select>
                                                </div>
                                                <div className="modal_add_to_cart">
                                                    <form action="#">
                                                        <input
                                                            min={0}
                                                            max={100}
                                                            step={2}
                                                            defaultValue={1}
                                                            type="number"
                                                        />
                                                        <button type="submit">add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal_social">
                                                <h2>Share this product</h2>
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#">
                                                            <i className="fa fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#">
                                                            <i className="fa fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#">
                                                            <i className="fa fa-pinterest" />
                                                        </a>
                                                    </li>
                                                    <li className="google-plus">
                                                        <a href="#">
                                                            <i className="fa fa-google-plus" />
                                                        </a>
                                                    </li>
                                                    <li className="linkedin">
                                                        <a href="#">
                                                            <i className="fa fa-linkedin" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal area end*/}
        </>
    )
}

export default Home