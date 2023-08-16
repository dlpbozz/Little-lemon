import { FC } from "react";
import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>India</h2>
        <p className="lead-txt">
          Little Lemon is owned by two Indian brothers,Dilip and Kanti, who moved to the Ahmedabad to pursue their shared dream of owning a restaurant.
        </p>
        <p className="lead-txt">
          To craft the menu, Dilip relies on family recipes and his experience as a chef in India. Kanti does all the marketing for the restaurant and led the effort to expand the menu beyond classic Indian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </Content>
      <Image>
        <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </Image>
    </Container>
  );
};

export default Chicago;