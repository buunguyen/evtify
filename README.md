eventify
====

Add event capability for JavaScript objects.

First, setup: 
```javascript
var obj = {}, anotherObj = {};
Eventify(obj, anotherObj, ...);
...
```
Or:
```javascript
function Person() {};
Person.prototype = new Eventify();
var obj = new Person();
...
```

Register handler for one or more events with optional context:
```javascript
obj.on('evt1 evt2', function(eventName, params...) {
		// 'this' will be 'window'
	})
   	.on('evt3', function(eventName, params...) { 
   		// 'this' will be context obj
   	}, context);
```

Trigger one or more events:
```javascript
obj.trigger('evt1 evt2 evt3', args...);
```

Remove all handlers of all events:
```javascript
obj.off(); 
```

Remove all handlers of specific events:
```javascript
obj.off('evt1 evt2'); 
```

Remove a specific handler of specific events:
```javascript
obj.off('evt1 evt2', handler); 
```

That's it!  If not, check out the [specs](https://github.com/buunguyen/eventify/blob/master/test/eventify.specs.js).