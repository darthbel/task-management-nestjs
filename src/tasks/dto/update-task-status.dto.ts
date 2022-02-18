import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class UpdateTastStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
