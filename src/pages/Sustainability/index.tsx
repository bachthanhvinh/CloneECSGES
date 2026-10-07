import { Sustainability } from "../../apis/data";
import PageHeroC from "../../components/ui/PageHero";
import Person from "./Sections/Person";

const index = () => {
  return (
    <div>
      <PageHeroC name={"PHÁT TRIỂN BỀN VỮNG"} />
      <Person
        title="CON NGƯỜI ECS"
        items={Sustainability.peopleData}
        bgColor="bg-[#f4f4f4]"
        titleColor="text-[#111111]"
      />
      <Person
        title="VĂN HÓA ECS"
        items={Sustainability.cultureData}
        bgColor="bg-[#f26522]"
      />
      <Person
        title="TRÁCH NHIỆM XÃ HỘI"
        items={Sustainability.socialResponsibility}
        bgColor="bg-[#f4f4f4]"
        titleColor="text-[#111111]"
      />
    </div>
  );
};

export default index;
