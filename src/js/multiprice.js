function multiplyPrice() {
  const selectedElement = document.getElementById('nightsSelected');
  const numOfNights = Number(selectedElement.value);

  // console.log(numOfNights);
  let cost = 1000;

  switch (numOfNights) {
    case 1:
      cost *= numOfNights;
      break;

    case 2:
      cost *= numOfNights;
      break;

    case 3:
      cost *= numOfNights;
      break;

    case 4:
      cost *= numOfNights;
      break;

    case 5:
      cost *= numOfNights;
      break;

    case 6:
      cost *= numOfNights;
      break;

    case 7:
      cost *= numOfNights;
      break;
  }

  document.getElementById('price').value = cost;
}

document
  .getElementById('nightsSelected')
  .addEventListener('change', multiplyPrice);
