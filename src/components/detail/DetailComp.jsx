import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decreament = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increament = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        ...productDetail,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="block lg:flex max:jus   sm:row-gap-5  gap-10 my-10">
      <img
        className="max-w-[500px]  max-h-[500px] object-contain"
        src={productDetail?.image}
        alt=""
      />
      <div style={{ maxWidth: "700px" }} className="">
        <div className="text-4xl font-bold  line-clamp-3 my-10 lg:my-0">
          {productDetail?.title}
        </div>
        <div className=" text-xl">{productDetail?.description}</div>
        <div className=" text-red-500 text-xl my-3">
          Count: {productDetail?.rating?.count}{" "}
        </div>
        <div className=" text-red-500 text-xl my-3">
          Puan: {productDetail?.rating?.rate}{" "}
        </div>
        <div className=" text-4xl my-3">
          Fiyat: {productDetail?.price}{" "}
          <span className="text-sm font-bold">TL</span>{" "}
        </div>
        <div className="flex items-center gap-3 text-3xl my-3">
          <div
            onClick={decreament}
            className=" bg-gray-200 hover:bg-gray-400 border rounded-md px-4 cursor-pointer"
          >
            -
          </div>
          <input
            className=" w-10 text-center"
            readOnly
            type="text"
            value={quantity}
          />
          <div
            onClick={increament}
            className="bg-gray-200 hover:bg-gray-400 border rounded-md  px-4 cursor-pointer"
          >
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] h-16 flex items-center justify-center rounded-md text-2xl bg-gray-200 hover:bg-gray-400 cursor-pointer"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
