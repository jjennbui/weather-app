import styles from './forecast.module.css'


export default function ContainerFiveDays(
    props: { data2: FiveDays[] }
) {
    return (
        <>
            {
                props.data2 && props.data2.map(({
                    wind,
                    weather,
                    dt_txt,
                    main,
                }: FiveDays, index: number | string) => {
                    const weatherCondition = weather[0].main; 
                    const lastUpdateDate = new Date(dt_txt);
                    
                    return (
                        <div className={styles.container} key={index} style={{ margin: '15px' }}>
                            <div className={styles.weatherCondition}>
                            {weatherCondition === 'Rain' && <img src="/graphics/rain.svg" width={100} height={100}/>}
                            {weatherCondition === 'Clouds' && <img src="/graphics/cloud.svg" width={100} height={100}/>}
                            {weatherCondition === 'Clear' && <img src="/graphics/sun.svg" width={100} height={100}/>}
                            {weatherCondition === 'Wind' && <img src="/graphics/wind.svg" width={100} height={100}/>}
                            {weatherCondition === 'Snow' && <img src="/graphics/snow.svg" width={100} height={100}/>}
                            </div>

                            <div className={styles.temp}>{main.temp.toFixed(1)}°C</div>

                            <div className={styles.info}>
                            <div className={styles.description}>{weather[0].description}</div>
                            <div>Wind:  {wind.speed}</div>
                            <div>{lastUpdateDate.toLocaleDateString()}</div>

                            </div>

                           
                        </div>
                    );
                })
            }
        </>
    );
}
