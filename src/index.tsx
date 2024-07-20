// Imports
import { NativeModules, Platform } from "react-native";
import { Buffer } from "buffer";


// Check if SMAZ React module doesn't exist
if(!NativeModules.SmazReact) {

	// Throw error
	throw new Error("The package '@mwcproject/smaz-react' doesn't seem to be linked. Make sure: \n\n" + Platform.select({
		ios: "- You have run 'pod install'\n",
		default: ""
	}) + "- You rebuilt the app after installing the package\n- You are not using Expo managed workflow\n");
}


// Classes

// SMAZ class
export default class Smaz {

	// Operation failed
	public static readonly OPERATION_FAILED = null;

	// Compress
	static async compress(
		input: Buffer
	): Promise<Buffer | null> {
	
		// Try
		try {
	
			// Return compressing input with SMAZ React module
			return Buffer.from(await NativeModules.SmazReact.compress(input.toString("hex")), "hex");
		}
		
		// Catch errors
		catch(
			error: any
		) {
		
			// Return operation failed
			return Smaz.OPERATION_FAILED;
		}
	}
	
	// Decompress
	static async decompress(
		input: Buffer
	): Promise<Buffer | null> {
	
		// Try
		try {
	
			// Return decompressing input with SMAZ React module
			return Buffer.from(await NativeModules.SmazReact.decompress(input.toString("hex")), "hex");
		}
		
		// Catch errors
		catch(
			error: any
		) {
		
			// Return operation failed
			return Smaz.OPERATION_FAILED;
		}
	}
}
