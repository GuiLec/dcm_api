import { DictationEvent } from '../user.interface';

export class CreateUserDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly dictationsHistory: DictationEvent[];
}
