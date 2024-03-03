import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-2/6 mt-2 lg:w-1/6 h-fit bg-gray-100 p-2">
      <div className="p-2 font-bold text-2xl tracking-widest">KATEGORİ</div>
      <div
        onClick={() => setCategory("")}
        className="text-lg cursor-pointer hover:bg-gray-200 capitalize my-2 text-nowrap p-2"
      >
        Bütün Ürünler
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className=" text-lg cursor-pointer hover:bg-gray-200 capitalize my-2 text-nowrap p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
