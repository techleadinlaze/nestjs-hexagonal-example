import { Module } from '@nestjs/common';
import { TicketModule } from '@app/ticket/ticket.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from '@app/notes/notes.module';

@Module({
  imports: [
    TicketModule,
    NotesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [],
})
export class AppModule {}
