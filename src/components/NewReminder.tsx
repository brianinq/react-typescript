import React, { useState } from "react";

interface NewReminderProps {
  addReminder: (title: string) => void;
}

function NewReminder({ addReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!title) return;
    addReminder(title);
    setTitle("");
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter a reminder</label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary rounded-pill mt-2">
          Add Reminder
        </button>
      </form>
    </div>
  );
}

export default NewReminder;
