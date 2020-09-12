import React, { Component, Fragment } from "react";

class Home extends Component {
  render() {
		const style1 = {
			backgroundImage: "url('./assets/img/bg-masthead.jpg')",
			backgroundRepeat:  "no-repeat",
			backgroundSize: "cover",
		};
		const style2 = {
			backgroundImage: "url('./assets/img/bg-masthead.jpg')",
			backgroundRepeat:  "no-repeat",
			backgroundSize: "cover",
		};
    return (<Fragment><header className="masthead text-white text-center" style={style1}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <h1 className="mb-5 text-white">Problem</h1>
                    <h3 className="mb-5">Among our group, we felt strongly that our own high school experiences lacked helpful, informative career exploration and access to key information. Therefore, our solution was motivated by the need to open the minds of high school
                        students to the plethora of career opportunities and resources available to them. </h3>
                </div>
            </div>
        </div>
    </header>
    <section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon"><i className="icon-screen-desktop m-auto text-primary" data-bs-hover-animate="pulse"></i></div>
                        <h3>Career Roadmaps</h3>
                        <p className="lead mb-0">Offering countless hours of content about different careers paths, and adding more continuously!</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon"><i className="icon-layers m-auto text-primary" data-bs-hover-animate="pulse"></i></div>
                        <h3>Connect with mentors</h3>
                        <p className="lead mb-0">Connect with certified mentors and professionals for career and academic advice.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon"><i className="icon-magnifier m-auto text-primary" data-bs-hover-animate="pulse"></i></div>
                        <h3>Easy Search Local Resources</h3>
                        <p className="lead mb-0">Find resources essential to helping you succeed!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="showcase"></section>
    <section className="call-to-action text-white text-center" style={style2}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <h2 className="mb-4">Ready to help in with our mission? Sign up now!</h2>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                    <form>
                        <div className="form-row">
                            <div className="col-12 col-md-9 mb-2 mb-md-0"><input className="form-control form-control-lg" type="email" placeholder="Enter your email..."/></div>
                            <div className="col-12 col-md-3"><button className="btn btn-primary btn-block btn-lg" type="submit">Sign up!</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
   </Fragment>);
  }
}
export default Home;
