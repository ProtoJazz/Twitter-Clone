export default class Tweet extends React.Component {
    render () {
        return (
            <li className="collection-item avatar">
                <i className="material-icons circle green">person_pin</i>
                <span className="title">{this.props.name}</span>
                <time>{this.props.created_at}</time>
                <p>{this.props.body}
                </p>
            </li>

        )
    }
}