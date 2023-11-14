import React from "react";

export default function Website(){
    return(
        <section className="website">
        <div className="container">
          <h2 className="section-title">
            Do You Want Web-Site
          </h2>

          <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero blanditiis, laudantium quo in repellat reiciendis neque expedita sapiente vel ratione minus non fuga harum? Eveniet earum reiciendis nemo nihil et!</p>

          <form action="Your Name">
            <input type="Your Name" placeholder="Name" className="form-name" />


              <input type="Your Email" placeholder="Email" className="form-email" />

                <textarea placeholder="Messege" className="form-messege"></textarea>

                <button>Send it</button>
              </form>

            </div>
          </section>
    )
}