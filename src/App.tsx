import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Note } from './components/models/note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: 'Meetings',
      text: 'Schedule Meeting',
      color: '#dfdfdf',
      date: new Date().toString(),
    },
  ]);

  return <Header />;
}

export default App;
