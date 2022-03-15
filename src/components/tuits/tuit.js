import React from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";

const Tuit = ({tuit, deleteTuit}) => {
  return(
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit.createdBy &&
          <img src={`../images/${tuit.createdBy.username}.jpg`}
               className="ttr-tuit-avatar-logo rounded-circle" alt=""/>
        }
      </div>
      <div className="w-100">
          <i onClick={() => deleteTuit(tuit._id)} className="fas fa-remove fa-2x fa-pull-right"/>
        <h2
          className="fs-5">
          {tuit.createdBy && tuit.createdBy.username}
            @{tuit.createdBy && tuit.createdBy.username} -
            {tuit.postedOn}</h2>
        {tuit.tuit}
        {
          tuit.youtube &&
            <TuitVideo tuit={tuit}/>
        }
        {
          tuit.image &&
          <TuitImage tuit={tuit}/>
        }
        <TuitStats tuit={tuit}/>
      </div>
    </li>
  );
}
export default Tuit;