import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { productDetailStatus, productDetail } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div className="flex mx-auto">
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
