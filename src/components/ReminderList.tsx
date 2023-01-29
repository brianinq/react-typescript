import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  reminders: Reminder[];
  removeReminder: (id: number) => void;
}

function ReminderList({ reminders, removeReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {reminders.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => removeReminder(item.id)}
            className="btn btn-danger mx-4 rounded-pill"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
