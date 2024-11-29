package com.ecom

import android.content.ContentResolver
import android.content.Context
import android.provider.Settings
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class BrightnessModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "BrightnessModule"
    }

    @ReactMethod
    fun getBrightness(promise: Promise) {
        try {
            val contentResolver: ContentResolver = reactApplicationContext.contentResolver
            val brightness = Settings.System.getInt(contentResolver, Settings.System.SCREEN_BRIGHTNESS)
            val binaryBrightness = convertToBinary(brightness)
            promise.resolve(binaryBrightness)

        } catch (e: Exception) {
            promise.reject("ERROR", "Parlaklık seviyesi alınırken hata oluştu: ${e.message}")
        }
    }

    @ReactMethod
    fun onChangeBrightness(level: Double, promise: Promise) {
        try {
            val context: Context = reactApplicationContext
            if (Settings.System.canWrite(context)) {
                Log.w("onChangeBrightness"," Brightness is: $level")
                val contentResolver: ContentResolver = context.contentResolver
                val brightness = (level.coerceIn(0.0, 1.0) * 255).toInt()
                Settings.System.putInt(contentResolver, Settings.System.SCREEN_BRIGHTNESS, brightness)
                promise.resolve("Parlaklık seviyesi değiştirildi: $brightness")
            } else {
                promise.reject("PERMISSION_DENIED", "WRITE_SETTINGS izni gerekli.")
            }
        } catch (e: Exception) {
            promise.reject("ERROR", "Parlaklık seviyesi değiştirilemedi: ${e.message}")
        }
    }

    private fun convertToBinary(brightness: Int): Float {
        // Minimum ve maksimum parlaklık değerleri
        val minBrightness = 1
        val maxBrightness = 255

        // Parlaklığı 0-1 aralığına ölçekle
        return (brightness - minBrightness).toFloat() / (maxBrightness - minBrightness)
    }
}
