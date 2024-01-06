const FakeDocumentRepository = require('../../../../test/repositories/documents/FakeDocumentRepository');
const FindDocumentsUseCase = require('./FindDocuments.usecase');

describe('Find Documents Use Case - Unit Test', () => {
  it('should find documents', async () => {
    await FakeDocumentRepository().create({
      id: '123',
      title: 'Primeiro Documento Teste',
      description: 'Documento de Teste para desafio Jurisoft',
      keywords: ['Documento', 'Jurisoft'],
    });

    await FakeDocumentRepository().create({
      id: '456',
      title: 'Segundo Documento Teste',
      description: 'Documento de Teste para desafio Jurisoft 2',
      keywords: ['Documento', 'Jurisoft', 'Novo'],
    });

    const documents = await FindDocumentsUseCase(FakeDocumentRepository);

    expect(documents).toHaveLength(2);
  });
});
