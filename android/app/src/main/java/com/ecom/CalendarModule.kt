package com.ecom

import android.os.Build
import android.util.Log
import android.widget.Toast
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.time.LocalTime


class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CalendarModule"
    }

    override fun getConstants(): MutableMap<String, Any> =
        hashMapOf("DEFAULT_EVENT_NAME" to "New Event")


    @ReactMethod
    fun createCalendarEvent(name: String, location: String, promise: Promise) {
        try {
            val eventId = 123 
            promise.resolve(eventId)
        } catch (e: Exception) {
            promise.reject("EVENT_CREATION_ERROR", "Failed to create event", e)
        }
    }

}