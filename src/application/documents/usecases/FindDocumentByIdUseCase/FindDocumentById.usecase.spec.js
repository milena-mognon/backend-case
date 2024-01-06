const FakeDocumentRepository = require('../../../../test/repositories/documents/FakeDocumentRepository');
const FindDocumentByIdUseCase = require('./FindDocumentById.usecase');

describe('Find Document By Id Use Case - Unit Test', () => {
  it('should find a document by id', async () => {
    await FakeDocumentRepository().create({
      id: '123',
      title: 'Primeiro Documento Teste',
      description: 'Documento de Teste para desafio Jurisoft',
      keywords: ['Documento', 'Jurisoft'],
    });

    const document = await FindDocumentByIdUseCase(FakeDocumentRepository, {
      document_id: '123',
    });

    expect(document).toBeTruthy();
    expect(document.id).toBe('123');
    expect(document.title).toBe('Primeiro Documento Teste');
    expect(document.description).toBe(
      'Documento de Teste para desafio Jurisoft',
    );
    expect(document.keywords).toEqual(['Documento', 'Jurisoft']);
  });
});
