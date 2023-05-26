var dateNow = dayjs().format('dddd, MMMM D, YYYY'); 
var timeNow = (dayjs().format('HH')); 

  function currentTime() {
    for (var i = 9; i < 18; i++) {
      var hour = $('#' + i);
      
      if (hour.attr('id') === timeNow) {
        hour.addClass('present');
      } else if (Number(hour.attr('id')) < timeNow) {
        hour.addClass('past');
      } else {
        hour.addClass('future');
      }
    }
  }
  
  function loadSavedData() {
    for (i = 9; i < 18; i++) {
      var x = i;
      var descr = $('.description');
      $('#' + i).children(descr).val(localStorage.getItem(x));
    }
  }

  function storeData() {
    var date = localStorage.getItem('date');
  }

  $(document).ready(function() {
    $('.saveBtn').on('click', function(event) {
      event.preventDefault();
      var id_ = $(this).parent().attr('id');
      var descr = $(this).siblings('.description').val();
      localStorage.setItem(id_, descr);
      localStorage.setItem('date', dayjs().format('dddd, MMMM D, YYYY'));
    });

    currentTime();
    loadSavedData();
    storeData();

    $('#currentDay').text(dateNow);
});