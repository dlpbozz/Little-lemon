import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/dal-bati.jpg";
import lemonDessert from "../../assets/chole-bhature.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Dosa"

          description="A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. "
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Daal Bati"

          description="Daal is prepared using tuvaar dal, chana daal (prepared by removing skin of split chickpeas), mung dal, moth dal, or urad dal."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Chole Bhature"

          description=" It is a combination of chana masala and bhatura-puri, a deep-fried bread made from maida. "
        />
      </Cards>
    </Container>
  );
};

export default Specials;