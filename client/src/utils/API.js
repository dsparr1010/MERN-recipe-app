import axios from "axios";

export default {
    fetchQuery: async () => {
        return await axios.get('api/search', {
            // params: {
            //     query
            // }
        })
            .then(res => {
                console.log('fetchQuery call hit');
                console.log(res.data);
                return res.json(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }




};