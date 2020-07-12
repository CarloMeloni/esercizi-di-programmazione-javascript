/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

function sottosopra(arr1, arr2, arr3) {
  let arrConc = arr1.concat(arr2.concat(arr3));
  const arrPari = [];
  const arrDispari = [];
  const newArr = [];
  for(let num of arrConc) {
    if(num %  2 === 0) {
      arrPari.push(num)
    } else {
      arrDispari.push(num)
    }
  }
  newArr.push(arrDispari);
  newArr.push(arrPari);
  
  return newArr;
}
