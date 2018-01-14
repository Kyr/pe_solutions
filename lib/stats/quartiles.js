module.exports = function (orderSet) {
  const {lowerQuartile, median, upperQuartile} = getQuartiles(orderSet)
  // console.log(`lowerQuartile: ${lowerQuartile}`);
  // console.log(`median: ${median}`);
  // console.log(`upperQuartile: ${upperQuartile}`);
  return {lowerQuartile, median, upperQuartile};
};

function getQuartiles (set) {
  const oddLength = set.length % 2 === 1;

  if (oddLength) {
    return oddMedian(set);
  }

  return evenMedian(set);
}

function oddMedian (set) {
  if (set.length === 3) {
    const [lowerQuartile, median, upperQuartile] = set;

    return {
      lowerQuartile,
      median,
      upperQuartile,
    };

  }
  const middle                  = Math.floor(set.length / 2);
  const median                  = set[middle];
  const {median: lowerQuartile} = getQuartiles(set.slice(0, middle));
  const {median: upperQuartile} = getQuartiles(set.slice(middle + 1));

  return {
    lowerQuartile,
    median,
    upperQuartile,
  };
}

function evenMedian (set) {
  if (set.length === 2) {
    const [lowerQuartile, upperQuartile] = set;

    return {
      lowerQuartile,
      median: .5 * (lowerQuartile + upperQuartile),
      upperQuartile,
    };

  }
  const middle                  = set.length / 2;
  const median                  = (set[middle - 1] + set[middle]) / 2;
  const {median: lowerQuartile} = getQuartiles(set.slice(0, middle));
  const {median: upperQuartile} = getQuartiles(set.slice(middle));

  return {
    lowerQuartile,
    median,
    upperQuartile,
  };
}

