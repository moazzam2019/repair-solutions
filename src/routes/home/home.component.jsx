import Directory from "../../components/directory/directory.component";

const Home = () => {
  document.title = "Repair Solutions";
  const mainCategories = [
    {
      id: 1,
      title: "Apple",
      imageUrl: "https://i.ibb.co/Gk8hgzt/apple.png",
      param: "/apple",
    },
    {
      id: 2,
      title: "Samsung",
      imageUrl: "https://i.ibb.co/p32MGtw/samsung.webp",
      param: "/samsung",
    },
    {
      id: 3,
      title: "OnePlus",
      imageUrl: "https://i.ibb.co/VpSXFgF/oneplus.webp",
      param: "/oneplus",
    },
    {
      id: 4,
      title: "Sony",
      imageUrl: "https://i.ibb.co/RvBdgMc/sony.webp",
      param: "/sony",
    },
    {
      id: 5,
      title: "Huawei",
      imageUrl: "https://i.ibb.co/61x4R9Q/huawei.jpg",
      param: "/huawei",
    },
    {
      id: 6,
      title: "Nokia",
      imageUrl: "https://i.ibb.co/dfPNdJb/nokia.jpg",
      param: "/nokia",
    },
  ];
  return (
    <div>
      <Directory mainCategories={mainCategories} />
    </div>

    // <div className="categories-container">
    //   {/* before shifting the code it was {id, title, imageUrl} instead of (category) */}
    //   {mainCategories.map((categoryArray) => (
    //     <CategoryItem key={categoryArray.id} categoryProp={categoryArray} />
    //   ))}
    // </div>
  );
};

export default Home;
