import React from 'react';
import { connect } from 'react-redux';


const CharacterProfile = ({ profile, world }) =>
    <div className="col-md-6">
      <h1 className="text-warning pb-4">Profile</h1>
    <ul className="list-group"> 
    {profile.name && <li className="list-group-item list-group-item-dark text-warning">Name: {profile.name}</li>}
    {profile.height && <li className="list-group-item list-group-item-dark text-warning">Height: {profile.height}cm</li>}
    {profile.mass && <li className="list-group-item list-group-item-dark text-warning">Weight: {profile.mass}kg</li>}
    {world.name && <li className="list-group-item list-group-item-dark text-warning">Homeworld: {world.name}</li>}
    {profile.gender && <li className="list-group-item list-group-item-dark text-warning">Gender: {profile.gender}</li>}
    </ul>
    </div>

const mapStateToProps = ({ character: { profile, world } }) => ({
  profile,
  world
});

export default connect(mapStateToProps)(CharacterProfile);