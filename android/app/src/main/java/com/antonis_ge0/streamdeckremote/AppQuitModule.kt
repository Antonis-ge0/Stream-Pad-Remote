package com.antonis_ge0.streamdeckremote

import android.os.Handler
import android.os.Looper
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import kotlin.system.exitProcess

class AppQuitModule(
  reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String = "AppQuit"

  @ReactMethod
  fun quit(promise: Promise) {
    val activity = reactApplicationContext.currentActivity

    if (activity == null) {
      promise.reject("APP_QUIT_UNAVAILABLE", "No active Android activity is available.")
      return
    }

    Handler(Looper.getMainLooper()).post {
      try {
        activity.finishAndRemoveTask()
        promise.resolve(null)

        Handler(Looper.getMainLooper()).postDelayed({
          android.os.Process.killProcess(android.os.Process.myPid())
          exitProcess(0)
        }, 250)
      } catch (error: Exception) {
        promise.reject("APP_QUIT_FAILED", error.message, error)
      }
    }
  }
}
