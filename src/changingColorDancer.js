var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  var hexArray = ['blue','yellow','green', 'purple'];
  var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];
  this.$node.css({borderColor:randomColor});
};

