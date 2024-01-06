const CreateDocumentUseCase = require('./CreateDocument.usecase');

test('Create Document Use Case - Unit Test', () => {
  const document = CreateDocumentUseCase({
    title: 'Primeiro Documento Teste',
    description: 'Documento de Teste para desafio Jurisoft',
    owner_id: '1',
    keywords: ['Documento', 'Jurisoft'],
  });
  expect(document.title).toBe('Primeiro Documento Teste');
  expect(document.description).toBe('Documento de Teste para desafio Jurisoft');
  expect(document.owner_id).toBe('1');
  expect(document.keywords).toEqual(['Documento', 'Jurisoft']);
});
