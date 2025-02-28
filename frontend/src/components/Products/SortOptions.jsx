// import React from "react";
// import { useParams } from "react-router-dom";

// const SortOptions = () => {
//   const[searchParams,setSearchParams] =useParams()
//   const handleSortChange = (e) =>{
//     const sortBy = e.target.value;
//     searchParams.set("sortBy", sortBy)
//     searchParams(searchParams)
//   }
//   return (
//     <div className="flex justify-end items-center">
//       <select
//        id="sort"
//        value={searchParams.get("sortBy") || ""}
//        onChange={handleSortChange}
//         className="border p-2 rounded-md focus:outline-none">
//         <option value="">default</option>
//         <option value="priceAsc">Price: Low to High</option>
//         <option value="priceDesc">Price: High to Low</option>
//         <option value="popularity">Popularity</option>
//       </select>
//     </div>
//   );
// };

// export default SortOptions;
import React from "react";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    const newParams = new URLSearchParams(searchParams);

    if (sortBy) {
      newParams.set("sortBy", sortBy);
    } else {
      newParams.delete("sortBy");
    }

    setSearchParams(newParams);
  };

  return (
    <div className="flex justify-end items-center">
      <select
        id="sort"
        value={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
