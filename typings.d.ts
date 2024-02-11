interface CurrentWeather {
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    weather: [{
        id: number;
        main: string;
        description: string;
    }];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    dt: number;

    name: string;
}

interface FiveDays {
    //in list array
    main: {
      temp: number;
    };
    weather: [
      {
        main: string;
        description: string;
      }
    ];
    wind: {
      speed: number;
    };
    dt_txt: string; 
  }
  