
    const app=document.querySelector('.weather-app');
    const temp=document.querySelector('.temp');
    const dateOutput=document.querySelector('.date');
    const timeOutput=document.querySelector('.time');
    const conditionOutput=document.querySelector('.condition');
    const nameOutput=document.querySelector('.name');
    const icon=document.querySelector('.icon');
    const cloudOutput=document.querySelector('.cloud');
    const humidityOutput=document.querySelector('.humidity');
    const windOutput=document.querySelector('.wind');
    const form=document.querySelector('.locationInput');
    const search=document.querySelector('.search');
    const btn=document.querySelector('.submit');
    const cities=document.querySelector('.city');


        //default city when the page loads
        let cityInput="Vijayawada";
        //add click event to each city in the panel
        //function that return the day of the week
        function dayOfWeek(day,month,year){
            const weekday=[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];
            return weekday[new Date(`${day}/${month}/${year}`)]
        };
        function fetchWeatherData(){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6483b1507d395323d6beeebe6421750e`)
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
            })
        }
        //get the date and time
    const date=data.location.localtime;
    const y=parseInt(date.substr(0,4));
    const m=parseInt(date.substr(5,2));
    const d=parseInt(date.substr(8,2));
    const time=date.substr(11);
    dateOutput.innerHTML=`${dayOfTheWeek(d,m,y)} ${d},${m} ${y}`;
    timeOutput.innerHTML=time;
    nameOutput.innerHTML=data.location.name;
