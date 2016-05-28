'use strict';

weatherForecast
.service('forecastService', function(){
    var self = this;
    this.name = 'Juan Ocasio';
    this.nameLength = function(){
        return self.name.length;
    };
});
