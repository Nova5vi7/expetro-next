import { useEffect, useState } from "react";
import { appWithTranslation } from 'next-i18next';
// import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "react-responsive-modal/styles.css";
// import WOW from 'wowjs';
// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import '../public/assets/sass/vendors/bootstrap.min.css';
import '../public/assets/sass/vendors/uicons-regular-straight.css';
import "../public/assets/sass/main.scss";
import {wrapper} from "../redux/store";
import Preloader from "./../components/elements/Preloader";

function MyApp({ Component, pageProps }, ...props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        // new WOW.WOW({
        //     live: false
        //   }).init()
    }, []);
    return (
        <>
            {!loading ? (
                <StorageWrapper>
                    <Component {...pageProps} />
                    <ToastContainer />
                </StorageWrapper>
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default appWithTranslation(wrapper.withRedux(MyApp));
