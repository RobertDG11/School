import React from "react";
import {
  Button,
  Grid,
  GridRow,
  GridColumn,
  Header,
  Image
} from "semantic-ui-react";

import prof from "../../images/profesors.jpg";

const Profesori = props => (
  <Grid container stackable verticalAlign="middle">
    <GridRow>
      <GridColumn width={8}>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Elevi cu rezultate remarcabile
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          De pe bancile Colegiului National "Al.I.Cuza" au plecat oameni care
          azi au pozitii inalte in toata tara si nu numai. De la ingineri,
          profesori, oameni de stiinta, politicieni si doctori.
        </p>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Cei mai prestigiosi profesori
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Liceul se poate mandri cu unii dintre profesorii cu cele mai bune
          rezultate din intreg judetul. Se spune ca cel mai important in primii
          ani de formare ai unui elev este dascalul. Acesta te poate fie ajuta,
          fie incurca. Comportamentul tinerilor este influentat in proportie de
          70% de profesorii din liceu.
        </p>
      </GridColumn>
      <GridColumn floated="right" width={6}>
        <Image bordered rounded size="large" src={prof} />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn textAlign="center">
        <Button size="huge">Fa cunostinta cu ei</Button>
      </GridColumn>
    </GridRow>
  </Grid>
);

export default Profesori;
