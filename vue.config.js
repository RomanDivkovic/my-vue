module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'hotpink'
    },
    name: 'My vue project',
    themeColor: 'steelblue',
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
            'https://api.openweathermap.org/data/2.5/weather?q=partille&units=metric&APPID=6e14ee8cdb51cf3777c97628f3ae1998'
        }
      ]
    }
  }
}
