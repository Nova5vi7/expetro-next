import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../config/index";
import { findProductIndex } from "../../util/util";

const ProductId = ({ product }) => {
    return (
        <>
        <Layout parent="Home" sub="Shop" subChild={product.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
    const request = await fetch(`${server}/static/product.json`);
    const data = await request.json();

    const index = findProductIndex(data, context.query.slug);
    // console.log(params);

    return {
        props: {
            product: data[index],
            ...(await serverSideTranslations(context.locale, ['header', 'footer']))
        },
    }
}

export default ProductId;
