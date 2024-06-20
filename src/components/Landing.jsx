import dummyImage from "../assets/smfOrangeLogo-removebg-preview.png";
import { Button } from "@mui/material";

export const Landing = () => {
    return (
        <>
            <section className="landing-container">
                <div className="container">
                    <div className="landing-wrapper">
                        <div className="landing-image">
                            <img src={dummyImage} alt="dummy image" />
                        </div>
                        <div className="content-wrapper">
                            <h2 className="header-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, molestiae?</h2>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sed saepe culpa, omnis architecto doloremque magni aut magnam maiores ea.</p>
                            </div>
                            <div>
                                <Button>Register With Us</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}