import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product?.id}`)}
      className="w-[350px] p-2 m-2 border rounded-md relative cursor-pointer"
    >
      <div className=" text-xl bg-slate-200 font-bold absolute rounded-md top-0 right-0 p-1 m-1">
        {product?.price} <span className=" text-sm">TL</span>
      </div>
      <img
        className=" w-[200px] h-[200px] object-contain  m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center text-xl font-bold px-3 mt-3">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
