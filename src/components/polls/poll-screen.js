/**
 * @file renders the poll screen component
 */
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Poll from "./poll";
import * as service from "../../services/polls-service";

/**
 * @typedef {Object} PollScreenProps
 * @returns {JSX.Element} PollScreen
 * @constructor PollScreen
 */
const PollScreen = () => {
    const [poll, setPoll] = useState({});
    const {pid} = useParams();
    const findPollById = () => {
        service.findPollById(pid)
            .then(poll => {
                console.log(poll);
                setPoll(poll);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        let isMounted = true;
        findPollById();
        return () => {isMounted = false;}
    }, []);
        return (
            <div>
                <h1>Poll Screen</h1>
                <Poll poll={poll}/>
            </div>
        );
};
export default PollScreen;