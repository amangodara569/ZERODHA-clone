import React from "react";
function Hero() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {/* if image in public = normal import , otherwise import as component  */}
          <img className="mb-5"
            src="media/images/fabio-sasso-vQjAdVIlteM-unsplash.jpg"
            alt="empty"
          />

          <h1 className="mb-5">Invest in everything</h1>

          <p className="mb-3">Online paltform to invest in stocks, mutual fucks</p>

          <button className="btn btn-primary fs-5 " style={{width : "20%", margin: "auto"}}>Sign IN now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;


//bootstrap
//p - padding pb - padding bottom 
//m - margin  mt - margin top
// center - text-center (apply in container)