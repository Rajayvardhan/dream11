var unpivotJson = function (data, options) {
  var pivotCol = options.column;
  // var pivotVal = options.value;
  // var pivotRow = options.row;

  var out = [];
  data.forEach(function (rec) {    
    for (const [key, value] of Object.entries(rec)) {
      if (key !== "fat") {
        var doc = {};
        doc.snf = parseFloat(key);
        doc.rate = value;
        doc.fat = rec.fat;
        out.push(doc);
      }
    }
  });
  return out;
};

export default unpivotJson;