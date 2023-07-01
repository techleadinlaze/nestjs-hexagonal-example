import { Module } from '@nestjs/common';
import { TicketModule } from './ticket/ticket.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './notes/notes.module';

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
