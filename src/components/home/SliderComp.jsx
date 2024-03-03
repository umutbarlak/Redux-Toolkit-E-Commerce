import Slider from "react-slick";

const SliderComp = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="!flex max-lg:!block  items-center p-4 ">
        <div className="flex flex-col gap-3 my-3 ">
          <div className="text-5xl">En Kaliteli Ayakkabılar</div>
          <div className="text-lg my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            voluptates corrupti laborum repellat porro labore et quasi omnis
            cupiditate perferendis, veritatis aperiam autem at? Facilis.
          </div>
          <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-400 hover:bg-gray-500">
            İncele
          </div>
        </div>
        <img
          className=" md:mx-auto"
          width={500}
          height={500}
          src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/uirypqqxq83mwcjbf9ej/air-monarch-4-antrenman-ayakkab%C4%B1s%C4%B1-VrTWXJJn.png"
          alt=""
        />
      </div>
      <div className="!flex max-lg:!block gap-3  items-center p-4 ">
        <div className="flex flex-col gap-3  my-3">
          <div className="text-5xl">En Kaliteli Ayakkabılar</div>
          <div className="text-lg my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            voluptates corrupti laborum repellat porro labore et quasi omnis
            cupiditate perferendis, veritatis aperiam autem at? Facilis.
          </div>
          <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-400">
            İncele
          </div>
        </div>
        <img
          width={500}
          height={500}
          src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4e715fc2-64ce-481a-b492-c4e226f87ce3/dunk-low-gen%C3%A7-ayakkab%C4%B1s%C4%B1-M4W67n.png"
          alt=""
        />
      </div>

      <div className="!flex max-lg:!block gap-3  items-center p-4 ">
        <div className="flex flex-col gap-3 my-3">
          <div className="text-5xl">En Kaliteli Ayakkabılar</div>
          <div className="text-lg my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            voluptates corrupti laborum repellat porro labore et quasi omnis
            cupiditate perferendis, veritatis aperiam autem at? Facilis.
          </div>
          <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-400">
            İncele
          </div>
        </div>
        <img
          width={500}
          height={500}
          src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/b4fb59c7-903e-4af2-bfb9-9ec7e42f7e30/superfly-9-academy-mercurial-dream-speed-mg-y%C3%BCksek-bilekli-krampon-0nk3h4.png"
          alt=""
        />
      </div>
      <div className="!flex max-lg:!block gap-3  items-center p-4 ">
        <div className="flex flex-col gap-3 my-3">
          <div className="text-5xl">En Kaliteli Ayakkabılar</div>
          <div className="text-lg my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            voluptates corrupti laborum repellat porro labore et quasi omnis
            cupiditate perferendis, veritatis aperiam autem at? Facilis.
          </div>
          <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-400">
            İncele
          </div>
        </div>
        <img
          width={500}
          height={500}
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cd4c8ff-8671-4a41-a511-da2492badefa/air-force-1-07-ayakkab%C4%B1s%C4%B1-1xp6CC.png"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default SliderComp;
