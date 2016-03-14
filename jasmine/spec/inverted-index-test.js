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

  // Ensure keys map to correct object
  describe('Proper mapping', function() {

    // Object that holds the functions
    var invertedIndex;

    beforeEach(function() {

      invertedIndex = new InvertedIndex();

      // Load and parse JSON
      objectArray = invertedIndex.createIndex('books.json');
    });

    /* Test key object matching */
    it('maps Alice to first object', function() {

      expect(invertedIndex.index[Alice.toLowerCase()]).toEqual([objectArray[0]]);
    });

    it('maps Lord to second object', function() {

      expect(invertedIndex.index[Lord.toLowerCase()]).toEqual([objectArray[1]]);
    });
  });
});

// Ensure search function returns the correct objects word is found in
describe('Search index', function() {

  // Object containing the functions
  var invertedIndex;

  // Array of the object to be indexed
  var objectArray;

  beforeEach(function() {

    invertedIndex = new InvertedIndex();

    // Load and parse JSON
    objectArray = invertedIndex.createIndex('books.json');
  });

  it('finds "hole" in first object', function() {

    expect(invertedIndex.searchIndex('hole')).toEqual(objectArray[0]);
  });

  it('finds "unusual" in second object', function() {

    expect(invertedIndex.searchIndex('unusual')).toEqual(objectArray[1]);
  });
});
