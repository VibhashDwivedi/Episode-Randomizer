//fetch from backend using fetch api

const form = document.querySelector('#getform');
const res = document.querySelector('#tableresult');

const api = ' http://127.0.0.1:5000'


form.addEventListener('submit' , (e)=>{

    e.preventDefault();

    


    getProducts();
});

const getProducts = async () => {
  
    try{
        const response = await fetch(`${api}/getepisode`)
        const data = await response.json()
        console.log(data)

        const season = Object.values(data.Season)
        const episode = Object.values(data.Episode)
        const title = Object.values(data.Title)

        console.log(Object.values(data.Season))
        console.log(Object.values(data.Episode))
        console.log(Object.values(data.Title))
        
        res.innerHTML = ` <tr style="background-color:blue; color:white; font-weight:700px;">

        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
        </tr>
        <tr>
        <td>${season}</td>
        <td>${episode}</td>
        <td>${title}</td>
        </tr>
        `
    }
    catch(err){
        console.log(err)
    }
        
    
}

//getProducts()








