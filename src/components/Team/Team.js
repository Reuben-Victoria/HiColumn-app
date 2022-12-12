import React from 'react';
import style from './Team.module.scss';
import image1 from './assets/Rectangle 240.svg';
import image2 from './assets/Rectangle 240 (1).svg';
import image3 from './assets/Rectangle 240 (2).svg';
import image4 from './assets/Rectangle 240 (3).svg';
function Team() {
  return (
    <div className={style.container}>
      <div>
        <h1>Our Team</h1>
        <p className={style.text}>Meet the team working behind the scene</p>
      </div>
      <div className={style.imageContainer}>
        <div>
          <div className={style.image}>
            <img src={image1} alt="team-1" />
          </div>
          <h2>Elizabeth Ebi</h2>
          <p>Chairman</p>
        </div>
        <div>
          <div className={style.image}>
            <img src={image2} alt="team-2" />
          </div>
          <h2>Elizabeth Ebi</h2>
          <p>Chairman</p>
        </div>
        <div>
          <div className={style.image}>
            <img src={image3} alt="team-3" />
          </div>
          <h2>Elizabeth Ebi</h2>
          <p>Chairman</p>
        </div>
        <div>
          <div className={style.image}>
            <img src={image4} alt="team-4" />
          </div>
          <h2>Elizabeth Ebi</h2>
          <p>Chairman</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
