module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    var name = "";
    for (el of members) {
      if (typeof el == "string")
        name += el.trim()[0];
    }
    return name.toUpperCase().split("").sort().join("");
  }
  else
    return false;
}