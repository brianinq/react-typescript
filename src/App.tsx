import { useEffect, useState } from "react";
import "./App.css";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  async function loadReminders() {
    const data = await reminderService.getReminders();
    setReminders(data);
  }
  useEffect(() => {
    loadReminders();
  }, []);

  function removeReminder(id: number) {
    reminderService.removeReminder(id);
    setReminders(reminders.filter((r) => r.id !== id));
  }
  async function addReminder(title: string) {
    const data = await reminderService.addReminder(title);
    setReminders((reminders) => [...reminders, data]);
  }
  return (
    <div className="App">
      <NewReminder addReminder={addReminder} />
      <ReminderList reminders={reminders} removeReminder={removeReminder} />
    </div>
  );
}

export default App;
