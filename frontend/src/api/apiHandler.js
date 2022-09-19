/* Rishaab has worked on apiHandler.js*/
import axiosClient from "./apiClient";

export function postTweet(text, tweetify) {
    axiosClient.defaults.headers.common["text"] = text;
    console.log('Inside handle tweet req_header:', axiosClient.headers);
    axiosClient.get('/tweet')
        .then(res => {
                console.log('Inside handle tweet res:',res.data);
                tweetify();
            });
}

export function deleteTweet(id, deleteify, toUnauthdelete) {
    axiosClient.defaults.headers.common["id"] = id;
    console.log('Inside handle delete req_header: ', axiosClient.headers)
    axiosClient.get('/delete')
        .then(res => {
            console.log('Inside handle delete res: ', res.data);
            deleteify()
            setTimeout(() => {
                window.location.href = ('http://localhost:3000');
              }, 3500);
        })
        .catch(err => {
            toUnauthdelete()
        });
}
