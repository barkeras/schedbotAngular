# Angular Filter Count-To

This project is an animated counter for Angularjs. The directive counts from one number to another over a configured duration. This forked version updates the original repository by including [AngularJS filter](https://docs.angularjs.org/api/ng/filter) options as well as the ability to display floating values.
[Demo](http://pfitzpaddy.github.io/angular-count-to/)

## Install via bower

```
$ bower install angular-filter-count-to
```

## How to use angular count-to

Inject the `count-to` directive in your app.

```
var myApp = angular.module('myApp', ['countTo']);
```

Apply the directive to a dom element.
```
 <!-- Number filter -->
 <span count-to="{{countTo}}" value="{{countFrom}}" duration="4" filter="number"></span>
```

```
 <!-- Currency filter -->
 <span count-to="{{countTo}}" value="{{countFrom}}" duration="4" filter="currency" params="$"></span>
```


### Attributes

The following attributes can be set as numbers on the directive element.

- ```count-to```  the number to count to.
- ```value```  the number to start counting from.
- ```duration```  how long the count should take in seconds.
- ```filter```  the [AngularJS filter](https://docs.angularjs.org/api/ng/filter).
- ```params```  the string of filter options.
- ```fractionSize```  the decimal formatting.
