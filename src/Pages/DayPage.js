import { useParams } from "react-router-dom";
import menu from "../Data/Menu.json";
import './DayPage.css'
import Sidebar from "../Components/Sidebar";

export default function DayPage() {
    const { day } = useParams();
    const isHome = !day;
    const currentMenu = menu?.[day];

    return (
        <div className="app">
            <div className="center-fade"></div>
            <div className="overlay"></div>
            <Sidebar />

            <div className="main">
                {isHome ? (
                    <div className="content">
                        <h1 className="title">MESS TIMINGS</h1>
                        <div className="card-container">
                            <div className="meal-card">
                                <div>Breakfast</div>
                                <p className="meal-time">
                                    07:30 AM - 09:30 AM<br />
                                    08:00 AM - 10:00 AM<br />
                                    (Sundays and Holidays)
                                </p>
                            </div>

                            <div className="meal-card">
                                <div>Lunch</div>
                                <p className="meal-time">
                                    11:30 AM - 01:30 PM<br />
                                    12:00 PM - 02:00 PM<br />
                                    (Sundays and Holidays)
                                </p>
                            </div>

                            <div className="meal-card">
                                <div>Dinner</div>
                                <p className="meal-time">
                                    07:00 PM - 09:00 PM<br />
                                    (08:45PM Last Entry Time)
                                </p>
                            </div>
                        </div>
                    </div>
                ) : currentMenu ? (
                    <div className="content">
                        <h1 className="title">{day.toUpperCase()}</h1>
                        <div className="card-container">
                            <div className="meal-card">
                                <div>Breakfast</div>
                                {currentMenu.breakfast.map((item, i) => (
                                    <p className="meal-time" key={i}>{item}</p>
                                ))}

                            </div>
                            <div className="meal-card">
                                <div>Lunch</div>
                                {currentMenu.lunch.map((item, i) => (
                                    <p className="meal-time" key={i}>{item}</p>
                                ))}

                            </div>
                            <div className="meal-card">
                                <div>Dinner</div>
                                {currentMenu.dinner.map((item, i) => (
                                    <p className="meal-time" key={i}>{item}</p>
                                ))}

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="content">
                        <h1 className="title">Day Not Found</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
