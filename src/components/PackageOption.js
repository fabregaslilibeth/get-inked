import React from "react";

const PackageOption = ({ details }) => (
  <option value={details.id}>{details.name}</option>
)

export default PackageOption