const newDocument = require('./Document');

describe('Document Entity - Unit Test', () => {
  it('should create a new document', () => {
    const document = newDocument({
      title: 'Primeiro Documento Teste',
      description: 'Documento de Teste para desafio Jurisoft',
      owner_id: '1',
      keywords: ['Documento', 'Jurisoft'],
    });
    expect(document.title).toBe('Primeiro Documento Teste');
    expect(document.description).toBe(
      'Documento de Teste para desafio Jurisoft',
    );
    expect(document.owner_id).toBe('1');
    expect(document.keywords).toEqual(['Documento', 'Jurisoft']);
  });

  test('should throw an error if title is not provided', () => {
    expect(() => {
      newDocument({
        description: 'Documento de Teste para desafio Jurisoft',
        owner_id: '1',
        keywords: ['Documento', 'Jurisoft'],
      });
    }).toThrow('Title is required');
  });

  test('should throw an error if owner_id is not provided', () => {
    expect(() => {
      newDocument({
        title: 'teste',
        description: 'Documento de Teste para desafio Jurisoft',
        keywords: ['Documento', 'Jurisoft'],
      });
    }).toThrow('Owner is required');
  });
});
