import React from "react";
import Rectangle from "./img/Rectangle 5.png"
import play from "./img/play-button.png"

export default function Working(){
    return(
        <section className="working">
        <div className="container">
          <h2 className="section-title">
            How I'm Working
          </h2>
          <p className="section-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis veritatis quod minima dolores
            officiis commodi iste quaerat quasi ea voluptate iure ullam, doloribus saepe dolorem alias dolore
            nostrum. Laborum.
          </p>
          <div className="video-content">
            <img src={Rectangle} alt="" className="video" />
              <img src={play} alt="" className="video-button" />
              </div>
          </div>
      </section>
    )
}