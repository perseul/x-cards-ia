import axios from 'axios';

const api = axios.create({
    //API do Twitter não disponibiliza solicitaçãos a vindas de localhost, https://cors-anywhere.herokuapp.com
    //Foi utilizado para realizar os testes via maquina local.
    baseURL: `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?lang=pt&result_type=popular&q=`
});

export default api;

