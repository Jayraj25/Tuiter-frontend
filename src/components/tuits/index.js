/**
 * @file renders the list of tuits upon request.
 */
import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as dislikesService from "../../services/dislikes-service";
import * as service from "../../services/tuits-service";

/**
 * @component renders the list of tuits upon request.
 * @param tuits the list of tuits to be rendered.
 * @param refreshTuits the function to refresh the list of tuits.
 * @returns {JSX.Element} the list of tuits.
 * @constructor creates the list of tuits.
 */
const Tuits = ({tuits = [], refreshTuits}) => {
    const likeTuit = (tuit) => {
        likesService.userLikesTuit("me", tuit._id).then(refreshTuits)
            .catch(e => alert(e))
    }
    const dislikeTuit = (tuit) => {
        dislikesService.userDislikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))
    }
    const deleteTuit = (tid) =>
        service.deleteTuit(tid)
            .then(refreshTuits);

    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        <Tuit key={tuit._id}
                              deleteTuit={deleteTuit}
                              likeTuit={likeTuit}
                              dislikeTuit={dislikeTuit}
                              tuit={tuit}/>)
                }
            </ul>
        </div>
    );
}

export default Tuits;