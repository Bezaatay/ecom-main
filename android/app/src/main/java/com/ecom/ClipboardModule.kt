package com.ecom

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ClipboardModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val clipboardManager = reactContext.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager

    override fun getName(): String {
        return "ClipboardModule"
    }

    @ReactMethod
    fun setString(text: String) {
        val clip = ClipData.newPlainText("Copied Text", text)
        clipboardManager.setPrimaryClip(clip)
    }
}
