/*! eventify.js 0.0.1, 2012-12-09
 *  https://github.com/buunguyen/eventify
 *  Copyright (c) 2012 Buu Nguyen
 *  Licensed under the Apache License, Version 2.0 */
 (function() {
    var SPLITTER = /\s+/;

    var each = function(array, callback) {
        for(var i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    };

    function Eventify() {
        if (arguments.length > 0) {
            for (var i = 0; i < arguments.length; i++) 
                for (var prop in Eventify.prototype)
                    arguments[i][prop] = Eventify.prototype[prop];
            return arguments;
        }
    }

    Eventify.prototype.getHandlers = function (event) {
        var handlers = this._handlers || (this._handlers = {});
        if (typeof event === 'undefined') 
            return handlers;
        return handlers[event] || (handlers[event] = []);
    };

    Eventify.prototype.on = 
    Eventify.prototype.addEventListener = function (evts, handler, context) {
        var self = this,
            events = evts.split(SPLITTER);
            
        each(events, function (event) {
            self.getHandlers(event).push([handler, context]);
        });
        return this;
    };

    Eventify.prototype.off = 
    Eventify.prototype.removeEventListener = function (evts, handler) {
        if (typeof evts === 'undefined') {
            this._handlers = null;
        } else {
            var self = this,
                events = evts.split(SPLITTER);

            each(events, function (event) {
                var handlers = self.getHandlers();
                if (typeof handler === 'undefined') {
                    handlers[event] = null;
                } else {
                    for (var i = handlers[event].length - 1; i >= 0; i--) {
                        var storedHandler = handlers[event][i];
                        if (storedHandler[0] === handler) {
                            handlers[event].splice(i, 1);
                            return;
                        }
                    }
                }
            });
        }
        return this;
    };

    Eventify.prototype.trigger = 
    Eventify.prototype.fire = function (evts) {
        var self = this,
            args = [].slice.call(arguments, 1), 
            events = evts.split(SPLITTER);

        each(events, function (event) {
            var handlers = self.getHandlers(event);
            each(handlers, function (handler) {
                return handler[0].apply(handler[1], [event].concat(args));
            });
        });
        return this;
    };  

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports)
            exports = module.exports = Eventify;
        exports.Eventify = Eventify;
    } else {
        this.Eventify = Eventify;
    }  
}).call(this);