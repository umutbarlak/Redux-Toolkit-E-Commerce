const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 mt-5 p-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className=" bg-gray-300 border px-4 py-3 rounded-md"
        name=""
        id=""
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
