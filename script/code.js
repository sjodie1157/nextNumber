function createNextNumberFunction(array) {
    let currentIndex = 0;
    function nextNumber() {
      if (currentIndex < array.length) {
        const result = array[currentIndex];
        currentIndex++;
        return result;
      } else {
        currentIndex = 0;
      }
    }
    return nextNumber;
}

function displayNumb(){
    let numbDis = document.querySelector('[data-next]')
    return numbDis.textContent = getNextNumber()
}

let myArray = [2, 4, 10, 30 , 10];

let getNextNumber = createNextNumberFunction(myArray);
myArray = document.querySelector('[data-arr]').textContent = myArray

let btn = document.querySelector('[data-button]')
btn.addEventListener('click', displayNumb)
