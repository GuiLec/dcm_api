export interface Dictation {
  id: string;
  name: string;
  text: string;
  choiceInputs: ChoiceInput[];
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
