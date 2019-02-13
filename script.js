'./tweets';

class List extends React.Component {
    render() {
        let itemsElements = this.props.items.map(item => {
            let str = item.created_at;
            let url = item.user.profile_image_url;
            return (
                <tr>
                    <td>
                        <img src={url}/>
                    </td>
                    <td>
                        <p> {item.user.screen_name + " " + str.substring(0, str.length-10)} </p>
                        <p> {item.text} </p>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <h3> Tweets </h3>
                <table>
                    {itemsElements}
                </table>
            </div>
        );
    }
}


ReactDOM.render(
    <List items={tweets} />,
    document.getElementById('root')
);