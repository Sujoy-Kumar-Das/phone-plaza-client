import Container from "../shared/Container";
import OptionCategoryCard from "./OptionCategoryCard";
import OptionProductCard from "./OptionProductCard";

export default function OptionCard() {
  return (
    <Container className=" bg-blue-300 my-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20  ">
        <OptionCategoryCard /> <OptionProductCard />
      </div>
    </Container>
  );
}
