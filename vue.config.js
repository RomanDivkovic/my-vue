module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'hotpink'
    },
    name: 'My vue project',
    themeColor: 'darkgrey',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern:
            'https://official-joke-api.appspot.com/jokes/programming/ten'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern:
            'https://api.openweathermap.org/data/2.5/weather?q=gothenburg&units=metric&APPID=6e14ee8cdb51cf3777c97628f3ae1998'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://official-joke-api.appspot.com/random_ten'
        }
      ]
    }
  }
}
