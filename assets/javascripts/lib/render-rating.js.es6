var renderUnboundRating = function(rating) {
  var stars = ''
  for (var i = 0; i < 10; i++) {
    var value = i + 1,
        checked = value <= rating ? 'checked' : '',
        disabled = disabled ? 'disabled' : '',
        star = '<input type="radio" value="' + value + '" ' + checked + ' disabled><i></i>';
		star = '<div id="jRate" style="height:50px;width: 200px;"></div>';
    stars = stars.concat(star)
  }
  
  return '<div id="jRate" style="height:50px;width: 200px;"></div>';
};

export default renderUnboundRating;
