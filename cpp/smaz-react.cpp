// Header files
#include "./smaz-react.h"
#include "../SMAZ-WASM-Wrapper-master/main.cpp"

using namespace std;


// Supporting function implementation

// Compress
vector<uint8_t> compress(const uint8_t *input, size_t inputSize) {

	// Check if getting compressed size failed
	const size_t compressedSize = compressSize(input, inputSize);
	if(compressedSize == invalidSize()) {
	
		// Throw error
		throw runtime_error("Getting compressed size failed");
	}
	
	// Check if compressing input failed
	vector<uint8_t> result(compressedSize);
	if(!compress(result.data(), result.size(), input, inputSize)) {
	
		// Throw error
		throw runtime_error("Compressing input failed");
	}
	
	// Return result
	return result;
}

// Decompress
vector<uint8_t> decompress(const uint8_t *input, size_t inputSize) {

	// Check if getting decompressed size failed
	const size_t decompressedSize = decompressSize(input, inputSize);
	if(decompressedSize == invalidSize()) {
	
		// Throw error
		throw runtime_error("Getting decompressed size failed");
	}
	
	// Check if decompressing input failed
	vector<uint8_t> result(decompressedSize);
	if(!decompress(result.data(), result.size(), input, inputSize)) {
	
		// Throw error
		throw runtime_error("Decompressing input failed");
	}
	
	// Return result
	return result;
}
