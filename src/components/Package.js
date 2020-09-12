import React from "react";

const Package = ({details, index}) => (
  <div className={ index == 1 || index == 3 ?
    "text-white col-12 col-md-3 d-flex flex-column bg-gray" :
    "text-white col-12 col-md-3 d-flex flex-column bg-dark-gray" }>

    <h1 className="my-auto package-card text-uppercase">{details.name} </h1>

  </div>
)

export default Package