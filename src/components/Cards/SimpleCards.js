import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import SimpleCard from "./SimpleCard";
import axios from "axios";

import styles from "./Card.module.scss";

class SimpleCards extends Component {
  state = {
    persons: [],
    description:
      "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent.",
    specialisation: "Matematica",
    dateHired: "21/05/1996"
  };

  getPersons = async () => {
    const { data: posts } = await axios.get(
      "https://randomuser.me/api/?results=30&nat=de,fr,gb&inc=name,picture&noinfo"
    );
    this.setState({ persons: posts.results });
  };

  componentDidMount() {
    this.getPersons();
  }

  render() {
    return (
      <Card.Group className={styles.CardGroup} centered>
        {this.state.persons.map(person => (
          <SimpleCard
            key={`${person.name.first} ${person.name.last}`}
            raised
            image={person.picture.large}
            name={`${person.name.first} ${person.name.last}`}
            specialisation={this.state.specialisation}
            description={this.state.description}
            dateHired={this.state.dateHired}
          />
        ))}
      </Card.Group>
    );
  }
}

export default SimpleCards;
