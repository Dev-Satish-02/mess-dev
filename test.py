import pandas as pd
import json
from datetime import datetime

# Load Excel file
file_path = "menu.xlsx"  # Update this to match your actual file
df = pd.read_excel(file_path)

menu_by_date = {}

for col in df.columns:
    col_data = df[col].dropna().reset_index(drop=True)

    try:
        date_obj = pd.to_datetime(col)
        date_str = date_obj.strftime("%Y-%m-%d")
        weekday = date_obj.strftime("%A").lower()
    except Exception:
        print(f"Skipping column '{col}' - not a valid date.")
        continue

    def clean_items(start, end):
        return [
            str(col_data[i]).strip()
            for i in range(start, min(end, len(col_data)))
            if isinstance(col_data[i], str) and not col_data[i].strip().startswith("*")
        ]

    breakfast = clean_items(2, 11)
    lunch = clean_items(13, 21)
    dinner = clean_items(23, 31)

    # Only save days with at least one meal
    if breakfast or lunch or dinner:
        menu_by_date[date_str] = {
            "day": weekday,
            "breakfast": breakfast,
            "lunch": lunch,
            "dinner": dinner
        }
    else:
        print(f"Skipping {date_str} ({weekday}) - no meals found.")

# Save result
with open("MenuByDate.json", "w") as f:
    json.dump(menu_by_date, f, indent=2)

print("Menu with weekday & cleaned items saved to MenuByDate.json")
