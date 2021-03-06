/**
 * @file renders the profile component
 */
import React, {useEffect, useState} from "react";
import MyTuits from "./my-tuits";
import {HashRouter, Link, Route, Routes, useNavigate, useLocation} from "react-router-dom";
import * as service from "../../services/security-service"
import TuitsAndReplies from "./tuits-and-replies";
import Media from "./media";
import MyLikes from "./my-likes";
import MyDislikes from "./my-dislikes";
import MyCreatedPolls from "./my-createdPolls";
import MyRespondedPolls from "./my-respondedPolls";

/**
 * @returns {JSX.Element} the profile component
 * @constructor Profile
 */
const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            const user = await service.profile();
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);
    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }
    return(
        <div className="ttr-profile">
            <div className="border border-bottom-0">
                <h4 className="p-2 mb-0 pb-0 fw-bolder">
                    {profile.username}
                    <i className="fa fa-badge-check text-primary"/></h4>
                <span className="ps-2">67.6K Tuits</span>
                <div className="mb-5 position-relative">
                    <img className="w-100" src={`../images/nasa-profile-header.jpg`} alt=""/>
                    <div className="bottom-0 left-0 position-absolute">
                        <div className="position-relative">
                            <img className="position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                                 src={`../images/nasa-3.png`} alt=""/>
                        </div>
                    </div>
                    <Link to="/profile/edit"
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>
                    <button onClick={logout} className="mt-2 float-end btn btn-warning rounded-pill">
                        Logout
                    </button>
                </div>

                <div className="p-2">
                    <h4 className="fw-bolder pb-0 mb-0">
                        {profile.username}<i className="fa fa-badge-check text-primary"/>
                    </h4>
                    <h6 className="pt-0">@{profile.username}</h6>
                    <p className="pt-2">
                        There's space for everybody. Sparkles
                    </p>
                    <p>
                        <i className="far fa-location-dot me-2"/>
                        Pale Blue Dot
                        <i className="far fa-link ms-3 me-2"/>
                        <a href="https://nasa.gov" className="text-decoration-none">nasa.gov</a>
                        <i className="far fa-balloon ms-3 me-2"/>
                        Born October 1, 1958
                        <br/>
                        <i className="far fa-calendar me-2"/>
                        Joined December 2007
                    </p>
                    <b>178</b> Following
                    <b className="ms-4">51.1M</b> Followers
                    <ul className="mt-4 nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link to="/profile/my-tuits"
                                  className={`nav-link ${location.pathname.indexOf('my-tuits') >= 0 ? 'active':''}`}>
                                Tuits</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile/mylikes"
                                  className={`nav-link ${location.pathname.indexOf('mylikes') >= 0 ? 'active':''}`}>
                                Likes</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/profile/dislikes"
                                  className={`nav-link ${location.pathname.indexOf('dislikes') >= 0 ? 'active':''}`}>
                                Dislikes</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/profile/createdPolls"
                                  className={`nav-link ${location.pathname.indexOf('createdPolls') >= 0 ? 'active':''}`}>
                                Created Polls</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile/respondedPolls"
                                  className={`nav-link ${location.pathname.indexOf('respondedPolls') >= 0 ? 'active':''}`}>
                                Responded Polls</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/my-tuits" element={<MyTuits/>}/>
                <Route path="/tuits-and-replies" element={<TuitsAndReplies/>}/>
                <Route path="/media" element={<Media/>}/>
                <Route path="/mylikes" element={<MyLikes/>}/>
                <Route path="/dislikes" element={<MyDislikes/>}/>
                <Route path="/createdPolls" element={<MyCreatedPolls/>}/>
                <Route path="/respondedPolls" element={<MyRespondedPolls/>}/>
            </Routes>
        </div>
    );
}
export default Profile;