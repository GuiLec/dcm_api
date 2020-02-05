import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  dictationsHistory: [
    {
      id: String,
      dictationName: String,
      score: String,
      date: Number,
    },
  ],
  dictationsDifficulties: [Number],
  selectedLanguage: String,
});
