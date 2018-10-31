import React from 'react';
import { Route, Link} from "react-router-dom";
import PlayList from "./PlayList";
import AlbumApi from "../common/AlbumApi";

class Albums extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            listOfArtist: []
        };
    }

    componentDidMount(){
        AlbumApi.getListAlbum().then((response)=>{
            this.setState({
                listOfArtist: response
            })
        });
    }

    render() {

        let { listOfArtist } = this.state;

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <h1>Natiruts</h1>
                    <div className="row">
                    {
                        listOfArtist.map((obj, index) => (
                            <div key={"art-"+index} className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" src={obj.cover_medium} alt="Card image cap"/>
                                    <div className="card-body">
                                        <p className="card-text">{obj.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <Link to={"/albums/"+obj.id}>View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <Route path="/albums/:id" component={PlayList} />
                </div>
            </div>
        )
    }

}

export default Albums