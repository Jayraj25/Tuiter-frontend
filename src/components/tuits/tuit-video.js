<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> A3
=======
import React from "react";
>>>>>>> A4-dislikes-feature
const TuitVideo = ({tuit}) => {
  return(
    <div
      className="ttr-responsive-video ttr-rounded-15px position-relative overflow-hidden w-100 mt-2">
      <iframe width="560"
              height="315" src={tuit.youtube}
              title="YouTube video player"
              frameBorder="0"
              className="position-absolute top-0 w-100 h-100"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </div>
  )
};
export default TuitVideo;