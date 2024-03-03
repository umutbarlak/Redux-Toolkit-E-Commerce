import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cardSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="my-5">
      {carts?.length > 0 ? (
        <div className="my-5">
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="bg-gray-400 flex gap-2 p-5">
            <span className="text-2xl font-bold">TOPLAM TUTAR: </span>
            <span className="text-2xl text-green-800 font-semibold">
              {""}
              {totalAmount.toFixed(2)} TL
            </span>
          </div>
        </div>
      ) : (
        <div className="underline p-5 justify-center text-center ">
          <p className="text-3xl"> Kartınız Boş. Lütfen Ürün Ekleyin.</p>

          <button
            onClick={() => navigate("/")}
            className="bg-green-400 hover:bg-green-500 my-5 px-5 py-3 rounded-md"
          >
            Ürünlere Gidiniz
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
