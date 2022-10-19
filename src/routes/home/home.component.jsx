import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Repair Solutions";
  });
  const mainCategories = [
    {
      id: 1,
      title: "Apple",
      imageUrl: "https://i.ibb.co/Gk8hgzt/apple.png",
    },
    {
      id: 2,
      title: "Samsung",
      imageUrl: "https://i.ibb.co/p32MGtw/samsung.webp",
    },
    {
      id: 3,
      title: "OnePlus",
      imageUrl: "https://i.ibb.co/VpSXFgF/oneplus.webp",
    },
    {
      id: 4,
      title: "Sony",
      imageUrl: "https://i.ibb.co/RvBdgMc/sony.webp",
    },
    {
      id: 5,
      title: "Huawei",
      imageUrl: "https://i.ibb.co/61x4R9Q/huawei.jpg",
    },
    {
      id: 6,
      title: "Nokia",
      imageUrl: "https://i.ibb.co/dfPNdJb/nokia.jpg",
    },
  ];
  return (
    <div>
      <Outlet />
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
