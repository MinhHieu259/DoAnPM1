import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home () {
    
    return (
        <div>
            <div className="click-closed"></div>

            <div className="box-collapse">
                <div className="title-box-d">
                    <h3 className="title-d">Search Property</h3>
                </div>
                <span className="close-box-collapse right-boxed bi bi-x"></span>
                <div className="box-collapse-wrap form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" >Keyword</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Type</label>
                                    <select className="form-control form-select form-control-a" id="Type">
                                        <option>All Type</option>
                                        <option>For Rent</option>
                                        <option>For Sale</option>
                                        <option>Open House</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">City</label>
                                    <select className="form-control form-select form-control-a" id="city">
                                        <option>All City</option>
                                        <option>Alabama</option>
                                        <option>Arizona</option>
                                        <option>California</option>
                                        <option>Colorado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Bedrooms</label>
                                    <select className="form-control form-select form-control-a" id="bedrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Garages</label>
                                    <select className="form-control form-select form-control-a" id="garages">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Bathrooms</label>
                                    <select className="form-control form-select form-control-a" id="bathrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Min Price</label>
                                    <select className="form-control form-select form-control-a" id="price">
                                        <option>Unlimite</option>
                                        <option>$50,000</option>
                                        <option>$100,000</option>
                                        <option>$150,000</option>
                                        <option>$200,000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">Search Property</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand" to="index.html">Estate<span className="color-b">Agency</span></Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" to="index.html">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="about.html">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="property-grid.html">Property</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="blog-grid.html">Blog</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item " to="property-single.html">Property Single</Link>
                                    <Link className="dropdown-item " to="blog-single.html">Blog Single</Link>
                                    <Link className="dropdown-item " to="agents-grid.html">Agents Grid</Link>
                                    <Link className="dropdown-item " to="agent-single.html">Agent Single</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <i className="bi bi-search"></i>
                    </button>

                </div>
            </nav>

            <div className="intro intro-carousel swiper position-relative">

                <div className="swiper-wrapper">

                    <div className="swiper-slide carousel-item-a intro-item bg-image">
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4 ">
                                                    <span className="color-b">204 </span> Mount
                                                    <br /> Olive Road Two
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <Link to="#"><span className="price-a">rent | $ 12.000</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide carousel-item-a intro-item bg-image">
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">204 </span> Rino
                                                    <br /> Venda Road Five
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <Link to="#"><span className="price-a">rent | $ 12.000</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide carousel-item-a intro-item bg-image">
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">204 </span> Alira
                                                    <br /> Roan Road One
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <Link to="#"><span className="price-a">rent | $ 12.000</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

            <main id="main">

                <section className="section-services section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Our Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-cart"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Lifestyle</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                            convallis a pellentesque
                                            nec, egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <Link to="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-calendar4-week"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Loans</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                                            aliquet elit, eget tincidunt
                                            nibh pulvinar a.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <Link to="#" className="link-c link-icon">Read more
                                            <span className="bi bi-calendar4-week"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-card-checklist"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Sell</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                            convallis a pellentesque
                                            nec, egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <Link to="#" className="link-c link-icon">Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-property section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Latest Properties</h2>
                                    </div>
                                    <div className="title-link">
                                        <Link to="property-grid.html">All Property
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="property-carousel" className="swiper">
                            <div className="swiper-wrapper">

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src="assets/img/property-6.jpg" alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <Link to="property-single.html">206 Mount
                                                            <br /> Olive Road Two</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 12.000</span>
                                                    </div>
                                                    <Link to="#" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </Link>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src="assets/img/property-3.jpg" alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <Link to="property-single.html">157 West
                                                            <br /> Central Park</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 12.000</span>
                                                    </div>
                                                    <Link to="property-single.html" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </Link>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src="assets/img/property-7.jpg" alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <Link to="property-single.html">245 Azabu
                                                            <br /> Nishi Park let</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 12.000</span>
                                                    </div>
                                                    <Link to="property-single.html" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </Link>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img src="assets/img/property-10.jpg" alt="" className="img-a img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <Link to="property-single.html">204 Montal
                                                            <br /> South Bela Two</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 12.000</span>
                                                    </div>
                                                    <Link to="property-single.html" className="link-a">Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </Link>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="propery-carousel-pagination carousel-pagination"></div>

                    </div>
                </section>

                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Best Agents</h2>
                                    </div>
                                    <div className="title-link">
                                        <Link to="agents-grid.html">All Agents
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-4.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <Link to="agent-single.html" className="link-two">Margaret Sotillo
                                                        <br /> Escala</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-1.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <Link to="agent-single.html" className="link-two">Stiven Spilver
                                                        <br /> Darw</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-5.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <Link to="agent-single.html" className="link-two">Emma Toledo
                                                        <br /> Cascada</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-news section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Latest News</h2>
                                    </div>
                                    <div className="title-link">
                                        <Link to="blog-grid.html">All News
                                            <span className="bi bi-chevron-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="news-carousel" className="swiper">
                            <div className="swiper-wrapper">

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="assets/img/post-2.jpg" alt="" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <Link to="#" className="category-b">House</Link>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <Link to="blog-single.html">House is comming
                                                            <br /> new</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="assets/img/post-5.jpg" alt="" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <Link to="#" className="category-b">Travel</Link>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <Link to="blog-single.html">Travel is comming
                                                            <br /> new</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="assets/img/post-7.jpg" alt="" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <Link to="#" className="category-b">Park</Link>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <Link to="blog-single.html">Park is comming
                                                            <br /> new</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="assets/img/post-3.jpg" alt="" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <Link to="#" className="category-b">Travel</Link>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <Link to="#">Travel is comming
                                                            <br /> new</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="news-carousel-pagination carousel-pagination"></div>
                    </div>
                </section>


                <section className="section-testimonials section-t8 nav-arrow-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Testimonials</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonial-carousel" className="swiper">
                            <div className="swiper-wrapper">

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img src="assets/img/testimonial-1.jpg" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                        debitis hic ber quibusdam
                                                        voluptatibus officia expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img src="assets/img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar" />
                                                    <h5 className="testimonial-author">Albert & Erika</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img src="assets/img/testimonial-2.jpg" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                        debitis hic ber quibusdam
                                                        voluptatibus officia expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img src="assets/img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar" />
                                                    <h5 className="testimonial-author">Pablo & Emma</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="testimonial-carousel-pagination carousel-pagination"></div>

                    </div>
                </section>

            </main>


            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">EstateAgency</h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a">
                                        Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                                        sed aute irure.
                                    </p>
                                </div>
                                <div className="w-footer-a">
                                    <ul className="list-unstyled">
                                        <li className="color-a">
                                            <span className="color-text-a">Phone .</span> contact@example.com
                                        </li>
                                        <li className="color-a">
                                            <span className="color-text-a">Email .</span> +54 356 945234
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">The Company</h3>
                                </div>
                                <div className="w-body-a">
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Site Map</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Legal</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Agent Admin</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Careers</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Affiliate</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Privacy Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">International sites</h3>
                                </div>
                                <div className="w-body-a">
                                    <ul className="list-unstyled">
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <Link to="#">Venezuela</Link>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <Link to="#">China</Link>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <Link to="#">Hong Kong</Link>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <Link to="#">Argentina</Link>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <Link to="#">Singapore</Link>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <Link to="#">Philippines</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav-footer">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">About</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">Property</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">Blog</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright
                                    <span className="color-a">EstateAgency</span> All Rights Reserved.
                                </p>
                            </div>
                            <div className="credits">

                                Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <div id="preloader"></div> */}
            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
        </div>

    );
}
export default Home;
