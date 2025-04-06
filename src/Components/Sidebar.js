import { Link } from "react-router-dom";
import './Sidebar.css'

export default function Sidebar() {
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
    <div className="sidebar">
      {days.map((d, i) => (
        <Link to={links[i]} className="day" key={i}>
          {d}
        </Link>
      ))}
    </div>
  );
}
