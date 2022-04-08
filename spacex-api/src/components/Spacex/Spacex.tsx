import React, { FC, useEffect, useState  } from 'react';
import styles from './Spacex.module.css';
import {getAllRockets} from '../../services/spacex/services'

interface SpacexProps {}

const Spacex: FC<SpacexProps> = () =>{
  const [rocketList, setRocketList] = useState<Array<any>>();

  useEffect(() => {
    const getRockets = async () => {
      const rockets = await getAllRockets();
      setRocketList(rockets);
      console.log("rockets>>>",rockets);
    };

    getRockets();
  }, []);
  return (
    <div className={styles.Spacex}>
      <button>Rockets list</button>
      {rocketList?.map(({name, id})=>(
        <div key={id}>
          
          <span className='Rocket-name'> Rocket: <br /> {name} </span>
        </div>
      ))}
    </div>
  );
} 

export default Spacex;
