import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="md:text-5xl text-3xl cursor-pointer"
    >
      ShopZone
    </div>
  );
};

export default NavbarLeft;
