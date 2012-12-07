eventify
====

Add event capability for JavaScript objects.

First, setup: 
```javascript
var obj = {};
Eventify(obj);
...
```
Or:
```javascript
function Person() {};
Person.prototype = new Eventify();
var obj = new Person();
...
```

Register handler for one or more events:
```javascript
obj.on('evt1 evt2', function() {
	...
}).on('evt3', ...);
```

Trigger:
```javascript
obj.trigger('evt1 evt2 evt3');
```

Remove all handlers:
```javascript
obj.off(); 

Remove all handlers of specific events:
```javascript
obj.off('evt1 evt2'); 
``````

Remove a specific handler of specific events:
```javascript
obj.off('evt1 evt2', handler); 
``````

That's it!  Or, see the [specs]().