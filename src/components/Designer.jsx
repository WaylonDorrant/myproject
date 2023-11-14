import React from "react";
import hero from "./img/hero-avatar.png"

export default function Designer(){
    return(
        <section className="designer">
        <div className="container">
          <div className="designer-content">

            <div className="designer-left">
              <h3>Layout Designer</h3>

              <h2>Til Schweiger</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis veritatis, voluptate nesciunt eum fugiat quae fuga odio ab ad assumenda tempore, provident numquam sequi vitae saepe earum quidem voluptatem.</p>

              <button>WRITE ME</button>

            </div>

            <div className="designer-right">
              <img src={hero} alt=""/>
            </div>

          </div>
        </div>

      </section> 
    )
}