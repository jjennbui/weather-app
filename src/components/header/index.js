import styles from './header.module.css'
import Image from 'next/image'

export default function Header(){
    return(
        <div className={styles.header}>
 <div className={styles.logo}>
<Image src={'/graphics/logo.svg'} width={150} height={150}></Image>
 </div>
        
        </div>

       
    )
  
}