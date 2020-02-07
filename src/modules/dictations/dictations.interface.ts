import { User } from '../user/user.interface';

export interface Dictation {
  id: string;
  name: string;
  text: string;
  choiceInputs: ChoiceInput[];
  author?: User;
  difficulty: number;
  language: string;
}

export interface ChoiceInput {
  choiceInputID: string;
  position: number;
  choices: Choice[];
  correctChoiceID: string;
  originalTextLength: number;
}

export interface Choice {
  choiceID: string;
  text: string;
}
