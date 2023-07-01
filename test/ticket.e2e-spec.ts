import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TicketModule } from '../src/ticket/ticket.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from 'src/notes/notes.module';

describe('TicketController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
        }),
        TicketModule,
        NotesModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ticket (GET)', () => {
    return request(app.getHttpServer()).get('/ticket').expect(200);
  });

  it('/notes (GET)', () => {
    return request(app.getHttpServer()).get('/notes').expect(200);
  });
});
