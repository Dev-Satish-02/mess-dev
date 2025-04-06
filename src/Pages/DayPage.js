import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import fullMenu from "../Data/MenuByDate.json";
import './DayPage.css'
import Sidebar from "../Components/Sidebar";
import Downbar from "../Components/Downbar";

function getNextMenuForDay(day) {
    const today = new Date();
    const entries = Object.entries(fullMenu);

    const next = entries.find(([date, data]) => {
        const menuDate = new Date(date);
        return (
            data.day === day.toLowerCase() &&
            menuDate >= today.setHours(0, 0, 0, 0)
        );
    });

    if (next) {
        const [date, menu] = next;
        return { date, menu };
    }

    return null;
}

export default function DayPage() {

    const { day } = useParams();
    const isHome = !day;
    const matchedMenu = day ? getNextMenuForDay(day) : null;

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
                        <p className="footer-note">
                            made with <span className="heart">❤️</span> by <a href="https://in.linkedin.com/in/dev-satish" target="_blank" rel="noopener noreferrer" className="dev-link">dev</a>
                        </p>
                    </div>
                ) : matchedMenu ? (
                    <div className="content">
                        <Link to="/" className="home-icon">
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                        <h1 className="title">{day.toUpperCase()}</h1>
                        <div className="card-container">
                            {["breakfast", "lunch", "dinner"].map((meal) => (
                                <div className="meal-card" key={meal}>
                                    <div>{meal.charAt(0).toUpperCase() + meal.slice(1)}</div>
                                    {matchedMenu.menu[meal].map((item, i) => (
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
            <Downbar />
        </div>
    );
}
