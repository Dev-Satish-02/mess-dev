import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Today() {
  const navigate = useNavigate();

  useEffect(() => {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    const today = new Date();
    const todayName = days[today.getDay()];
    navigate(`/${todayName}`);
  }, [navigate]);

  return null;
}
