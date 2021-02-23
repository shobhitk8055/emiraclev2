import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div>
          <section className="tns-carousel tns-controls-lg">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;responsive&quot;: {&quot;0&quot;:{&quot;nav&quot;:true, &quot;controls&quot;: false},&quot;992&quot;:{&quot;nav&quot;:false, &quot;controls&quot;: true}}}">
              {/* Item*/}
              <div className="px-lg-5" style={{backgroundColor: '#3aafd2'}}>
                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="img/home/hero-slider/01.jpg" alt="Summer Collection" />
                  <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{maxWidth: '42rem', zIndex: 10}}>
                    <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                      <h3 className="h2 text-light fw-light pb-1 from-start">Has just arrived!</h3>
                      <h2 className="text-light display-5 from-start delay-1">Huge Summer Collection</h2>
                      <p className="fs-lg text-light pb-3 from-start delay-2">Swimwear, Tops, Shorts, Sunglasses &amp; much more...</p>
                      <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item*/}
              <div className="px-lg-5" style={{backgroundColor: '#f5b1b0'}}>
                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="img/home/hero-slider/02.jpg" alt="Women Sportswear" />
                  <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{maxWidth: '42rem', zIndex: 10}}>
                    <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                      <h3 className="h2 text-light fw-light pb-1 from-bottom">Hurry up! Limited time offer.</h3>
                      <h2 className="text-light display-5 from-bottom delay-1">Women Sportswear Sale</h2>
                      <p className="fs-lg text-light pb-3 from-bottom delay-2">Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...</p>
                      <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item*/}
              <div className="px-lg-5" style={{backgroundColor: '#eba170'}}>
                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="img/home/hero-slider/03.jpg" alt="Men Accessories" />
                  <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style={{maxWidth: '42rem', zIndex: 10}}>
                    <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                      <h3 className="h2 text-light fw-light pb-1 from-top">Complete your look with</h3>
                      <h2 className="text-light display-5 from-top delay-1">New Men's Accessories</h2>
                      <p className="fs-lg text-light pb-3 from-top delay-2">Hats &amp; Caps, Sunglasses, Bags &amp; much more...</p>
                      <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container position-relative pt-3 pt-lg-0 pb-5 mt-lg-n10" style={{zIndex: 10}}>
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="card border-0 shadow-lg">
                  <div className="card-body px-3 pt-grid-gutter pb-0">
                    <div className="row g-0 ps-1">
                      <div className="col-sm-4 px-2 mb-grid-gutter"><a className="d-block text-center text-decoration-none me-1" href="shop-grid-ls.html"><img className="d-block rounded mb-3" src="img/home/categories/cat-sm01.jpg" alt="Men" />
                          <h3 className="fs-base pt-1 mb-0">Men</h3></a></div>
                      <div className="col-sm-4 px-2 mb-grid-gutter"><a className="d-block text-center text-decoration-none me-1" href="shop-grid-ls.html"><img className="d-block rounded mb-3" src="img/home/categories/cat-sm02.jpg" alt="Women" />
                          <h3 className="fs-base pt-1 mb-0">Women</h3></a></div>
                      <div className="col-sm-4 px-2 mb-grid-gutter"><a className="d-block text-center text-decoration-none me-1" href="shop-grid-ls.html"><img className="d-block rounded mb-3" src="img/home/categories/cat-sm03.jpg" alt="Kids" />
                          <h3 className="fs-base pt-1 mb-0">Kids</h3></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container pt-md-3 pb-5 mb-md-3">
            <h2 className="h3 text-center">Trending products</h2>
            <div className="row pt-4 mx-n2">
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/01.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sneakers &amp; Keds</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$154.<small>00</small></span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" /><i className="star-rating-icon ci-star" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-75" />
                        <label className="form-option-label" htmlFor="s-75">7.5</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-80" defaultChecked />
                        <label className="form-option-label" htmlFor="s-80">8</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-85" />
                        <label className="form-option-label" htmlFor="s-85">8.5</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-90" />
                        <label className="form-option-label" htmlFor="s-90">9</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card"><span className="badge badge-danger badge-shadow">Sale</span>
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/02.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women’s T-shirt</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Cotton Lace Blouse</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$28.<small>50</small></span>
                        <del className="fs-sm text-muted">$38.<small>50</small></del>
                      </div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" /><i className="star-rating-icon ci-star" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="white" defaultChecked />
                        <label className="form-option-label rounded-circle" htmlFor="white"><span className="form-option-color rounded-circle" style={{backgroundColor: '#eaeaeb'}} /></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="blue" />
                        <label className="form-option-label rounded-circle" htmlFor="blue"><span className="form-option-color rounded-circle" style={{backgroundColor: '#d1dceb'}} /></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="yellow" />
                        <label className="form-option-label rounded-circle" htmlFor="yellow"><span className="form-option-color rounded-circle" style={{backgroundColor: '#f4e6a2'}} /></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="pink" />
                        <label className="form-option-label rounded-circle" htmlFor="pink"><span className="form-option-color rounded-circle" style={{backgroundColor: '#f3dcff'}} /></label>
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <select className="form-select form-select-sm me-2">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <button className="btn btn-primary btn-sm" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    </div>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/03.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women’s Shorts</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mom High Waist Shorts</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$39.<small>50</small></span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="xs" />
                        <label className="form-option-label" htmlFor="xs">XS</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="s" defaultChecked />
                        <label className="form-option-label" htmlFor="s">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="m" />
                        <label className="form-option-label" htmlFor="m">M</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="l" />
                        <label className="form-option-label" htmlFor="l">L</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/07.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women's Swimwear</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Two-Piece Bikini in Print</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$18.<small>99</small></span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size4" id="xs3" defaultChecked />
                        <label className="form-option-label" htmlFor="xs3">XS</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size4" id="s3" />
                        <label className="form-option-label" htmlFor="s3">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size4" id="m3" />
                        <label className="form-option-label" htmlFor="m3">M</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/04.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sportswear</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Women Sports Jacket</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$68.<small>40</small></span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="xs2" defaultChecked />
                        <label className="form-option-label" htmlFor="xs2">XS</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="s2" />
                        <label className="form-option-label" htmlFor="s2">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="m2" />
                        <label className="form-option-label" htmlFor="m2">M</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="l2" />
                        <label className="form-option-label" htmlFor="l2">L</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/05.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Men’s Sunglasses</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Polarized Sunglasses</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-muted fs-sm">Out of stock</span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden"><a className="btn btn-secondary btn-sm d-block w-100 mb-2" href="shop-single-v1.html">View details</a>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/06.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Backpacks</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$79.<small>50</small></span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" /><i className="star-rating-icon ci-star" /><i className="star-rating-icon ci-star" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color2" id="khaki" defaultChecked />
                        <label className="form-option-label rounded-circle" htmlFor="khaki"><span className="form-option-color rounded-circle" style={{backgroundColor: '#97947c'}} /></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color2" id="jeans" />
                        <label className="form-option-label rounded-circle" htmlFor="jeans"><span className="form-option-color rounded-circle" style={{backgroundColor: '#99a8be'}} /></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color2" id="white2" />
                        <label className="form-option-label rounded-circle" htmlFor="white2"><span className="form-option-color rounded-circle" style={{backgroundColor: '#eaeaeb'}} /></label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
              {/* Product*/}
              <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                  <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/25.jpg" alt="Product" /></a>
                  <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women's Sneakers</a>
                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Leather High-Top Sneakers</a></h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price"><span className="text-accent">$215.<small>00</small></span></div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="text-center pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="s4-80" />
                        <label className="form-option-label" htmlFor="s4-80">8</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="s4-85" defaultChecked />
                        <label className="form-option-label" htmlFor="s4-85">8.5</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="s4-90" />
                        <label className="form-option-label" htmlFor="s4-90">9</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="s4-95" />
                        <label className="form-option-label" htmlFor="s4-95">9.5</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1" />Add to Cart</button>
                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1" />Quick view</a></div>
                  </div>
                </div>
                <hr className="d-sm-none" />
              </div>
            </div>
            <div className="text-center pt-3"><a className="btn btn-outline-accent" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1" /></a></div>
          </section>
          <section className="container pb-4 mb-md-3">
            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden rounded-3">
                  <div className="py-4 my-2 my-md-0 py-md-5 px-4 ms-md-3 text-center text-sm-start">
                    <h4 className="fs-lg fw-light mb-2">Hurry up! Limited time offer</h4>
                    <h3 className="mb-4">Converse All Star on Sale</h3><a className="btn btn-primary btn-shadow btn-sm" href="#">Shop Now</a>
                  </div><img className="d-block ms-auto" src="img/shop/catalog/banner.jpg" alt="Shop Converse" />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100 justify-content-center bg-size-cover bg-position-center rounded-3" style={{backgroundImage: 'url(img/blog/banner-bg.jpg)'}}>
                  <div className="py-4 my-2 px-4 text-center">
                    <div className="py-1">
                      <h5 className="mb-2">Your Add Banner Here</h5>
                      <p className="fs-sm text-muted">Hurry up to reserve your spot</p><a className="btn btn-primary btn-shadow btn-sm" href="#">Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mb-4 pb-3 pb-sm-0 mb-sm-5">
            <div className="row">
              <div className="col-md-5">
                <div className="d-flex flex-column h-100 overflow-hidden rounded-3" style={{backgroundColor: '#e2e9ef'}}>
                  <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                    <div>
                      <h3 className="mb-1">Hoodie day</h3><a className="fs-md" href="shop-grid-ls.html">Shop hoodies<i className="ci-arrow-right fs-xs align-middle ms-1" /></a>
                    </div>
                    <div className="tns-carousel-controls" id="hoodie-day">
                      <button type="button"><i className="ci-arrow-left" /></button>
                      <button type="button"><i className="ci-arrow-right" /></button>
                    </div>
                  </div><a className="d-none d-md-block mt-auto" href="shop-grid-ls.html"><img className="d-block w-100" src="img/home/categories/cat-lg04.jpg" alt="For Women" /></a>
                </div>
              </div>
              <div className="col-md-7 pt-4 pt-md-0">
                <div className="tns-carousel">
                  <div className="tns-carousel-inner" data-carousel-options="{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#hoodie-day&quot;}">
                    <div>
                      <div className="row mx-n2">
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/20.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/21.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$26.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static"><span className="badge badge-danger badge-shadow">Sale</span>
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/23.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$17.<small>99</small></span>
                                  <del className="fs-sm text-muted">24.<small>99</small></del>
                                </div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/51.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mono Color Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$21.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/24.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" /><i className="star-rating-icon ci-star" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/54.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mono Color Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$21.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Carousel item*/}
                    <div>
                      <div className="row mx-n2">
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/53.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mono Color Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$21.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/52.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Printed Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$25.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/22.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/56.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Printed Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$25.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/55.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-half active" /><i className="star-rating-icon ci-star" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                          <div className="card product-card card-static">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart" /></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/57.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                              <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$23.<small>99</small></span></div>
                                <div className="star-rating"><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star-filled active" /><i className="star-rating-icon ci-star" /><i className="star-rating-icon ci-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container py-lg-4 mb-4">
            <h2 className="h3 text-center pb-4">Shop by brand</h2>
            <div className="row">
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/01.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/02.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/03.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/04.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/05.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/06.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/07.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/08.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/09.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/10.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/11.png" style={{width: '150px'}} alt="Brand" /></a></div>
              <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="img/shop/brands/12.png" style={{width: '150px'}} alt="Brand" /></a></div>
            </div>
          </section>
          <section className="container-fluid px-0">
            <div className="row g-0">
              <div className="col-md-6"><a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary" href="blog-list-sidebar.html">
                  <div className="card-body text-center"><i className="ci-edit h3 mt-2 mb-4 text-primary" />
                    <h3 className="h5 mb-1">Read the blog</h3>
                    <p className="text-muted fs-sm">Latest store, fashion news and trends</p>
                  </div></a></div>
              <div className="col-md-6"><a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent" href="#">
                  <div className="card-body text-center"><i className="ci-instagram h3 mt-2 mb-4 text-accent" />
                    <h3 className="h5 mb-1">Follow on Instagram</h3>
                    <p className="text-muted fs-sm">#ShopWithCartzilla</p>
                  </div></a></div>
            </div>
          </section>
        </div>
      );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
