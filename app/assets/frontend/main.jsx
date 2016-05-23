import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetStore from './stores/TweetStore';
import TweetActions from './actions/TweetActions';
TweetActions.getAllTweets();



let mockTweets = [
    {id: 1, name: 'Bob Belcher', body: "Im tweeting! #bobsBurgers"},
    {id: 2, name: 'Louise Belcher', body: "Proud of you dad!"},
    {id: 3, name: 'Gene Belcher', body: 'Explains why this site is so slow suddenly. He\'s dadding it up!'}
];

let getAppState = () => {
    return {tweetsList: TweetStore.getAll()};
};
class Main extends React.Component {
    constructor (props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = getAppState();
    }

    componentDidMount () {
        TweetStore.addChangeListener(this._onChange);
    }

    componentWillUnmount () {
        TweetStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        console.log (5, 'main._onCHange');
        this.setState(getAppState());
    }

    render () {
        return (
          <div className ='container'>
            <TweetBox />
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
