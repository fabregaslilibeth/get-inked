import React from "react";

const Package = ({ details }) => (
      <div className="card col-12 col-md-3 mx-2">
         <div className="row">

           <div className="col-12 py-4 package-card-header">
             <h3>{ details.name }</h3>
           </div>

           <div className="col-12 py-1">
             <p>{ details.photographers } photographers</p>
           </div>

           <div className="col-12 py-1">
             <p>{ details.videographers } videographers & { details.lightsmen } lightsmen</p>
           </div>

           <div className="col-12 py-1">
             <p>{ details.video }</p>
           </div>

           <div className="col-12 py-1">
             <p>{ details.frame }</p>
           </div>

           <div className="col-12 py-1">
             <p>{ details.album }</p>
           </div>

         </div>
      </div>
)

export default Package