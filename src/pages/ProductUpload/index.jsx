import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const ProductUpload = () => {
  return (
    <div className="py-[60px]">
      <Breadcrumb
        Heading={"Product Upload"}
        LinkNav={"product"}
        CurrentRoute={"upload"}
      />
    </div>
  );
};

export default ProductUpload;
