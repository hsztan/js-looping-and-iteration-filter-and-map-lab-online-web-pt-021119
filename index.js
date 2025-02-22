// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers
      .filter(function (driver){
      return driver.revenue > revenue
      })
      .map(function(driver){
        return driver.name
      })
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver){
    let key = Object.keys(attribute)[0];
    return driver[key] === attribute[key];
  })
}

function exactMatchToList(drivers, attribute) {
  return drivers
      .filter(function (driver){
      let key = Object.keys(attribute)[0];
      return driver[key] === attribute[key];
      })
      .map(function (driver){
        return driver.name
      })
}