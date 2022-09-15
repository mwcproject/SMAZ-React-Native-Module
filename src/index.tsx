// Imports
import { NativeModules, Platform } from "react-native";
import { Buffer } from "buffer";


// Constants

// Linking error
const LINKING_ERROR = "The package '@nicolasflamel/smaz-react' doesn't seem to be linked. Make sure: \n\n" + Platform.select({ ios: "- You have run 'pod install'\n", default: "" }) + "- You rebuilt the app after installing the package\n- You are not using Expo managed workflow\n";

// SMAZ React
const SmazReact = NativeModules.SmazReact ? NativeModules.SmazReact : new Proxy({}, {
	get() {
		throw new Error(LINKING_ERROR);
	}
});


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
	
			// Return compressing input
			return Buffer.from(await SmazReact.compress(input.toString("hex")), "hex");
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
	
			// Return decompressing input
			return Buffer.from(await SmazReact.decompress(input.toString("hex")), "hex");
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
