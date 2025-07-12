import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from '@mui/material';
import Sidebar from "../Components/Sidebar";
import Downbar from "../Components/Downbar";

import './DayPage.css';

export default function DayPage() {
    const isMobile = useMediaQuery('(max-width:768px)');
    const { day } = useParams();
    const [matchedMenu, setMatchedMenu] = useState(null);

    useEffect(() => {
    const menu_url = process.env.REACT_APP_MENU_URL;
    fetch(menu_url)
        .then(res => res.json())
        .then(data => {
            if (day) {
                const now = new Date();
                const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                let match = data.find(entry => {
                    const entryDate = new Date(entry.date);
                    return (
                        entry.day.toLowerCase() === day.toLowerCase() &&
                        entryDate >= todayStart
                    );
                });

                if (!match) {
                    const reversed = [...data].reverse();
                    match = reversed.find(entry =>
                        entry.day.toLowerCase() === day.toLowerCase()
                    );
                }

                setMatchedMenu(match || null);
            }
        })
        .catch(err => {
            console.error("Failed to fetch menu:", err);
            setMatchedMenu(null);
        });
}, [day]);


    return (
        <div className="app">
            <div className="center-fade"></div>
            <div className="overlay"></div>
            {!isMobile && <Sidebar />}
            <div className="main">
                    {matchedMenu ? (
                        <div className="content">
                            <Link to="/timings" className="home-icon">
                                <FontAwesomeIcon icon={faHouse} />
                            </Link>
                            <h1 className="title">{day.toUpperCase()}</h1>
                            <div className="card-container">
                                {["breakfast", "lunch", "dinner"].map((meal) => (
                                    <div className="meal-card" key={meal}>
                                        <div>{meal.charAt(0).toUpperCase() + meal.slice(1)}</div>
                                        {matchedMenu[meal].map((item, i) => (
                                            <p className="meal-item" key={i}>{item}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="content">
                            <h1 className="title">Menu not found</h1>
                        </div>
                    )}
                </div>
            {isMobile && <Downbar />}
        </div>
    );
}
