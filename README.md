# [Weather](https://weather.marcelojr.tech) - by [Marcelo Nogueira Jr.](https://marcelojr.tech) &middot; [![GitHub license](https://img.shields.io/badge/license-GPL--3.O-blue)](https://github.com/marcelonogjr/weather-app/blob/main/LICENSE.md)

This is a fully functional demo weather app. Its main purpose is to compose my personal portfolio, but it can also inspire new developers to build a similar app or add modifications of their own into this one.

To know more about this project and all the features contained in it, please access the [About](https://weather.marcelojr.tech/about/intro) and the [Help](https://weather.marcelojr.tech/help) sections of the live demo.

## Installation

If you want to install this project in your computer you should have [NodeJS](https://nodejs.org/en/download) installed in your machine - the current LTS version should work, but this project uses specifically the [16.13.02 version](https://nodejs.org/download/release/v16.13.2/).

Once you've cloned this project to your machine, open your terminal on the main directory and install all backend dependencies with:

```sh
npm install
```

Then go to the react directory with `cd react-app` and install all frontend dependencies with `npm install` again.

Once all that's done, you can start the backend development enviroment by typing on the terminal (while in the main directory):

```sh
npm run dev
```

The server should be running on the _port 5001_.

To run the frontend development enviroment simultaneously you should open another terminal window, got to the `react-app` directory and run:

```sh
npm start
```

The frontend will be available on the _port 3000_.

To enable the calls to all to API endpoints created by the server you should:

1. Create an account on [Mapbox](https://account.mapbox.com/auth/signup/) and get an [access token](https://docs.mapbox.com/help/glossary/access-token/) - it's free;
2. Create an account on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and get an API key - it's free;
3. Create a file called `tokens.ts` on the `/weather-app/src/dist` directory and type the following:

```ts
export const geocodeToken: string = '<INSERT YOUR MAPBOX ACCESS TOKEN HERE>';

export const openWeatherToken: string = '<INSERT YOUR OPENWEATHERMAP API TOKEN HERE';
```

After inserting your API keys, save the file.

4. Open the file `weather-app/react-app/src/components/Weather/WeatherInfo.tsx`, and look for the _serverUrl_ constant (lines 38 and 39). Then do the following substitution:

from this

```ts
// const serverUrl = 'http://localhost:5001'; -> UNCOMMENT THIS LINE
const serverUrl = 'https://weather.marcelojr.dev'; // -> DELETE THIS LINE
```

to this

```ts
const serverUrl = 'http://localhost:5001';
```

5. Do the exact same thing of the step 4 on the file `weather-app/react-app/src/components/Weather/WeatherForm/WeatherSearchBar.tsx`(should be on lines 29 and 30).

After doing these steps, it's possible to fetch the weather and geolocation data from the development enviroment.

## Final Considerations

This is project uses the [GPL-3.0 license](https://github.com/marcelonogjr/weather-app/blob/main/LICENSE.md).

If you have any questions, suggetions or compliments (why not?) about this or other projects, please contact me at <marcelo@marcelojr.tech>.
