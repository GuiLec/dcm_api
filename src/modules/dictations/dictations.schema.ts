import * as mongoose from 'mongoose';

export const DictationSchema = new mongoose.Schema({
  id: String,
  name: String,
  text: String,
  choiceInputs: [
    {
      choiceInputID: String,
      position: Number,
      choices: [{ choiceID: String, text: String }],
      correctChoiceID: String,
      originalTextLength: Number,
    },
  ],
});
