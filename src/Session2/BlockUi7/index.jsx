import React from 'react'
import DoD from './components/DoD'
import styles from './BlockUi.module.css';
function BlockUi() {
  return (
<div className={styles.main}> 
    <div className={styles.top}> 
      <span> Deal of the day </span>
      <span> End in: 6:17:17:39 </span> 
      <span> ViewAll </span>
    </div> 

    <div className={styles.container}> 
    <DoD/> 
    <DoD discount1='13'imgProduct='2' titleShop='TECHNO SHOP' discount2='96' discount3='85' discount4='18' productName='Edifier Powered Bookshelf Speakers'/> 
    <DoD discount1='37'imgProduct='3' titleShop='CAM SHOP' discount2='62.99' discount3='45.9' discount4='20' productName='Amcrest Security Camera in White'/> 
    <DoD discount1='27'imgProduct='4' titleShop='BOOKS SHOP' discount2='62.99' discount3='45.9' discount4='15' productName='Grand Slam Indoor of Show Novel'/> 
    <DoD discount1='6'imgProduct='5' titleShop='SONY SHOP' discount2='41.99' discount3='100' discount4='10' productName='Sound Intone I 65 Earl Phone White Version'/> 
  
    <DoD 
     discount1='18'imgProduct='6' titleShop='DECOR SHOP' discount2='670.2' discount3='567.8' discount4='11' productName='Korea Long Sofa Fabric In Blue Navy color'/> 
 <DoD/> <DoD/> <DoD/> <DoD/> 
    </div>
    </div>
    
  )
}

export default BlockUi