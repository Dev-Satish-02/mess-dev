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
    const matchedMenu = day ? getNextMenuForDay(day) : null;

    return (
        <div className="app">
            <div className="center-fade"></div>
            <div className="overlay"></div>
            <Sidebar />
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
