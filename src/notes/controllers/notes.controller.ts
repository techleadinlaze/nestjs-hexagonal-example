import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { NoteFinder } from '@app/notes/application/note_finder.service';
import { NoteCreator } from '@app/notes/application/note_create.service';
import { Note } from '../domain/notes.model';

@Controller('notes')
export class NoteController {
  private readonly logger = new Logger(NoteController.name);

  public constructor(
    private noteFinder: NoteFinder,
    private noteCreator: NoteCreator,
  ) {}

  @Get()
  public async findAll(
    @Query() query: { limit; offset; search },
  ): Promise<Note[]> {
    return await this.noteFinder.run(query);
  }

  @Post()
  public async create(@Body() body: Note): Promise<Note> {
    this.logger.debug(body);
    return await this.noteCreator.run(body);
  }
}
