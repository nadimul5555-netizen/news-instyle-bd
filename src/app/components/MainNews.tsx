import Image from "next/image";
import { HeadlineType } from "../AllTypes";

export type MainNewsProps = {
  MainData: HeadlineType;
}

const MainNews = ({ MainData }: MainNewsProps) => {
  
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <Image src={MainData.imageUrl} height={600} width={600} alt={MainData.imageAlt}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>{MainData.description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    </div>
  )
}

export default MainNews;