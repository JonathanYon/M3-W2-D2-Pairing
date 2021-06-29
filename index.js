window.onload = function() {
    loadFunc()
    
    
}

const loadFunc = async() => {
    let respData = await fetch('https://jsonplaceholder.typicode.com/users')
    let resp = await respData.json()
    console.log(resp)

    
    
    const displayHtml = function () {
        let row = document.querySelector(".row")
        resp.forEach(ele => {
            let col = document.createElement("div")
            col.classList.add("col-12", "col-md-3", "mb-3", "d-flex")
            col.insertAdjacentHTML(`afterbegin`, `<div class="card" style="width: 18rem;">
            
            <div class="card-body">
            <h5 class="card-title">Name: <strong>${ele.name}</strong></h5>
            <p class="card-text"> User Name: <strong>${ele.username}</strong></p>
            <p class="card-text"> Email: <strong>${ele.email}</strong></p>
            <p class="card-text"> Phone: <strong>${ele.phone}</strong></p>
            <p class="card-text">Website: <strong>${ele.website}</strong></p>
            <p class="card-text">Company Name: <strong>${ele.company.name}</strong></p>
            </div>
          </div>`)
          row.appendChild(col)
    
          
        });
    }
    displayHtml()

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










    let dropDown = document.querySelector('.dropdown')
    let div = document.createElement('div')
    div.classList.add('dropdown-menu')

    div.innerHTML = `<a class="dropdown-item" href="#">Name</a>
                     <a class="dropdown-item" href="#">username</a>
                     <a class="dropdown-item" href="#">email</a>`

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
// ************************************************************


