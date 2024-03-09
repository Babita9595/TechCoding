import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
// import detailPage from "../../../../src/assets/courses/tech-img.jpg"
import detailImage from "../../../assets/courses/tech-img.jpg";
import "./DetailsPage.css";

const DetailsPage = () => {
  return (
    <div>
      <Header />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top"
                src={detailImage}
                alt="Course Preview"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="details-content text-center">
              <h2 className="course-title">Mastering React Development</h2>
              <p className="course-description">
                Dive deep into the world of React development and build
                powerful, scalable web applications with this comprehensive
                course. Whether you are a beginner or an experienced developer,
                you will learn the best practices and advanced techniques to
                master React.
              </p>

              <div className="ratings">
                <span className="rating">4.8</span>
                <span className="reviews">120 reviews</span>
              </div>

              <p className="pricing">Pricing: $49.99</p>

              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailsPage;
