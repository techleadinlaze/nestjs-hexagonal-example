import { IsNumber, IsString } from 'class-validator';

export class TicketQueryDto {
  @IsNumber()
  public limit: number;

  @IsNumber()
  public offset: number;

  @IsString()
  public search: string;
}
