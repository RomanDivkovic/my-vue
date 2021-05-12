<template>
    <div id="this-page">
      <section>
      <div>
          <h1></h1>
            <input 
            type="text" 
            class="search" 
            v-model="city"
            @keypress="getWeather"
            placeholder="Search for a city"
            />
      </div>

      <div v-if="weather.main">
          <p class="get-city">{{ weather.name }}, {{ weather.sys.country }}</p>
          <p class="Date"> {{ dateBuilder() }}</p>

          <p id="temperature">{{ Math.round(weather.main.temp) }}°c</p>
          <p id="weather">{{ weather.weather[0].main }}</p>
          <p class="hi-lo"> {{ Math.round(weather.main.temp_min) }}°c / {{ Math.round(weather.main.temp_max)}}°c </p>
      </div>
       <p v-else>You need to search you dummy</p>
      </section>
    </div>
</template>

<script>
export default {
    data () {
    return {
      key: '6e14ee8cdb51cf3777c97628f3ae1998',
      url: 'https://api.openweathermap.org/data/2.5/',
      city: null,
      weather: []
    }
  },
  methods: {
    getWeather (enter) {
      if (enter.key === "Enter") {
        fetch(`${this.url}weather?q=${this.city}&units=metric&APPID=${this.key}`)
        .then((response) => response.json())
        .then((result) => {
          this.weather = result
        })
      }
    },
    dateBuilder() {
        let d = new Date()
        let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December']
        let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday']

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day} 
                ${date} 
                ${month}
                ${year}`
    }
  }
}
</script>

<style>


#this-page {
  background-image: url('../assets/photo.jpg');
  background-size: cover;
  background-position: bottom;
}

section {
    min-height: 100vh;
}

.search {
    display: block;
    width: 100%;
    padding: 5px;
}

.get-city{
    color: whitesmoke;
    font-size: 50px;
    text-align: center;
    text-shadow:1px 1px black;
}
.Date {
    color: whitesmoke;
    font-size: 25px;
    text-align: center;
    text-shadow: 1px 1px black;
}
#temperature {
    color: whitesmoke;
    font-size: 50px;
    text-align: center;
    text-shadow: 2px 3px black;
}
#weather {
    color: whitesmoke;
    font-size: 20px;
    text-shadow: 1px 1px black;
}
.hi-lo {
    color: whitesmoke;
    font-size: 15px;
    text-shadow: 1px 1px black;
}
p {
    color: green;
    font-size: 25px;
}


</style>