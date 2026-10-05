import AccompanyorDevelop from "./Sections/AccompanyorDevelop";
import Ecosystem from "./Sections/Ecosystem";
import GlobalWorld from "./Sections/GlobalWorld";
import SlideBg from "./Sections/SlideBg";
import TheLatestNews from "./Sections/TheLatestNews";

const index = () => {
  return (
    <>
      <main>
        <SlideBg />
        <GlobalWorld />
        <AccompanyorDevelop />
        <Ecosystem />
        <TheLatestNews />
      </main>
    </>
  );
};

export default index;
