import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TicketModule } from '@app/ticket/ticket.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from '@app/notes/notes.module';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';
import { TicketPrimitiveMother } from '@testApp/src/ticket/domain/ticket_primitive.mother';
import { getDataSource } from '@app/shared/infrastructure/persistence/typeorm/data-source';

describe('TicketController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
  });

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
    (await getDataSource()).dropDatabase();
  });

  it('/ticket (GET)', async () => {
    return request(app.getHttpServer())
      .get('/ticket')
      .expect(200)
      .expect((response: Response) => {
        expect(response.body['data']).toHaveLength(0);
      });
  });

  it('/ticket (POST)', async () => {
    const ticket: TicketPrimitive = TicketPrimitiveMother.random();
    return request(app.getHttpServer())
      .post('/ticket')
      .send(ticket)
      .expect(201);
  });

  it('/ticket (GET)', async () => {
    return request(app.getHttpServer())
      .get('/ticket')
      .expect(200)
      .expect((response: Response) => {
        expect(response.body['data']).toHaveLength(1);
      });
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
