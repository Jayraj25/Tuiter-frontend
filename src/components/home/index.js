<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> A4-dislikes-feature
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const {uid} = useParams();
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState('');
  const userId = uid;
  const findTuits = () =>
      service.findAllTuits()
        .then(tuits => setTuits(tuits));
  useEffect(() => {
    let isMounted = true;
    findTuits()
    return () => {isMounted = false;}
  }, []);
  const createTuit = () =>
      service.createTuit('my', {tuit})
          .then(findTuits)
  return(
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Home Screen</h4>
        <div className="d-flex">
          <div className="p-2">
            <img className="ttr-width-50px rounded-circle"
                 src={`../images/nasa-logo.jpg`}/>
          </div>
          <div className="p-2 w-100">
            <textarea
                onChange={(e) =>
                    setTuit(e.target.value)}
              placeholder="What's happening?"
                className="w-100 border-0"></textarea>
            <div className="row">
              <div className="col-10 ttr-font-size-150pc text-primary">
                <i className="fas fa-portrait me-3"/>
                <i className="far fa-gif me-3"/>
                <i className="far fa-bar-chart me-3"/>
                <i className="far fa-face-smile me-3"/>
                <i className="far fa-calendar me-3"/>
                <i className="far fa-map-location me-3"/>
              </div>
              <div className="col-2">
                <a onClick={createTuit}
                   className={`btn btn-primary rounded-pill fa-pull-right
                                fw-bold ps-4 pe-4`}>
                  Tuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Tuits/>
=======
import React from "react";
import TuitsList from "../tuits";
import * as service from "../../services/tuits-service";
import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";

const Home = () => {
  // const location = useLocation();
  const {uid} = useParams();
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState('');
  const userId = uid;
  const findTuits = () => {
    if(uid) {
      return service.findTuitByUser(uid)
        .then(tuits => setTuits(tuits))
    } else {
      return service.findAllTuits()
        .then(tuits => setTuits(tuits))
    }
  }
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let isMounted = true;
    findTuits();
    return () => {isMounted = false;}
  });
  const createTuit = () =>
      service.createTuit(userId, {tuit})
          .then(findTuits)
  const deleteTuit = (tid) =>
      service.deleteTuit(tid)
          .then(findTuits)
  return(
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Home Screen</h4>
        {
          uid &&
          <div className="d-flex">
            <div className="p-2">
              <img className="ttr-width-50px rounded-circle"
                   src={`../images/nasa-logo.jpg`} alt=""/>
            </div>
            <div className="p-2 w-100">
              <textarea
                  onChange={(e) =>
                      setTuit(e.target.value)}
                placeholder="What's happening?"
                className="w-100 border-0"/>
              <div className="row">
                <div className="col-10 ttr-font-size-150pc text-primary">
                  <i className="fas fa-portrait me-3"/>
                  <i className="far fa-gif me-3"/>
                  <i className="far fa-bar-chart me-3"/>
                  <i className="far fa-face-smile me-3"/>
                  <i className="far fa-calendar me-3"/>
                  <i className="far fa-map-location me-3"/>
                </div>
                <div className="col-2">
                  <button onClick={createTuit}
                     className={`btn btn-primary rounded-pill fa-pull-right
                                  fw-bold ps-4 pe-4`}>
                    Tuit
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <TuitsList tuits={tuits} deleteTuit={deleteTuit}/>
>>>>>>> A3
=======
      <Tuits tuits={tuits}
             refreshTuits={findTuits}/>
>>>>>>> A4-dislikes-feature
    </div>
  );
};
export default Home;