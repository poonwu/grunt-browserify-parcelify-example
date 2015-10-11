# Grunt browserify parcelify plugin test project
The [parcelify](https://github.com/rotundasoftware/parcelify) plugin for [browserify](https://github.com/substack/node-browserify) have a serious issue with [grunt-browserify](https://github.com/jmreidy/grunt-browserify). 

I suspect this is due to `grunt-browserify` relying on [async](https://github.com/caolan/async) for running multiple, simultaneous tasks, which possibly break or interrupt `browserify` pipeline.

# Workaround
I found out that `next()` inside the `grunt-browserify` is causing the problem. Fixing this issue by changing the module itself may be a lengthy process for most of us. Especially if we want to use it *now*. 

I found a fast *workaround*. Simply assigning `options.keepAlive` to something other than `false` or `undefined`, the `next` function is replaced with your own `keepAlive` function or object.

see [here](https://github.com/poonwu/grunt-browserify-parcelify-example/blob/master/Gruntfile.js#L11)

# Usage

```
grunt browserify
```
