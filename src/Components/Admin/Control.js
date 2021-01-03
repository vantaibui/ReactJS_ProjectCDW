import React from "react";
import { FormSearch } from "../../Components/Admin/FormSearch";
import { FormSort } from "../../Components/Admin/FormSort";

export const Control = () => {
  return (
    <div className="row mt-2">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <FormSearch />
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <FormSort />
      </div>
    </div>
  );
};
