import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { NoteFinder } from '../application/find/note-create.service';
import { NoteCreator } from '../application/create/note-create.service';

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
  async create(@Body() body) {
    this.logger.debug(body);
    return await this.noteCreator.run(body);
  }
}
