import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import useClickOutside from "../../util/outsideClick";

const languageMap = {
    'uk': 'Українська',
    'en': 'English',
    'ru': 'Русский'
}

const MobileMenu = ({ isToggled, toggleClick }) => {
    const {t} = useTranslation('header')
    const {locale, locales, asPath} = useRouter();

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/expetro-logo.png"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder={t("search_text")}
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <div className="main-categori-wrap mobile-header-border">
                                <Link href="#">
                                    <a className="categori-button-active-2">
                                        <span className="fi-rs-apps"></span> {t("header_section_bottom.catalog_btn_text")}
                                    </a>
                                </Link>
                                <div className="categori-dropdown-wrap categori-dropdown-active-small">
                                    <ul>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-dress"></i>
                                                    Women's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-tshirt"></i>
                                                    Men's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-smartphone"></i>{" "}
                                                    Cellphones
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-desktop"></i>
                                                    Computer & Office
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-cpu"></i>
                                                    Consumer Electronics
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-home"></i>
                                                    Home & Garden
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-high-heels"></i>
                                                    Shoes
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-teddy-bear"></i>
                                                    Mother & Kids
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-kite"></i>
                                                    Outdoor fun
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li
                                        className={
                                            isActive.key == 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <Link href="/index">
                                            <a>{t("header_section_bottom.link_one")}</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 2
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                       <Link href="/shop-grid-right">
                                            <a>{t("header_section_bottom.link_two")}</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 3
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <Link href="#">
                                            <a>{t("header_section_bottom.link_three")}</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 5
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <Link href="#">
                                            <a>{t("header_section_bottom.link_four")}</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 4
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(4)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/blog-category-fullwidth">
                                            <a>{t("header_section_bottom.link_five")}</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 4
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
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
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Single Product Layout</a>
                                                </Link>
                                                <ul className="dropdown">
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
                                    <li
                                        className={
                                            isActive.key == 5
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <Link href="#">
                                            <a>{t("header_section_bottom.link_six")}</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 6
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(6)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>{t("language")}</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 6
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            {locales.map((locale, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={asPath} locale={locale}>
                                                            <a>
                                                                {languageMap[locale]}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <Link href="/page-contact">
                                    <a>{t("our_location")}</a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#">
                                    <a>+38 (095) 223-17-10</a>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">{t("sign_up")}</h5>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
