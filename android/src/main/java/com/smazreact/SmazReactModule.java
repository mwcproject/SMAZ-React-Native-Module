// Package
package com.smazreact;


// Imports
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;


// Classes

// SMAZ React module class
@ReactModule(name = SmazReactModule.NAME)
public class SmazReactModule extends ReactContextBaseJavaModule {

	// Name
	public static final String NAME = "SmazReact";
	
	// Static
	static {
	
		// Try
		try {
		
			// Load library
			System.loadLibrary("cpp");
		}
		
		// Catch errors
		catch(Exception error) {
		
		}
	}

	// Constructor
	public SmazReactModule(ReactApplicationContext reactContext) {
	
		// Delegate constructor
		super(reactContext);
	}

	// Get name
	@Override
	@NonNull
	public String getName() {
	
		// Return name
		return NAME;
	}
	
	// Compress
	@ReactMethod
	public void compress(String input, Promise promise) {

		// Try
		try {

			// Resolve promise to native compress
			promise.resolve(nativeCompress(input));
		}

		// Catch errors
		catch(Exception error) {

			// Reject promise
			promise.reject("Error", error);
		}
	}

	// Decompress
	@ReactMethod
	public void decompress(String input, Promise promise) {

		// Try
		try {

			// Resolve promise to native decompress
			promise.resolve(nativeDecompress(input));
		}

		// Catch errors
		catch(Exception error) {

			// Reject promise
			promise.reject("Error", error);
		}
	}
	
	// Native Compress prototype
	private static native String nativeCompress(String input);
	
	// Native decompress prototype
	private static native String nativeDecompress(String input);
}
