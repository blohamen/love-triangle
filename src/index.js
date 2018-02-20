/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var index = 0;
  var triangles = [];
  var indexs = [];
  var countTriangles = 0;
  for(var i = 0; i< preferences.length; i++)
  {
    if(preferences[i] === -1) continue;
    triangles.length = indexs.length = 0;
    triangles.push(preferences[i]);
    indexs.push(i+1);
    if(indexs[0] === triangles[0]) continue;
    triangles.push(preferences[triangles[0] - 1]);
    indexs.push(triangles[0]);
    triangles.push(preferences[triangles[1] - 1]);
    indexs.push(triangles[1]);
    if(checkedArrays(triangles,indexs)){
      countTriangles++;
      deleteRepeat(preferences,triangles);
    } else {
      continue;
    }
  }
  return countTriangles;
  };
  function checkedArrays(triangles = [], indexs = []){
    triangles.sort(function(a,b){
      return a - b;
    });
      indexs.sort(function(a,b){
      return a - b;
    });
    for(var i = 0; i< triangles.length; i++)
    {
      if(triangles[i] !== indexs[i]) return 0;
    }
    return 1;
  };
  function deleteRepeat(preferences = [], triangles = [])
  {
     for(var i = 0; i< preferences.length; i++){
      for(var j = 0; j< triangles.length; j++){
        if(preferences[i]=== triangles[j]){
          preferences[i] = -1;
          break;
        }
      }
     }
  };
