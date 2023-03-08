$(function () {
  $('#book-date').datepicker({
    dateFormat: 'dd/mm/yy',
    constainInput: true,
    minDate: 0,
    maxDate: '+2M',
  });
});

$(function () {
  $('#check-date').datepicker({
    dateFormat: 'dd/mm/yy',
    constainInput: true,
    minDate: 0,
    maxDate: '+2M',
  });
  $('#check-date').datepicker('setDate', '0d');
});

$(function () {
  var from = $('#from-date')
      .datepicker({
        dateFormat: 'dd/mm/yy',
        constainInput: true,
        minDate: 0,
        maxDate: '+2M',
      })
      .on('change', function () {
        to.datepicker('option', 'minDate', getDate(this));
      }),
    to = $('#to-date')
      .datepicker({
        dateFormat: 'dd/mm/yy',
        maxDate: '+2M',
      })
      .on('change', function () {
        from.datepicker('option', 'maxDate', getDate(this));
      });
  $('#to-date').datepicker('setDate', '+1d');
});

function getDate(element) {
  let date;
  let dateFotmat = 'dd/mm/yy';
  try {
    date = $.datepicker.parseDate(dateFotmat, element.value);
  } catch (error) {
    date = null;
  }
  return date;
}
