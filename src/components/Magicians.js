import React, { useEffect, useState } from 'react'
import Magician from './Magician';
import HouseSelector from './HouseSelector';
import css from './magician.module.css'
import Loader from './Loader';
import loader from '../loading.gif'


const CURRENT_YEAR = new Date().getFullYear();

export default function Magicians() {
  const [magicians, setMagicians] = useState([])
  const [filteredMagicians, setfilteredMagicians] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://hp-api.herokuapp.com/api/characters');
      const json = await res.json();
      let nextId = 100;

      const everyMagician = json
        .map(
          ({ name, house, wand, patronus, image, yearOfBirth, gender }) => {
            return {
              id: nextId++,
              name,
              house,
              age: CURRENT_YEAR - yearOfBirth,
              wand,
              patronus,
              image,
              gender
            };
          }
        );
      setTimeout(() => {
        setMagicians(everyMagician);
        setfilteredMagicians(Object.assign([], everyMagician))
        console.log(everyMagician);
      }, 3000);
    };
    fetchData();
  }, []);

  const handleFilterChange = (houseName) => {
    if (houseName !== 'Selecione Uma Casa') {
      const newFilter = magicians.filter(magician => magician.house === houseName);
      setfilteredMagicians(newFilter);
    } else {
      setfilteredMagicians(magicians);
    }
  }

  return (
    <div>
      <div>{magicians.length !== 0 && <HouseSelector onHouseChange={handleFilterChange} />}
        {magicians.length === 0 && <Loader image={loader} />}
      </div>
      {magicians.length !== 0 && <div className={css.flexRow}>
        {filteredMagicians.map(magician => {
          return (
            <div key={magician.id} >
              <Magician magician={magician} />
            </div>)
        }
        )}
      </div>}
    </div>
  )
}
