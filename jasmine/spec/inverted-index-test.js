// Test whether JSON file is loaded and parsed
describe('Read book data', function() {

  // Initialise object
  var index;

  beforeEach(function() {

    index = new Index();
  });

  // Ensure non empty object is returned by createIndex
  it('is defined', function() {

    expect(index.createIndex('books.json')).toBeDefined();
  });

  it('is an object', function() {

    expect(index.createIndex('books.json')).toEqual(jasmine.any(Object));
  });

  it('is not empty', function() {

    expect(index.createIndex('books.json')).not.toEqual({});
  });
});
