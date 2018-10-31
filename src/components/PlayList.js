import React from 'react';
import AlbumApi from "../common/AlbumApi";

class PlayList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.match.params.id,
            listOfMusic: []
        };
        this.handlePlayMusic = this.handlePlayMusic.bind(this);
    }

    handlePlayMusic(item) {
        window.open(item.preview, '_blank');
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
                    <div className="row">
                    {
                        listOfMusic.map((item, index)=>(
                            <div key={"list-"+index} className="col-4">
                                <div className="card" style={{width: '21rem', marginBottom: '2px'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <audio controls src={item.preview} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default PlayList;