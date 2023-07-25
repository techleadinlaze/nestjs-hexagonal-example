import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TicketModule } from '@app/ticket/ticket.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from '@app/notes/notes.module';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';

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

  afterAll(async () => {
    await app.close();
  });

  it('/ticket (GET)', async () => {
    return request(app.getHttpServer())
      .get('/ticket')
      .expect(200)
      .expect((response: Response) => {
        expect(response.body['data']).toHaveLength(1);
      });
  });

  it('/ticket (POST)', async () => {
    const ticket: TicketPrimitive = {
      id: 'f09ae5e8-0f42-45ea-98b0-c2aa344e4a1a',
      description: 'description',
      status: 'OPEN',
      priority: 1,
      createdAt: new Date().toISOString(),
    };
    return request(app.getHttpServer())
      .post('/ticket')
      .send(ticket)
      .expect(201);
  });

  it('/notes (GET)', () => {
    return request(app.getHttpServer())
      .get('/notes')
      .expect(200)
      .expect((response: Response) => {
        expect(response.body).toHaveLength(0);
      });
  });
});
