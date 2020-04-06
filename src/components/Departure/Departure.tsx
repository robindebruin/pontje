import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Ports, Harbor } from '../../constants/FerryRoutes';
import DepartureHeader from './DepartureHeader';
import Button from '../Button';
import ArrowToggle from '../ArrowToggle';

interface Props {
  departurePort: Harbor;
}

function Departure({ departurePort }: Props) {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const isActiveClass = (listName: string): boolean => listName === departurePort?.name;
  const toggleExpand = () => setToggle(!toggle);
  const onDepartureClick = port => history.push(`/${port}`);

  return (
    <>
      <DepartureHeader title="Vertrek"></DepartureHeader>
      <div className={`departure ${toggle ? 'expand' : 'decreased'}`}>
        {Ports.map(port => (
          <span onClick={() => onDepartureClick(port.url)} key={port.name}>
            <Button className={`departure-link `} active={isActiveClass(port.name)}>
              {port.name}
            </Button>
          </span>
        ))}
      </div>
      <div className="toggle" onClick={toggleExpand}>
        <div className="toggle toggle--btn">
          <ArrowToggle open={toggle} />
        </div>
      </div>
    </>
  );
}

export default Departure;
