import styles from "./Recipe.module.scss";
import { useState } from "react";


//du coup  on va recuperer 2  choses le titre et l'image
//mise en place d'un bind pour récuperer le coeur est voir si il est cliqué ou pas
//si liked est set à true alors on va mettre une classe css qui va changer la couleur du coeur
function Recipe({title, image}) {
//par defaut l'objet $ne sera pas liké.
const [liked, setLiked] = useState(false);

function handleClick() {
setLiked(!liked);
}
    return (
        //on va recuperer le click sur notre élément
        <div onClick={handleClick}   className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={image} alt="recipe" />
            </div>
            <div
                className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
            >
                <h3 className="mb-10">{title}</h3>
                <i className={`fa-solid fa-heart ${liked ? 'text-primary' : ''}`}></i>
            </div>
        </div>
    );
}

export default Recipe;