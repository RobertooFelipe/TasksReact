import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Tasks from "../components/Tasks/Tasks";

import './Home.scss'

const Home = () => {

    const params = useParams();

    useEffect(() => {
        console.log(params.user)
    },[params])

    return(
        <div className="home-container">
            <Sidebar />
            <Tasks />
        </div>
    )
}

export default Home;