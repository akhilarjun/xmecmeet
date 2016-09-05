var app = angular.module('xmec', []);

app.controller('xmec-ctrl', ['$scope', '$timeout', function (scope, timeout) {
    'use strict';
    
    //animate the logo
    timeout(function () {
        $('.logo').addClass('show');
    },500);
    
    //eventualy show the timer
    timeout(function () {
        $('.logo .caption.helper').addClass('show');
    },1500);
    
    var today, theDDay, todayInMillis, DDateInMillis, dateOffsetInSec;
    scope.calculateDateOffset = function () {
        today = new Date();
        theDDay = new Date(2016, 11, 17);
        todayInMillis = today.getTime();
        DDateInMillis = theDDay.getTime();
        dateOffsetInSec = Math.ceil((DDateInMillis - todayInMillis) / 1000);
        scope.dateoffset = {
            seconds     : dateOffsetInSec % 60,
            minutes     : Math.floor(dateOffsetInSec / 60) % 60,
            hours       : Math.floor(dateOffsetInSec / 60 / 60) % 24,
            days        : Math.floor(dateOffsetInSec / 60 / 60 / 24) % 7,
            weeks       : Math.floor(dateOffsetInSec / 60 / 60 / 24 / 7),
            months      : Math.floor(dateOffsetInSec / 60 / 60 / 24 / 30.4368),
            years       : Math.abs(theDDay.getFullYear() - today.getFullYear()),
            totalDays   : Math.floor(dateOffsetInSec / 60 / 60 / 24),
            totalHours  : Math.floor(dateOffsetInSec / 60 / 60),
            totalMinutes: Math.floor(dateOffsetInSec / 60),
            totalSeconds: dateOffsetInSec
        };
        timeout(function () {
            scope.calculateDateOffset();
        }, 1000);
    };
    
    //calculate the time left
    scope.calculateDateOffset();
}]);
