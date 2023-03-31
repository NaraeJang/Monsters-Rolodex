import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("CardList Log");

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, email, name } = monster;

          return (
            <div key={id} className="card-container">
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
