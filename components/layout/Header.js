import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next'
import {connect} from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const languageMap = {
    'uk': 'Українська',
    'en': 'English',
    'ru': 'Русский'
}

const Header = ({
                    totalCartItems,
                    totalCompareItems,
                    toggleClick,
                    totalWishlistItems,
                }) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const {locale, locales, asPath} = useRouter();
    const {t} = useTranslation('header')
    console.log(locale, locales, asPath)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left
                    </span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="header-info">
                                    <ul>
                                        <li>
                                            <Link href="/page-about">
                                                <a>{t('links_top')}</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Доставка</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Оплата</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Повернення</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Лист побажань</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Зв'язатися з нами</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 special-text">
                                <div className="text-center">
                                    <div id="news-flash" className="d-inline-block">
                                        <ul>
                                            <li>
                                                Дуууже солодкі ціни
                                                <Link href="/">
                                                    <a> Перейти до акції</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>
                                            Треба допомога - дзвони: <strong className="text-brand"> +38 (095)
                                            223-17-10</strong>
                                        </li>
                                        <li className='language-dropdown-trigger'>
                                            <Link href="/">
                                                <a className="language-dropdown-active">
                                                    <i className="fi-rs-world"></i>
                                                    {languageMap[locale]}
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="language-dropdown">
                                                {locales.map((locale, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <Link href={asPath} locale={locale}>
                                                                <a>
                                                                    <img src={`/assets/imgs/theme/flag-${locale}.webp`} alt={`${locale}`} />
                                                                    {languageMap[locale]}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                                {/*<li>*/}
                                                {/*    <Link href="">*/}
                                                {/*        <a>*/}
                                                {/*            <img src="/assets/imgs/theme/flag-ru.png" alt="" />*/}
                                                {/*            Pусский*/}
                                                {/*        </a>*/}
                                                {/*    </Link>*/}
                                                {/*</li>*/}
                                                {/*<li>*/}
                                                {/*    <Link href="en">*/}
                                                {/*        <a>*/}
                                                {/*            <img src="/assets/imgs/theme/flag-en.png" alt="" />*/}
                                                {/*            English*/}
                                                {/*        </a>*/}
                                                {/*    </Link>*/}
                                                {/*</li>*/}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/imgs/theme/expetro-logo.png" alt="logo"/>
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search/>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="search-location">
                                            <form action="#">
                                                <select className="select-active">
                                                    <option>Your Location</option>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>Arizona</option>
                                                    <option>Delaware</option>
                                                    <option>Florida</option>
                                                    <option>Georgia</option>
                                                    <option>Hawaii</option>
                                                    <option>Indiana</option>
                                                    <option>Maryland</option>
                                                    <option>Nevada</option>
                                                    <option>New Jersey</option>
                                                    <option>New Mexico</option>
                                                    <option>New York</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <img className="svgInject" alt="Evara"
                                                         src="/assets/imgs/theme/icons/icon-heart.svg"/>
                                                    <span className="pro-count blue">{totalWishlistItems}</span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <span className="lable">Wishlist</span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                <a className="mini-cart-icon">
                                                    <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg"/>
                                                    <span className="pro-count blue">{totalCartItems}</span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-cart">
                                                <a>
                                                    <span className="lable">Cart</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar"}>
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/imgs/theme/logo.svg" alt="logo"/>
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a className="categories-button-active" onClick={handleToggle}>
                                        <span className="fi-rs-apps"></span>
                                        <span className="et">Дивитись каталог</span>
                                        <i className="fi-rs-angle-down"></i>
                                    </a>

                                    <div
                                        className={isToggled ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open" : "categories-dropdown-wrap categories-dropdown-active-large font-heading"}>
                                        <div className="d-flex categori-dropdown-inner">
                                            <CategoryProduct2/>
                                            <CategoryProduct3/>
                                        </div>
                                        <div className="more_slide_open" style={{display: "none"}}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-1.svg" alt=""/>
                                                                Milks and Dairies
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-2.svg" alt=""/>
                                                                Clothing & beauty
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-3.svg" alt=""/>
                                                                Wines & Drinks
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-4.svg" alt=""/>
                                                                Fresh Seafood
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            <span className="icon"></span> <span
                                            className="heading-sm-1">Show more...</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                            <li className="hot-deals">
                                                <img src="/assets/imgs/theme/icons/icon-hot.svg" alt="hot deals"/>
                                                <Link href="/products">
                                                    <a>Вигідні пропозиції</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    {/*className="active"*/}
                                                    <a>
                                                        Іграшки
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Підголівники</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/products'>
                                                    <a>
                                                        Посуд
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/products'>
                                                    <a>
                                                        Розвиток та творчість
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    <a>
                                                        Блог
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/blog-category-grid">
                                                            <a>Blog Category Grid</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-list">
                                                            <a>Blog Category List</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-big">
                                                            <a>Blog Category Big</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-fullwidth">
                                                            <a>Blog Category Wide</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a>
                                                                Single Post
                                                                <i className="fi-rs-angle-right"></i>
                                                            </a>
                                                        </Link>
                                                        <ul className="level-menu level-menu-modify">
                                                            <li>
                                                                <Link href="/blog-post-left">
                                                                    <a>Left Sidebar</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/blog-post-right">
                                                                    <a>Right Sidebar</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/blog-post-fullwidth">
                                                                    <a>No Sidebar</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Контакт</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img src="/assets/imgs/theme/icons/icon-headphone.svg" alt="hotline"/>

                                <p>
                                    1900 - 888<span>24/7 Support Center</span>
                                </p>
                            </div>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white" onClick={toggleClick}>
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>

                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img alt="Evara" src="/assets/imgs/theme/icons/icon-heart.svg"/>
                                                <span className="pro-count white">{totalWishlistItems}</span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg"/>
                                                <span className="pro-count white">{totalCartItems}</span>
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img alt="Evara"
                                                                     src="/assets/imgs/shop/thumbnail-3.jpg"/>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>Plain Striola Shirts</a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img alt="Evara"
                                                                     src="/assets/imgs/shop/thumbnail-4.jpg"/>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>Macbook Pro 2022</a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
