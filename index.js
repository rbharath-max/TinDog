import dogs from './data.js'
import DogModule from './Dog.js'

let dogArray = ["Rex","Bella","Teddy"]

let isWaiting = false


function getNewDog(){
    const dogName = dogArray.shift()
    const nextNewDog = dogs.filter((filterDog) => filterDog.name === dogName)
    return nextNewDog ? new DogModule (nextNewDog[0]) : "hello"
}

   
function like(){
    isWaiting = false
    if(dogArray.length > 0){
            const likeb = document.getElementById("likeban")
            likeb.classList.add("displaybanner")
            likeb.classList.remove("hidebanner")
            likeb.classList.add("displaybanner")

            setTimeout(() => {
                dogsss = getNewDog()
                render()
                isWaiting = true

            },1000 )
    }else  {
         const likeb = document.getElementById("likeban")
            likeb.classList.add("displaybanner")
            likeb.classList.remove("hidebanner")
            likeb.classList.add("displaybanner")
        setTimeout(() => endSwipe(), 1000 )
    }
   
  
    
}
function nope(){
   isWaiting = false
   if(dogArray.length > 0) {
             const nopeb = document.getElementById("nopeban")
            nopeb.classList.add("displaybanner")
            nopeb.classList.remove("hidebanner")
            nopeb.classList.add("displaybanner")
  
            setTimeout(() => {
                dogsss = getNewDog()
                render()
               isWaiting = true
            },1000 )
   }else  {
        const likeb = document.getElementById("likeban")
            likeb.classList.add("displaybanner")
            likeb.classList.remove("hidebanner")
            likeb.classList.add("displaybanner")
       setTimeout(() => endSwipe(), 2000 )
   }
  

}
function endSwipe(){
        
        const end = setTimeout(() =>{
            document.getElementById("container").innerHTML = `
            <div class="end-swipe">
                    <h3>There are no more dogs in your area</h3> 
                    <h4>Wait for some time to match Again</h4>
                    <p class="end-emoji">🐕</p>
                </div>
            `
        },1000)
        
       

    
}

 document.getElementById("heart").addEventListener("click", like)
  document.getElementById("cross").addEventListener("click", nope)


function render(){
    document.getElementById("render-dog").innerHTML = dogsss.getDogsHtml()
}

let dogsss = getNewDog()
render()