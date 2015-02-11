var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({borderColor: "green"});
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
 // var hexArray = ['blue','yellow','green', 'purple'];
  //var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];
  Dancer.prototype.step.call(this);
  this.$node.animate({
    opacity: '0.5',
    height: 40 * Math.random(),
    width: 40 * Math.random()
    //height: '150px' * this.h,
    //width: '150px' *this.w
  });
};
// $('.className').css('color', 'red')
