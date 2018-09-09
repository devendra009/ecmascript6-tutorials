
// Rest Operator
function getGamesAvailableInTheClub(sports1, sports2, sports3, ...others) {
  let outdoor1 = sports1;
  return {
    outdoor1,
    sports2,
    sports3,
    others
  };
}

console.log(getGamesAvailableInTheClub('Cricket', 'Hockey', 'Swimming', ['Skating'], {indoor:'Carrom'}));