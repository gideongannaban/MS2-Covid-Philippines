window.onload = function () {
    getCovidData();
};

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getCovidData() {
  fetch("https://api.covid19api.com/summary", requestOptions)
    .then(function(resp) {return resp.json()})
    .then(function(data) {
        let totalCase = data.Global.TotalConfirmed;
        let totalRecovery = data.Global.TotalRecovered;
        let totalDeath = data.Global.TotalDeaths;
        let dailyCase = data.Global.NewConfirmed;
        let dailyRecovery = data.Global.NewRecovered;
        let dailyDeath = data.Global.NewDeaths;

        document.querySelector('.global-case').innerHTML = totalCase.toLocaleString('en');
        document.querySelector('.global-recovery').innerHTML = totalRecovery.toLocaleString('en');
        document.querySelector('.global-death').innerHTML = totalDeath.toLocaleString('en');
        document.querySelector('.global-daily-cases').innerHTML = dailyCase.toLocaleString('en');
        document.querySelector('.global-daily-recovery').innerHTML = dailyRecovery.toLocaleString('en');
        document.querySelector('.global-daily-deaths').innerHTML = dailyDeath.toLocaleString('en');

    })
    .catch(function(){
        console.log("error");
    }) 
    // setTimeout(getCovidData, 43,200,000) // this will update every 12 hrs    
}
