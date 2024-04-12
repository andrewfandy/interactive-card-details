import Cards from "../components/Cards";
import FrontCard from "../components/FrontCard";

export default function SectionCards() {
  return (
    <section className="flex justify-center items-center w-full sm:w-1/2 sm:h-full h-1/2 bg-cover bg-no-repeat bg-center sm:bg-main-desktop bg-main-mobile ">
      <Cards>
        <FrontCard />
      </Cards>
    </section>
  );
}
