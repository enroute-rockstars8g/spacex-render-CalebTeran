import React, { FC } from 'react';
import styles from './Spacex.module.css';

interface SpacexProps {}

const Spacex: FC<SpacexProps> = () => (
  <div className={styles.Spacex}>
    Spacex Component
  </div>
);

export default Spacex;
