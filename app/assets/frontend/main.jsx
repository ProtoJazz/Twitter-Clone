import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
    {id: 1, name: 'Bob Belcher', body: "Im tweeting! #bobsBurgers"},
    {id: 2, name: 'Louise Belcher', body: "Proud of you dad!"},
    {id: 3, name: 'Gene Belcher', body: 'Explains why this site is so slow suddenly. He\'s dadding it up!'}
]
class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = { tweetsList: []};
    }
    formattedTweets (tweetsList) {
        let formattedList = tweetsList.map(tweet =>{
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        })
        return {
            tweetsList: formattedList
        };
    }
    addTweet (tweetToAdd) {
        $.post("/tweets", {body: tweetToAdd})
        .success( savedTweet => {
            let newTweetsList = this.state.tweetsList;
            newTweetsList.unshift(savedTweet);
            this.setState(this.formattedTweets(newTweetsList));
        }).error(error => console.log(error));


    }
    componentDidMount () {
        console.log("Getting tweets!")
        $.ajax("/tweets")
        .success(data => this.setState(this.formattedTweets(data)))
        .error(error => console.log(error));
    }
    render () {
        return (
          <div className ='container'>
            <TweetBox sendTweet={this.addTweet.bind(this)} />
            <TweetList tweets={this.state.tweetsList}/>
          </div>
        );
    };

}

let documentReady = () => {
    let reactNode =  document.getElementById('react');
    if(reactNode) {
        ReactDOM.render(
            <Main />, reactNode)
    }
};

$(documentReady);
