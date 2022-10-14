import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import FeatchTab from "../components/ecommerce/fetchTab";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import Bottom from "../components/elements/Bottom";
import QuickView from "./../components/ecommerce/QuickView";
import Banner5 from "./../components/elements/Banner5";
import Deals1 from "./../components/elements/Deals1";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "./../components/sliders/Intro1";
import Link from "next/link";
import {server} from "../config";

export default function Home({catAll, active}) {
    return (
        <>
            <Layout noBreadcrumb="d-none">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <Intro1/>
                        </div>
                    </div>
                </section>

                <section className="popular-categories section-padding">
                    <div className="container wow animate__fadeIn animate__animated">
                        <div className="section-title">
                            <div className="title">
                                <h3>Featured Categories</h3>
                                <ul className="list-inline nav nav-tabs links">
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">Cake & Milk</a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">Coffes & Teas</a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link active">Pet Foods</a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">Vegetables</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <CategorySlider/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banners mb-25">
                    <div className="container">
                        <div className="row">
                            <Banner5/>
                        </div>
                    </div>
                </section>

                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="col-lg-12">
                            <CategoryTab products={catAll} active={active}/>
                        </div>
                    </div>
                </section>

                <QuickView/>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const request = await fetch(`${server}/static/product.json`);
    const allProducts = await request.json();
    const catAll = allProducts.filter((item) => item.category);
    const active = '1'

    return {
        props: {
            catAll,
            active,
            ...(await serverSideTranslations(context.locale, ['header', 'footer']))
        }, // will be passed to the page component as props
    }
}
