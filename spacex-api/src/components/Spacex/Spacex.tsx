import React, { FC, useEffect, useState } from 'react';
import styles from './Spacex.module.css';
import { getAllRockets } from '../../services/spacex/services'

interface SpacexProps { }

const Spacex: FC<SpacexProps> = () => {
  const [rocketList, setRocketList] = useState<Array<any>>();

  useEffect(() => {
    const getRockets = async () => {
      const rockets = await getAllRockets();
      setRocketList(rockets);
      console.log("rockets>>>", rockets);
    };

    getRockets();
  }, []);
  return (
    <>

      <h2>Rockets</h2>
      <div className={styles.Spacex}>
        {rocketList?.map(({ name, id, description, company, boosters, country, stages, wikipedia }) => (
          <div className='Rocket-container' key={id}>
            <div>
              <img className='Rocket-icon' src={require('../../assets/rocket.png')} alt="" width={25} height={25} />
              <h3> {name} </h3>
              <p>
                {description}
                <hr />
              </p>
              <table className='Rocket-table'>
                <tr>
                  <td>Company</td>
                  <td>{company}</td>
                </tr>
                <tr>
                  <td>Boosters</td>
                  <td>{boosters}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{country}</td>
                </tr>
                <tr>
                  <td>stages</td>
                  <td>{stages}</td>
                </tr>
                <tr>
                  <td>Wikipedia Info</td>
                  <td><a href={wikipedia}>{name} info</a></td>
                </tr>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Spacex;
