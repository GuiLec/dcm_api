import { ChoiceInput } from '../dictations.interface';
import { User } from 'src/modules/user/user.interface';

export class CreateDictationsDto {
  readonly id: string;
  readonly name: string;
  readonly text: string;
  readonly author?: User;
  readonly choiceInputs: ChoiceInput[];
  readonly difficulty: number;
  readonly language: string;
}
