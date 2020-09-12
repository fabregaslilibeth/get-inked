import React from "react";

const Package = ({details, index}) => (
  <div className={ index%2 === 0  ?
    "text-white col-12 col-md-3 d-flex flex-column bg-gray" :
    "text-white col-12 col-md-3 d-flex flex-column bg-dark-gray" }>

    <h1 className="my-auto package-card text-uppercase">{details.name} </h1>
    <p className="package-description text-center text-span-color text-uppercase font-weight-bolder"><small>{details.description}</small></p>

  </div>
)

export default Package