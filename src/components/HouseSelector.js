import React, { useEffect } from "react";

/**
 * Importante para o total funcionamento
 * do Materialize, incluindo as funcionalidades
 * que precisam de JavaScript
 */
import M from "materialize-css";


export default function PeriodChanger(props) {
  const HOUSES = ['Selecione Uma Casa', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
  let nextId = 0;
  let allHouses = [];

  HOUSES.forEach((house) => {
    const id = nextId++;
    const houseName = house
    allHouses.push({ id, houseName })

  })

  const [houseId, setHouseId] = React.useState(
    allHouses[0].id
  );
  const [houseName, setHouseName] = React.useState(
    allHouses[0].name
  );

  /**
   * Ativando o JavaScript
   * do Materialize
   */
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  //----------------------------------------------------------------------------
  React.useEffect(() => {
    const updateList = () => {
      const houseObject = allHouses.find(
        house => house.id == houseId
      );
      setHouseName(houseObject.houseName);
    };
    updateList();
  }, [houseId]);

  //----------------------------------------------------------------------------
  useEffect(() => {
    props.onHouseChange(houseName);
  }, [houseName]);
  //----------------------------------------------------------------------------
  const handleHouseChange = (event) => {
    const newHouseSelection = event.target.value;
    setHouseId(newHouseSelection);
  };
  //----------------------------------------------------------------------------

  return (
    <div className="container">
      <select value={houseId} onChange={handleHouseChange}>
        {allHouses.map((house) => {
          const { id, houseName } = house;
          return (
            <option key={id} value={id}>
              {houseName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
