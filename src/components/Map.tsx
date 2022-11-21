import { PropsWithChildren } from 'react';
import style from './style.module.css';

const Map = ({ children }: PropsWithChildren) => {
  return <div className={style.map}>{children}</div>;
};

export default Map;
