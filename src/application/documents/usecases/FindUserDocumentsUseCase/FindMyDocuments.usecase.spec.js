const FakeDocumentRepository = require('../../../../test/repositories/documents/FakeDocumentRepository');
const FindMyDocumentsUseCase = require('./FindMyDocuments.usecase');

describe('Find My Documents Use Case - Unit Test', () => {
  it('should find documents by owner id', async () => {
    await FakeDocumentRepository().create({
      id: '123',
      owner_id: '111',
      title: 'Primeiro Documento Teste',
      description: 'Documento de Teste para desafio Jurisoft',
      keywords: ['Documento', 'Jurisoft'],
    });

    await FakeDocumentRepository().create({
      id: '456',
      owner_id: '222',
      title: 'Segundo Documento Teste',
      description: 'Documento de Teste para desafio Jurisoft 2',
      keywords: ['Documento', 'Jurisoft', 'Novo'],
    });

    const documents = await FindMyDocumentsUseCase(FakeDocumentRepository, {
      owner_id: '111',
    });

    expect(documents).toHaveLength(1);
  });
});
