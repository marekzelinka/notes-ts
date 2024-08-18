import { useEffect, useState, type FormEvent } from 'react';
import { createNote, getAllNotes } from './services/note';
import type { Note } from './types';

const App = () => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getAllNotes().then(setNotes);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const addedNote = await createNote({ content: newNote });
    setNotes((notes) => notes.concat(addedNote));

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
