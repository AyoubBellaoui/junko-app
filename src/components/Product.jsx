import React from 'react'

function Product(props) {
    return (

        <>
            <div className="col-lg-4 col-md-4 col-12 ">
                                    <article className="single_product">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="product-details.html">
                                                    <img src={props.primary_img} alt="" />
                                                </a>
                                                <a className="secondary_img" href="product-details.html">
                                                    <img src={props.secondary_img} alt="" />
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
                                                    <span className="old_price">{props.oldprice}</span>
                                                    <span className="current_price">{props.currentprice}</span>
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
                                                        {props.productname}
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
        </>
    )
}

export default Product