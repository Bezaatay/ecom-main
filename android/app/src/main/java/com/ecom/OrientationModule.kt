package com.ecom

import android.app.Activity
import android.content.pm.ActivityInfo
import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class OrientationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "OrientationModule"
    }

    private fun sendOrientationChangeEvent(orientation: String) {

        val params = Arguments.createMap()
        params.putString("orientation", orientation)

        // Event gönderme
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("lockDidChange", params)
    }

    @ReactMethod
    fun lockToPortrait() {
        val activity: Activity? = currentActivity
        activity?.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT

        sendOrientationChangeEvent("PORTRAIT")
    }

    @ReactMethod
    fun lockToLandscapeLeft() {
        val activity: Activity? = currentActivity
        activity?.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
        sendOrientationChangeEvent("LANDSCAPE-LEFT")
    }

    @ReactMethod
    fun addListener(eventName: String) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        // Keep: Required for RN built in Event Emitter Calls.
    }
}
