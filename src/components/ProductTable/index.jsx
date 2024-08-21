import React from "react";
import { FarmProductData } from "../../utils/data/FarmingTableData";

const ProductTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-lime-100">
        <thead className="bg-lime-300 text-black">
          <tr className="text-left">
            <th className="px-2 py-3 border">UID</th>
            <th className="px-6 py-3 border">Product</th>
            <th className="px-6 py-3 border">Category</th>
            <th className="px-6 py-3 border">Brand</th>
            <th className="px-6 py-3 border">Price</th>
            <th className="px-6 py-3 border">Stock</th>
            <th className="px-2 py-3 border">Rating</th>
            <th className="px-1 py-3 border">Order</th>
            <th className="px-6 py-3 border">Sales</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="border-slate-500">
          {FarmProductData.map((data, index) => (
            <tr
              key={data.uid}
              className={`border text-xs font-semibold ${
                index % 2 === 0 ? "bg-lime-50" : "bg-lime-100"
              } ${data.price === "$5000" && data.price >= "$5000"}`}
            >
              <td className="px-1 py-4 text-center border">{data.uid}</td>
              <td className="px-1 py-4 text-start border truncate max-w-[120px]">
                {data.product}
              </td>
              <td className="px-1 py-4 text-start border truncate max-w-[100px]">
                {data.category}
              </td>
              <td className="px-1 py-4 text-start border truncate max-w-[100px]">
                {data.brand}
              </td>
              <td className="px-1 py-4 text-start border">{data.price}</td>
              <td className="px-1 py-4 text-start border">{data.stock}</td>
              <td className="px-1 py-4 text-start border">{data.rating}</td>
              <td className="px-1 py-4 text-start border">{data.order}</td>
              <td className="px-1 text-start py-4 border">{data.sales}</td>
              <td className="px-6 py-4 border">Edit/Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
