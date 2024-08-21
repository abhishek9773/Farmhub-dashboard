import React, { useState } from "react";
import { FarmProductData } from "../../utils/data/FarmingTableData";
import { MdDelete, MdModeEdit, MdPreview } from "react-icons/md";
import { motion } from "framer-motion";
import { ImEye } from "react-icons/im";

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FarmProductData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(FarmProductData.length / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 2) {
        pages.push(1);
        if (currentPage > 3) pages.push("...");
      }

      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }

      if (currentPage < totalPages - 1) {
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

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
          {currentItems.map((data, index) => (
            <tr
              key={data.uid}
              className={`border text-xs font-semibold ${
                index % 2 === 0 ? "bg-lime-50" : "bg-lime-100"
              }`}
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
              <td className="px-6 py-4 border">
                <div className="flex gap-2">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <ImEye className="hover:bg-fuchsia-300 bg-fuchsia-200 text-fuchsia-600 p-1 rounded-lg text-2xl cursor-pointer" />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <MdModeEdit className="hover:bg-green-300 bg-green-200 text-green-600 p-1 rounded-lg text-2xl cursor-pointer" />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <MdDelete className="bg-red-200 hover:bg-red-300 text-red-600 rounded-lg p-1 text-2xl cursor-pointer" />
                  </motion.div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-lime-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => page !== "..." && setCurrentPage(page)}
            className={`px-4 py-2 mx-1 text-xs font-bold rounded-full ${
              currentPage === page ? "bg-lime-400" : "bg-lime-200"
            } rounded`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-lime-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
