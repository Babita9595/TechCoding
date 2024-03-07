import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
// import detailPage from "../../../../src/assets/courses/tech-img.jpg"
import detailImage from "../../../assets/courses/tech-img.jpg"


const DetailsPage = () => {
    return (
        <div>
            <Header />

            <div className="row">
                <div className="col-6">
                    <div className="card" style={{ width: "500px", height: "600px" }}>
                        <img className="card-img-top" height="600px" src={detailImage} alt="Card image cap" />
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <h4>Course Title</h4>
                        <p>course description</p>
                    </div>
                    <div>
                        <span>rating</span> <span>reviews</span>
                        <p>Pricing</p>
                    </div>
                    <button>payment </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailsPage;