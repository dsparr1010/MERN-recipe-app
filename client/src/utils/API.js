import axios from "axios";

export default {
    fetchQuery: async (searchValue) => {
        const count = 1;
        return await axios.get('api/search', {
            params: {
                searchValue
            }
        })
            .then(res => {
                console.log('fetchQuery call hit');
                const hits = res.data.hits;
                console.log(hits);
                
                return hits.map(r => {
                    console.log(r)
                    console.log(r.recipe.label)
                    // return {
                    //     name:r.recipe.label
                    // }
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }




};