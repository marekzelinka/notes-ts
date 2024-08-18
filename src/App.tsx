import { useState, type FormEvent } from 'react';
import type { Note } from './types';

const App = () => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      content: 'testing',
    },
  ]);

  const addNote = (content: Note['content']) => {
    const noteObject: Note = {
      id: String(notes.length + 1),
      content,
    };
    setNotes((notes) => notes.concat(noteObject));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addNote(newNote);

    // Reset the form
    setNewNote('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          id="content"
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
          aria-label="Content"
          placeholder="New note"
        />
        <button type="submit">Save</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
