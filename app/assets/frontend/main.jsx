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

    addTweet (tweetToAdd) {
        let newTweetsList = this.state.tweetsList;
        newTweetsList.unshift({id: Date.now(), name: "Guy Incognito", body: tweetToAdd});
        this.setState({tweetsList: newTweetsList});
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
    ReactDOM.render(
        <Main />,
        document.getElementById('react')
    )
};

$(documentReady);
