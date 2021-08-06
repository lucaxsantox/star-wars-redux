import React from 'react';
import { connect } from 'react-redux';

const isKnown = text => text && text !== 'unknown';

const CharacterWorld = ({ world }) =>
  <div id='character-world' className='col-md-6'>
    <h1 className="text-warning pb-4">World</h1>
    <ul className="list-group">
    {isKnown(world.name) && <li className="list-group-item list-group-item-dark text-white ">Name: {world.name}</li>}
    {isKnown(world.population) && <li className="list-group-item list-group-item-dark text-white ">Population: {world.population}</li>}
    {isKnown(world.diameter) && <li className="list-group-item list-group-item-dark text-white ">Diameter: {world.diameter}km</li>}
    {isKnown(world.rotation_period) && <li className="list-group-item list-group-item-dark text-white ">Day length: {world.rotation_period} hours</li>}
    {isKnown(world.orbital_period) && <li className="list-group-item list-group-item-dark text-white ">Year length: {world.orbital_period} days</li>}
    {isKnown(world.climate) && <li className="list-group-item list-group-item-dark text-white ">Climate: {world.climate}</li>}
    </ul>
  </div>;

const mapStateToProps = ({ character: { world } }) => ({
  world,
});

export default connect(mapStateToProps)(CharacterWorld);