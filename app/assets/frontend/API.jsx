import ServerActions from './actions/ServerActions';

export default {
    getAllTweets () {
        $.get('/tweets')
            .success(rawTweets => ServerActions.recivedTweets(rawTweets))
            .error(console.log(error));
    }
}