import styles from "./Recipe.module.scss";



//du coup  on va recuperer 2  choses le titre et l'image
function Recipe({title, image}) {
    return (
        <div className={styles.recipe}>
        <div className={styles.imageContainer}>
            <img src={image} alt="recipe" />
        </div>
        <div
            className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
        >
            <h3>{title}</h3>
        </div>
        </div>
    );
}

export default Recipe;