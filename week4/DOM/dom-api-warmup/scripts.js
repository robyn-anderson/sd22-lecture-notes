let container = document.querySelector('.container')

async function getData() {
   let res = await fetch('https://api.spacexdata.com/v3/capsules/upcoming')
   let data = await res.json()  
   renderContent(data)
}

getData()

function renderContent(placeholderForData) {
    console.log(placeholderForData)

    for (i of placeholderForData) {
        let div = document.createElement('div')

        // h2 will hold capsule_serial and capsule_id
        let h2 = document.createElement('h2')
        h2.textContent = `${i.capsule_serial} - ${capsule_id}`

        // p will hold details
        let p = document.createElement('p')
        p.textContent = i.details

        div.appendChild(h2)
        div.appendChild(p)
        container.appendChild(div)

    }  
}
