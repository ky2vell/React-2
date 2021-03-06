import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Context
import PlantContext from '../../context/plant/plantContext';
import AuthContext from '../../context/auth/authContext';

// Components
import PlantDetail from './PlantDetail';
import PlantForm from './PlantForm';

const PlantList = () => {
  const plantContext = useContext(PlantContext);
  const authContext = useContext(AuthContext);

  const { plants, getPlants, loading } = plantContext;
  const { user } = authContext;

  useEffect(() => {
    getPlants(user.userId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <PlantForm />
      <div className='plant-cards'>
        <h2>My Plants</h2>
        {loading ? (
          <h2 className='loading'>
            <i className='fas fa-seedling'></i>Plants are loading...
          </h2>
        ) : (
          <TransitionGroup>
            {plants.map(plant => (
              <CSSTransition key={plant.id} timeout={500} classNames='item'>
                <PlantDetail plant={plant} key={plant.id} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default PlantList;
