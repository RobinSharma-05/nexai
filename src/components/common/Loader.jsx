import React, { useEffect, useState } from "react";
import Preloader_img from '../../assets/images/webp/earth_bg_img.webp'
function Loader() {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
                >
                    <div className="d-flex justify-content-center align-items-center flex-column text-center">
                        <div className="loader position-relative">
                            <img className="w-75 Preloader_img animation_preloader" src={Preloader_img} alt="" />
                            <div className=' PreloaderShadow position-absolute '></div>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    );
}

export default Loader;