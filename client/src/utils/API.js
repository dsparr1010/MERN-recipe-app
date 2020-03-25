import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

//named function that maps through multiple arrays from API response
// function mapItems(item) {
//     item.map(x => {
//         console.log(x)
//         return x;
//     })
// }

export default {
    fetchQuery: async (searchValue) => {
        return await axios.get('/api/search', {
            params: {
                searchValue: searchValue
            }
        })
        .then(res => {
            const hits = res.data.hits;
            console.log(hits);
            
            return hits.map(r => {
                //const healthLabels = mapItems(r.recipe.healthLabels)
                console.log(r)
                return {
                    cardId:(uuidv4()),
                    subtitleId:(uuidv4()),
                    ingredientsId:(uuidv4()),
                    name:r.recipe.label,
                    image:r.recipe.image,
                    url:r.recipe.url,
                    subtitle:r.recipe.healthLabels,
                    ingredients:r.recipe.ingredientLines
                }
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
};