import request  from 'superagent';

class AlbumApi {

    static getListAlbum(){
        return new Promise((resolve, reject) => {
            let listOfAlbum = [];
            request.get('http://localhost:8082/album')
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        reject(Object.assign({}, err));
                    } else if(res.status >= 200 && res.status <= 207) {
                        listOfAlbum = res.body.list;
                        resolve(listOfAlbum);
                    } else {
                        reject(listOfAlbum);
                    }
                });
        })
    }

    static getListAlbumById(id){
        return new Promise((resolve, reject) => {
            let listOfAlbum = [];
            request.get('http://localhost:8082/album/'+id)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        reject(Object.assign({}, err));
                    } else if(res.status >= 200 && res.status <= 207) {
                        listOfAlbum = res.body.data;
                        resolve(listOfAlbum);
                    } else {
                        reject(listOfAlbum);
                    }
                });
        })
    }

}


export default AlbumApi;