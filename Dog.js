// Create the Dog class here
// import { getLikesHtml, getNopeHtml } from './utils.js'


class DogModule {
    constructor (data) {
        Object.assign(this, data)
        
    }
    
  
    
    
    getDogsHtml(){
        const {name,avatar,age,bio,} = this
        return `
                <img class="dogs" src="${avatar}">
                <h1 class="sub-text">${name},<span>${age}</span></h1>
                <h2 class="sub-text2">${bio}</h2>
                <img src="images/badge-like.png" class="hidebanner" id="likeban">
                <img src="images/badge-nope.png" class="hidebanner" id="nopeban">

                `
    }
    
}

export default DogModule