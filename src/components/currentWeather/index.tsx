import styles from './currentWeather.module.css'

export default function Container(
    props: { data: CurrentWeather[] }

) {

    return (
        <>
            {
                props.data && props.data.map(({
                    wind,
                    weather,
                    main,
                    dt,
                    name
                }: CurrentWeather, index: number | string) => {
                    const lastUpdateDate = new Date(dt * 1000);
                    const weatherCondition = weather[0].main;

                    return (
                        <div className={styles.container}key={index} style={{ margin: '15px' }}>
                            <div className={styles.info}>
                            <h4 className={styles.name}>{name}</h4>
                            <div className={styles.temp}>{main.temp}°C</div>
                            
                            <div>Wind Speed: {wind.speed} m/s</div>
                            <div>Last Update: {lastUpdateDate.toLocaleDateString()}</div>
                            </div>
                            
                            <div className={styles.weather}>
                                
                                {weatherCondition === 'Rain' && <img src="/graphics/rain.svg" width={150} height={150} />}
                                {weatherCondition === 'Clouds' && <img src="/graphics/cloud.svg" width={150} height={150} />}
                                {weatherCondition === 'Clear' && <img src="/graphics/sun.svg" width={150} height={150} />}
                                {weatherCondition === 'Wind' && <img src="/graphics/wind.svg" width={150} height={150} />}
                                {weatherCondition === 'Snow' && <img src="/graphics/snow.svg" width={150} height={150} />}
                               <div className={styles.condition}>{weather[0].main}</div> 
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}