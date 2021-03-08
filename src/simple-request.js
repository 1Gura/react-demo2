const url = "https://api.unsplash.com/search/photos?page=1&query=random&client_id=AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg"
const url = "https://api.unsplash.com/photos/?client_id=AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg"
const url = "https://api.unsplash.com/photos?page=1&query/?count=10&client_id=AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg"
const url =
    //"https://api.unsplash.com/photos/random/?count=" +
    "https://api.unsplash.com/photos/?count=" +
    this.state.numberOfPhotos +
    "&client_id=" +
    this.state.clientId;


// const url = "https://api.unsplash.com/photos/?client_id="+
// // this.state.posts+
// // "&client_id="
// this.state.clientId;
//const url = "https://api.unsplash.com/search/photos?page=1&query=random&client_id=AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg"
//const url = "https://api.unsplash.com/photos/?client_id=AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg"
//const url = "https://api.unsplash.com/photos?page=1&query/?count=10&client_id=AjdqGNN2J3YljxoQKuDTucL8mCkxqv-hLhRMpMO3PSg"