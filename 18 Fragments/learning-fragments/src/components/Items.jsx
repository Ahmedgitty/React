import styles from "./Items.module.css";

const Items = ({foodItems, handleBuyButtonClick}) => {
    
// const handleBuyButtonClick = (event) => {
//     console.log(event);
//     console.log(`${foodItems} bought!`);
// };

    return (
        < li className={`${styles["kg-item"]} list-group-item`}>
           <span className={styles["kg-span"]}> {foodItems}</span>
           <button className={`${styles.button} btn btn-info`} onClick={handleBuyButtonClick} >Buy</button>
          </li>
    );
};

export default Items;