import dummyImage from "../assets/images/dummyImage.jpeg";
import { Button } from "@mui/material";

export const LatestMovie = () => {
    return (
        <>
            <section className="landing-container">
                <div className="container">
                    <div className="landing-wrapper">
                        <div className="content-wrapper">
                            <h2 className="header-content">Our latest short-movie</h2>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sed saepe culpa, omnis architecto doloremque magni aut magnam maiores ea.</p>
                            </div>
                            <div>
                            <a className="btnStyle" href="#">
                                Subscribe our youtube channnel
                            </a>
                            </div>
                        </div>
                        <div className="landing-image">
                            <a href="https://youtu.be/zQkFslBsP58?si=iv_IReS6sWyEjhpd" target="blank">
                            <img src={dummyImage} alt="dummy image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}