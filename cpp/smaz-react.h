// Header guard
#ifndef SMAZ_REACT_H
#define SMAZ_REACT_H


// Header files
#include <vector>

using namespace std;


// Function prototypes

// Compress
vector<uint8_t> compress(const uint8_t *input, size_t inputSize);

// Decompress
vector<uint8_t> decompress(const uint8_t *input, size_t inputSize);


#endif
