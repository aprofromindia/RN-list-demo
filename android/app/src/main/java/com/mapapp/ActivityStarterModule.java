package com.mapapp;

import android.content.Intent;
import android.support.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;

import java.util.List;

/**
 * Created by Apro on 28-06-2017.
 */

class ActivityStarterModule extends ReactContextBaseJavaModule {

    ActivityStarterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return ActivityStarterModule.class.getSimpleName();
    }

    @ReactMethod
    public void showSecondActivity(@NonNull ReadableArray coordinates){
        ReactApplicationContext context = getReactApplicationContext();
        final Intent intent = new Intent(context, SecondActivity.class);
        intent.putExtra(SecondActivity.ARRAY_SIZE, coordinates.size());
        context.startActivity(intent);
    }
}
