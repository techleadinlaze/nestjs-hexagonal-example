import { NoteFinder } from '@app/notes/application/find/note_create.service';
import { NoteRepositoryMock } from '../../infrastructure/notes_repository.mock';
import { Note } from '@app/notes/domain/notes.model';
import { NoteMother } from '../../domain/note.mother';

jest.mock('@app/notes/domain/notes.repository');

describe('NoteFinder', () => {
  let service: NoteFinder;
  let repositoryMock: NoteRepositoryMock;

  beforeEach(async () => {
    jest.clearAllMocks();
    repositoryMock = new NoteRepositoryMock();
    service = new NoteFinder(repositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return notes', async () => {
    const notes: Note[] = [NoteMother.random(), NoteMother.random()];
    jest
      .spyOn(repositoryMock, 'findAll')
      .mockReturnValue(Promise.resolve(notes));
    expect(await service.run({})).toEqual(notes);
  });

  it('it should return an empty notes', async () => {
    const notes = repositoryMock.getEmptyData();
    jest.spyOn(repositoryMock, 'findAll').mockReturnValue(notes);

    expect(await service.run({})).toEqual(await notes);
  });
});
