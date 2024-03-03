import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cardSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-5 flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <img
          className="w-[100px] h-[100px] object-contain flex "
          src={cart.image}
          alt=""
        />
        <div>
          <div className="text-2xl font-bold">{cart?.title}</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-3 text-nowrap text-xl font-semibold">
          <div>
            {cart?.price} <span className=" text-sm">TL</span>
          </div>
          <div>Miktar: ({cart?.quantity})</div>
        </div>
        <div
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="  bg-red-500 text-white w-[150px] h-16 flex items-center justify-center rounded-md cursor-pointer"
        >
          Ürünü Kaldır
        </div>
      </div>
    </div>
  );
};

export default CartComp;
