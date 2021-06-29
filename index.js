window.onload = function() {
  loadFunc()
  namesOnly()
  arrOfAddresses()
}
const displayHtml = function (resp) {
  let row = document.querySelector(".row")
  resp.forEach(ele => {
      let col = document.createElement("div")
      col.classList.add("col-12", "col-md-3", "mb-3", "d-flex")
      col.insertAdjacentHTML(`afterbegin`, `<div class="card" style="width: 18rem;">
      
      <div class="card-body">
      <h5 class="card-title">Name: <strong>${ele.name}</strong></h5>
      <p class="card-text"id="user"> User Name: <strong>${ele.username}</strong></p>
      <p class="card-text"> Email: <strong>${ele.email}</strong></p>
      <p class="card-text"> Phone: <strong>${ele.phone}</strong></p>
      <p class="card-text">Website: <strong>${ele.website}</strong></p>
      <p class="card-text">Company Name: <strong>${ele.company.name}</strong></p>
      </div>
    </div>`)
    row.appendChild(col)

    
  });
}

const FilterSearch = () => {
  let theSearch = document.querySelector(".form-control")
  theSearch.addEventListener("keyup", function(){
    let search = this.value.toLowerCase()
    let allH5 = document.querySelectorAll("h5")
    let cols = document.querySelectorAll(".col-12")
    
    for (let i of allH5){
      let item = i.innerHTML.toLowerCase()
      if (item.indexOf(search) == -1){i.parentElement.parentElement.classList.add("d-none")}
      else {i.parentElement.parentElement.classList.remove("d-none")}
    }
  })
}

const dropDown = () => {
  let dropDown = document.querySelector('.dropdown')
  let div = document.createElement('div')
  div.classList.add('dropdown-menu')

  div.innerHTML = `<a class="dropdown-item item-name" href="#">Name</a>
                   <a class="dropdown-item item-user" href="#">username</a>
                   <a class="dropdown-item item-email" href="#">email</a>`

  dropDown.appendChild(div)


  let aTag = document.querySelectorAll('.dropdown-item')
  let input = document.querySelector('.form-control')

  aTag.forEach(element => {
      element.addEventListener('click', () => {
          input.classList.remove('d-none')
          input.setAttribute('placeholder', element.innerText)
              //input.classList.add('d-block')
      })
  })
}

const loadFunc = async() => {
  let respData = await fetch('https://jsonplaceholder.typicode.com/users')
  let resp = await respData.json()
  // console.log(resp)

  
  
 
  displayHtml(resp)

  FilterSearch()

  dropDown()


}
// ************************************************************

const namesOnly = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await response.json()
    // console.log(res)
    let ul = document.querySelector(".second-list")
    
    res.forEach(ele => {
      // console.log(ele.name)
      let li = document.createElement("li")
      li.classList.add("list-group-item")
      li.innerText = ele.name
      ul.appendChild(li)
    })
    
  }catch (err){
    console.log(err)
  }
} 


// const address = (res) => {
//   let ul = document.querySelector(".third-list")
//   let arrAdd = res.map(ele => {
//     return [`${ele.address.street}, ${ele.address.suite}, ${ele.address.city}, (${ele.address.zipcode})`]
    
//   }).flat().sort()
//   console.log(arrAdd)
//   arrAdd.forEach(ele => {
//     let li = document.createElement("li")
//     li.classList.add("list-group-item")
//     li.innerText = ele
//     ul.appendChild(li)
//   })
// }


const arrOfAddresses = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await response.json()
    console.log(res)
    
    let btn = document.querySelector(".btn-primary")
    let ul = document.querySelector(".third-list")
    let arrAdd = res.map(ele => {
    return [`${ele.address.street}, ${ele.address.suite}, ${ele.address.city}, (${ele.address.zipcode})`]
    
    }).flat().sort().reverse()
  
     arrAdd.forEach(ele => {
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.innerText = ele
    ul.appendChild(li)
    console.log(ele)

    })
    
    

    btn.addEventListener("click", () => {
      
    })
      
  }catch (err){
    console.log(err)
  }
} 

// .flat().sort().reverse()