export interface User {
  name: string;
  email: string;
  id: string;
  dictationsHistory: DictationEvent[];
}

export interface DictationEvent {
  id: string;
  dictationName: string;
  score: string;
  date: number;
}
