import React from "react";

const HeadComp = () => {
  return (
    <>
      <header>
        <section className="mainTopbar">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-6  col-md-12 col-sm-12 ">
                <div className="leftSideMainTopBar">
                  <div className="nameInfo">
                    <span>Welcome to Import Export Nepal</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="rightSidemainTopBar">
                  <div className="language">
                    <div id="google_element"></div>
                    <script src="http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid ">
          <div className="topBar">
            <div className="topBarWrapper">
              <div className="row">
                <div className="col-md-3">
                  <div className="leftSideTopbar">
                    <a href="/">
                      <img src="https://picsum.photos/100" alt="_logo" />
                    </a>
                  </div>
                </div>
                <div className="col-5 middleSideTop">
                  <form action="search" method="get" className="d-flex">
                    <div className=" searhInput">
                      <input
                        type="text"
                        id="search-input"
                        name="product"
                        placeholder="Keyword here..."
                      />
                    </div>

                    <button className="btn btn-success">
                      <div className=" searchIcon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </button>
                  </form>
                </div>
                <div className="col-3 rightSideTop">
                  <div className="cartList">
                    <a className="link" href="/cart/">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      <p>My Cart</p>
                      <span className="badge">0</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="navbar-area">
          <div className="mobile-nav">
            <div className="container-fluid">
              <div className="mobile-menu">
                <div className="logo">
                  <div className=" small_device_Logo">
                    <a href="/cart/">
                      <img src="/static/assets/images/logo.png " alt="_logo" />
                    </a>

                    <div className="rightSideTop_mobile">
                      <div className="cartList_mobile">
                        <a className="link" href="/cart/">
                          <i className="fa-solid fa-cart-arrow-down"></i>
                          <span className="badge">0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="desktop-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav m-start">
                    <li className="nav-item">
                      <a href="/" className="nav-link active">
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/about-us" className="nav-link">
                        About Us
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>

                    <li className="nav-item">
                      <a href="/New-Arrival" className="nav-link">
                        New Arrival
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>

                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Product Catalog
                        <i className="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Money-Belt"
                            className="nav-link"
                          >
                            Money Belt
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Camera-Bag"
                            className="nav-link"
                          >
                            Camera Bag
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Ladies-Purses"
                            className="nav-link"
                          >
                            Ladies Purses
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Hemp-Backpack"
                            className="nav-link"
                          >
                            Hemp Backpack
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Hemp-Hats"
                            className="nav-link"
                          >
                            Hemp Hats
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Guitar-Bag"
                            className="nav-link"
                          >
                            Guitar Bag
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Handmade-Necklace"
                            className="nav-link"
                          >
                            Handmade Necklace
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Dreamcatcher"
                            className="nav-link"
                          >
                            Dreamcatcher
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Bottle-Case"
                            className="nav-link"
                          >
                            Bottle Case
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Handmade-Bracelet"
                            className="nav-link"
                          >
                            Handmade-Bracelet
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Coin-Purse"
                            className="nav-link"
                          >
                            Coin Purse
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Money-Pouch"
                            className="nav-link"
                          >
                            Money Pouch
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Clothing"
                            className="nav-link"
                          >
                            Clothing
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Handmade-Earrings"
                            className="nav-link"
                          >
                            Handmade Earrings
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Handmade-Headband"
                            className="nav-link"
                          >
                            Handmade Headband
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Shoulder-Bag"
                            className="nav-link"
                          >
                            Shoulder Bag
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            href="/Product-Catalog /Handmade-Keycase"
                            className="nav-link"
                          >
                            Handmade Keycase
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="/custom" className="nav-link">
                        Custom
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>

                    <li className="nav-item">
                      <a href="/blog" className="nav-link">
                        Blog
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>

                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        Contact
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>
                  </ul>
                </div>
                <a
                  className="navbar-brand"
                  href="https://picsum.photos/200/300"
                >
                  <p>
                    100% original products <br />
                  </p>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeadComp;
