interface IPageHeroProps {
  name: string;
}
const PageHeroC: React.FC<IPageHeroProps> = ({ name }) => {
  return (
    <>
      <section className="relative w-full max-w-full overflow-hidden group  shadow-lg">
        <img
          src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/banner-page.png?ver=1786177127"
          alt=""
        />
        <div className="absolute right-[51%] top-[33%]">
          <h1 className="  text-6xl font-bold text-[#E95327]">{name}</h1>
        </div>
      </section>
    </>
  );
};

export default PageHeroC;
