import React from 'react';
import AlbumApi from "../common/AlbumApi";

class PlayList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.match.params.id,
            listOfMusic: []
        };
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id);
        AlbumApi.getListAlbumById(id).then((response)=>{
            this.setState({
                listOfMusic: response
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.setState({
                listOfMusic: [{
                    title: "Carregando..."
                }]
            });
            const id = parseInt(nextProps.match.params.id);
            AlbumApi.getListAlbumById(id).then((response)=>{
                this.setState({
                    listOfMusic: response
                });
            });
        }
    }

    render() {

        let { listOfMusic } = this.state;

        return (
            <div>
                <fieldset>
                    <legend>List of music</legend>
                    <ul>
                        {
                            listOfMusic.map((item, index)=>(
                                <li key={"list-"+index}>{item.title}</li>
                            ))
                        }
                    </ul>
                </fieldset>
            </div>
        )
    }
}

export default PlayList;