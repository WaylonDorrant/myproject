import React from "react";
import frame from "./img/Frame.png"

export default function Main() {
    return (
        <section className="main">
            <div className="container">
                <div className="main-content">
                    <div className="main-left">
                        <img src={frame} alt="" />
                    </div>

                    <div className="main-right">
                        <div className="main-right-content">
                            <h1>
                                Design and Layout
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi molestias quasi
                                doloremque natus ducimus voluptatem! Iste, doloremque ullam! Atque facilis modi at eos
                                accusantium laudantium quam a dolore itaque.
                            </p>
                            <button>
                                WRITE ME
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}