import "../scss/components/upcomingmovie.scss"
import dummyImage from "../assets/images/dummyImage.jpeg";


export const UpcomingMovie = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="uc-movie-container">
                        <img className="uc-image" src={dummyImage} />
                        <div className="text-overlay">
                            <div className="text">
                                <p>Movie name</p>
                                <p>coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}