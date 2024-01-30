import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes'


//on va iterer sur un tableaau 
    function Content() {
const recipes = data;
//br ligne 14 à retirer plus tard c'est la bordure qui change suivant la taille de l'écran pour le debug
    return (
        <div className="flex-fill container p-20">
            <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
            
            <div className={`card p-20 ${styles.contentCard} br`}>
            
                <div className={styles.grid}>
            
                { recipes.map((r) => (
                    <Recipe key={r.id}  title={ r.title } image={ r.image } />

                )) }
            
                </div>
        </div>
        </div>
    );
}

export default Content;