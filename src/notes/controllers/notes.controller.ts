import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { NoteFinder } from '@app/notes/application/find/note_create.service';
import { NoteCreator } from '@app/notes/application/create/note_create.service';
import { Note } from '../domain/notes.model';

@Controller('notes')
export class NoteController {
  private readonly logger = new Logger(NoteController.name);

  constructor(
    private noteFinder: NoteFinder,
    private noteCreator: NoteCreator,
  ) {}

  @Get()
  async findAll(@Query() query: { limit; offset; search }) {
    return await this.noteFinder.run(query);
  }

  @Post()
  async create(@Body() body: Note) {
    this.logger.debug(body);
    return await this.noteCreator.run(body);
  }
}
