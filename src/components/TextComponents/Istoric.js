import React from "react";
import { Container, Header } from "semantic-ui-react";

import image from "../../images/school.png";

const Istoric = props => (
  <Container textAlign="justified">
    <Header
      as="h2"
      image={image}
      content="Scurt istoric al colegiului"
      textAlign="center"
    />
    <p style={{ lineHeight: "1.5em", fontSize: "1.33em" }}>
      Începuturile Colegiului Naţional "Al.I.Cuza" de azi pot fi stabilite în
      1889, când un grup de profesori înfiinţează un externat secundar de fete,
      directoare fiind Eliza C. Lupu. Ca orice început nu e lipsit de probleme,
      într-o epocă în care învăţământul, mai ales cel pentru fete, nu avea
      suficiente resurse. Este şi motivul pentru care profesorii predau gratuit
      timp de doi ani, iar scoala devine publică abia în 1901. Primul război
      mondial aduce în Focşani şi o situaţie nouă şi dificilă: ocupaţia germană.
      Este momentul în care aceeaşi Eliza C.Lupu decide împreună cu un grup de
      profesori înfiinţarea unui liceu particular de fete, care în 1921 va fi
      recunoscut ca şcoală publică, dar abia în 1923 clasa I va fi trecută în
      bugetul statului, urmând ca în 1924 să treacă tot cursul inferior, iar în
      1925 şi cel superior. In 1926 liceul de fete se va muta în localul propriu
      din Calea Cuza Vodă 43, pus la dispozitie de Ministerul Instrucţiunii
      Publice. Întrucât localul devine neîncăpător, în curtea şcolii se va
      construi începând cu 1930 un local nou, cu etaj, având pe atunci 10 săli
      de clasă şi două cancelarii. În anul şcolar 1941/1942 Liceul Teoretic de
      fete din Focşani a fost transformat din liceu de tip C ( cu 8 clase) în
      liceu tip D(cu 12 clase). Numele de "Alexandru Ioan Cuza" va fi dat
      instituţiei în 1958, pe atunci Şcoala medie mixtă, pentru ca abia în 1965
      să se impună denumirea de Liceul "Alexandru I. Cuza", iar din 1990 Liceul
      Teoretic "Al. I. Cuza", transformat în 1999-2000, ca o recunoaştere a
      valorii sale, în Colegiul Naţional "Al. I. Cuza".
    </p>
  </Container>
);

export default Istoric;
