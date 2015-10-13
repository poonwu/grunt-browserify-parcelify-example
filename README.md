# Testing grunt-browserify with parcelify
I tried to find a workaround for grunt-browserify and parcelify. After researching the cause, it seems grunt-browserify is causing `async.setImmediate` to stop working after 1st `async.waterfall` task finished. This is certainly due to default `setImmediate` not working properly, so I forced `async.setImmediate` to fallback to `process.nextTick` in my grunt config.

# Usage

```
grunt
```
