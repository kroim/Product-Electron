import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';
import DetectIdle from '../../constants/detectIdle';

export default function JousunPoll(): JSX.Element{


  useEffect(()=>{

  });

  return (
    <DetectIdle>
      <div className={`${classes.bgBlack}`}>
        <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
          <div>
            <img src='root://assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>
          </div>
          <div className="d-flex align-items-center ">
            <Button className={`mr-3 ${classes.font24} ${classes.black}`} color='white'>Eng </Button>
          </div>
        </div>

        <div className={`${classes.content} pt-5`}>
          <div className={`text-white text-center  ${classes.font36}`}>
            This is Jousun Poll
          </div>
        </div>

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
          <Link to={routes.HOME}>
            <img src='root://assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          <Button color="success" href={`#${routes.warn}`} className={`${classes.font24} ${classes.black} mr-3`}>Continue</Button>
        </div>
      </div>
    </DetectIdle>
  )
}
