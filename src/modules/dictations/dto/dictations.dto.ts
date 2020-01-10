import { ChoiceInput } from '../dictations.interface';

export class CreateDictationsDto {
  readonly id: string;
  readonly name: string;
  readonly text: string;
  readonly choiceInputs: ChoiceInput[];
}
