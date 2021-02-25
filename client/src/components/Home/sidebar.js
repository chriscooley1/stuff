import React from 'react';
import TrailTile from './trailTile.js';
import { Link } from 'react-router-dom';

const SideBar = ({props, trails, currentLon, currentLat}) => {
  //dummy data
  let mapTiles = trails.map((trail,i) => {
    return <Link key={i} to={`/trail/${trail.id}`}>
              <TrailTile
                props={props}
                currentLon={currentLon}
                currentLat={currentLat}
                difficulty={trail.difficulty}
                length={trail.length}
                imgSqSmall={trail.imgSqSmall}
                id={trail.id}
                distance={trail.distance}
              />
            </Link>
  });
  return (
    <div className="sidebar-container">
      {mapTiles}
    </div>
  )
}

export default SideBar;
    // distance={normalizeDistance[i]}
    // let normalizeDistance = response.rows[0].elements.map(el => {return el = el.distance.text})
