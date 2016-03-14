// Test whether JSON file is loaded and parsed
describe('Read book data', function() {

  // Initialise object
  var invertedIndex;

  beforeEach(function() {

    invertedIndex = new InvertedIndex();
  });

  // Ensure non empty object is returned by createIndex
  it('is defined', function() {

    expect(invertedIndex.createIndex('books.json')).toBeDefined();
  });

  it('is an object', function() {

    expect(invertedIndex.createIndex('books.json')).toEqual(jasmine.any(Object));
  });

  it('is not empty', function() {

    expect(invertedIndex.createIndex('books.json')).not.toEqual({});
  });
});

// Ensure index is createed after JSON loads
describe('Populate index', function() {

  // Initialise object
  var invertedIndex;

  beforeEach(function() {

    invertedIndex = new InvertedIndex();
    // Load and parse JSON
    invertedIndex.createIndex('books.json');
  });

  it('is defined', function() {

    expect(invertedIndex.index).toBeDefined();
  });

  it('is an object', function() {

    expect(invertedIndex.index).toEqual(jasmine.any(Object));
  });

  it('is not empty', function() {

    expect(invertedIndex.createIndex('books.json')).not.toEqual({});
  });
});
