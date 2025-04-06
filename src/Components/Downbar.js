import { Link } from "react-router-dom";
import './Downbar.css';

export default function DownBar() {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const links = [
        "/monday",
        "/tuesday",
        "/wednesday",
        "/thursday",
        "/friday",
        "/saturday",
        "/sunday"
    ];

    return (
        <div className="downbar">
            {days.map((d, i) => (
                <Link to={links[i]} className="day" key={i}>
                    {d}
                </Link>
            ))}
        </div>
    );
}
