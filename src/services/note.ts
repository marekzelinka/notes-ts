import axios from 'axios';
import type { NewNote, Note } from '../types';

const instance = axios.create({ baseURL: 'http://localhost:3000/notes' });

export const getAllNotes = async () => {
  const response = await instance.get<Note[]>('/');
  return response.data;
};

export const createNote = async (newNote: NewNote) => {
  const response = await instance.post<Note>('/', newNote);
  return response.data;
};
