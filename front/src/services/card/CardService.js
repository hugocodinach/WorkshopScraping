
import root from '../.api_root';
import Ajax from '../Ajax';

class CardService {

    getArticleInformations(options) {
        return Ajax.call({
            method: 'GET',
            url:  root.REACT_APP_API_ROOT + 'article/information/?name=' + options.name,
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }
}

export default new CardService();