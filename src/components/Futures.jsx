import React from "react";
import project from "./img/project.png"
import offer from "./img/offer-img.svg"
import project1 from "./img/project (1).png"
import agreement from "./img/agreement-img.svg"
import project2 from "./img/project (2).png"
import storage from "./img/storage-img.svg"


export default function Futures(){
    return(
        <section className="futures">
        <div className="container">
          <div className="futures-content">
            <div className="future">
              <img src={project} alt=""/>
                <div className="future-text">
                  <h3>
                    40+
                  </h3>
                  <span>
                    Projects
                  </span>
                </div>
            </div>


            <div className="future">
              <img src={offer} alt="" />
                <div className="future-text">
                  <h3>
                    40+
                  </h3>
                  <span>
                    Projects
                  </span>
                </div>
            </div>


            <div className="future">
              <img src={project1} alt="" />
                <div className="future-text">
                  <h3>
                    40+
                  </h3>
                  <span>
                    Projects
                  </span>
                </div>
            </div>


            <div className="future">
              <img src={agreement} alt=""/>
                <div className="future-text">
                  <h3>
                    40+
                  </h3>
                  <span>
                    Projects
                  </span>
                </div>
            </div>


            <div className="future">
              <img src={project2} alt=""/>
                <div className="future-text">
                  <h3>
                    40+
                  </h3>
                  <span>
                    Projects
                  </span>
                </div>
            </div>


            <div className="future">
              <img src={storage} alt=""/>
                <div className="future-text">
                  <h3>
                    40+
                  </h3>
                  <span>
                    Projects
                  </span>
                </div>
            </div>

          </div>
        </div>
      </section>
    )
}