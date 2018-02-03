/* Psuedocode
  When clicking submit button,
    Grab Grid size height and width inputs.
    Make grid according to grid height and grid width inputs.
      Clear table.
      Create table row, iterate across number of columns.
      Repeat for next row < inputheight.

  On clicking table cell,
    Get current color input.
    Set this table cell to color input. */

/**
 * @description empties #pixelCanvas table, then appends new rows and columns
 * @param {eventObject} event - used to prevent default form submit action
 */
function makeGrid(event) {
  // Your code goes here!
  let x = $('#inputHeight').val();
  let y = $('#inputWidth').val();
  // Clearing existing table.
  $('#pixelCanvas').empty();

  for (let i=0; i<x; i++) {
    // Create a table row
    let tableRow=$('<tr></tr>');
    $('#pixelCanvas').append(tableRow);
  }
  for (let j=0; j<y; j++){
    // Create a column in every row.
    $('tr').append('<td></td>');
  }
  event.preventDefault();
};

// sizePicker form - Submit event handler
$('#sizePicker').on('submit',makeGrid);

// pixelCanvas table - click event handler
$('#pixelCanvas').on('click','td',function(evt) {
  // change background color of clicked cell to colorPicker value.
  const color=$('#colorPicker').val();
  $(evt.target).css('background',color);
});
