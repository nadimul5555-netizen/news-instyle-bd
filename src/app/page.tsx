import Image from "next/image";
import Marquee from "./components/Marquee";
import MainNews from "./components/MainNews";

  const  Home= async()=> {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections" , {cache: 'force-cache'});
  const data = await res.json();
  const Data = data.data;
  const MainData = Data[0].articles
console.log(MainData)
  return (
    <div >
     <Marquee/>

     <div className="grid grid-cols-3 container mx-auto">
      <div className="col-span-2 bg-red-500" >
        <div className="grid grid-cols-2">
        <div>
          
        <MainNews MainData = {MainData}></MainNews>
        </div>
        <div>

        </div>
        </div>
      </div>
      <div className="col-span-1 bg-gray-500"></div>
     </div>
     
    </div>
  );
}
export default Home;