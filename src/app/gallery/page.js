import Image from "next/image";
import nextImg from "../../assets/next.png";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Regular Image Tag</h1>
      {/* <img
        className="mx-auto"
        src="/next.png"
        alt=""
        width={500}
        height={500}
      /> */}

      {/* Next Ja Image */}
      <h1>NextJs Image Component</h1>
      <Image
        className="mx-auto"
        src={nextImg}
        alt="next image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
