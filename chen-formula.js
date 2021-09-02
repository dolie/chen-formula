var v = {
  'A': 10,
  'K': 8,
  'Q': 7,
  'J': 6,
  'T': 5,
  '9': 4.5,
  '8': 4,
  '7': 3.5,
  '6': 3,
  '5': 2.5,
  '4': 2,
  '3': 1.5,
  '2': 1
}

var cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

var table = cards.map((cr, r_i) => { // cl => Card Row

  var row = cards.reduce((acc, cc, c_i) =>{ // cc => Card column
    let points = null
    
    if (v[cc] === v[cr]){ //pair
      points = v[cc] * 2 > 5 ? v[cc] * 2 : 5
      return [...acc, points]
    }

    points = v[cr] > v[cc] ? v[cr] : v[cc]

    if(r_i < c_i) points = points + 2 // suited

    const delta = Math.abs(cards.indexOf(cr) - cards.indexOf(cc))

    switch(delta){
      case 1 : points = points; break; // no gap
      case 2 : points = points - 1; break;
      case 3 : points = points - 2; break;
      case 4 : points = points - 4; break;
      default : points = points - 5; break;
    }

    if ((delta === 1 || delta === 2) && v[cr] < v.Q && v[cc] < v.Q) points = points + 1

    points = Math.ceil(points)

    return [...acc, points]

  }, []) 

  return row.join(',')
})

table.forEach(r => console.log(r))

/* 
20,12,11,10,8,7,7,7,7,7,7,7,7
10,16,10,9,8,6,5,5,5,5,5,5,5
9,8,14,9,8,7,5,4,4,4,4,4,4
8,7,7,12,9,8,6,4,3,3,3,3,3
6,6,6,7,10,8,7,5,3,2,2,2,2
5,4,5,6,6,9,8,7,5,3,2,2,2
5,3,3,4,5,6,8,7,6,4,2,1,1
5,3,2,2,3,5,5,7,7,6,4,2,1
5,3,2,1,1,3,4,5,6,6,5,3,1
5,3,2,1,0,1,2,4,4,5,6,5,3
5,3,2,1,0,0,0,2,3,4,5,5,4
5,3,2,1,0,0,-1,0,1,3,3,5,5
5,3,2,1,0,0,-1,-1,-1,1,2,3,5 
*/