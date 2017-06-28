package com.mapapp;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

/**
 * Created by Apro on 27-06-2017.
 */

public class SecondActivity extends AppCompatActivity {

    public static final String ARRAY_SIZE = "size";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_second);
        Toast.makeText(this, getIntent().getIntExtra(ARRAY_SIZE, 0) + "", Toast.LENGTH_LONG).show();
    }
}
