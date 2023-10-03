//fetch from backend using fetch api

const form = document.querySelector('#getform');
const form2 = document.querySelector('#getform2');
const form3 = document.querySelector('#getform3');
const form4 = document.querySelector('#getform4');
const form5 = document.querySelector('#getform5');
const res = document.querySelector('#tableresult');

const api = ' http://127.0.0.1:5000'


form.addEventListener('submit' , (e)=>{

    e.preventDefault();

    


    getProducts();

});

form2.addEventListener('submit' , (e)=>{

    e.preventDefault();



    getProducts2();


}
);

form3.addEventListener('submit' , (e)=>{
    e.preventDefault();

    getProducts3();

}
);

form4.addEventListener('submit' , (e)=>{
    e.preventDefault();

    getProducts4();

}
);

form5.addEventListener('submit' , (e)=>{
    e.preventDefault();

    getProducts5();

}
);


const getProducts = async () => {
  
    try{
        const response = await fetch(`${api}/getepisode`)
        const data = await response.json()
        console.log(data)

        const season = Object.values(data.Season)
        const episode = Object.values(data.Episode)
        const title = Object.values(data.Title)
        const summary = Object.values(data.Summary)
        const rating = Object.values(data.Stars)

        console.log(Object.values(data.Season))
        console.log(Object.values(data.Episode))
        console.log(Object.values(data.Title))

        
        res.innerHTML = ` <tr style="background-color:blue; color:white; font-weight:700px;">

        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
        <th>Summary</th>
        <th>Rating</th>
        </tr>
        <tr>
        <td>${season}</td>
        <td>${episode}</td>
        <td>${title}</td>
        <td>${summary}</td>
        <td>${rating}</td>
        </tr>
        `
    }
    catch(err){
        console.log(err)
    }
        
    
}
const getProducts2 = async () => {
  
    try{
        const response = await fetch(`${api}/getepisodehimym`)
        const data = await response.json()
        console.log(data)

        const season = Object.values(data.Season)
        const episode = Object.values(data.Episode)
        const title = Object.values(data.Title)
        const summary = Object.values(data.Summary)
         const rating = Object.values(data.Stars)

        console.log(Object.values(data.Season))
        console.log(Object.values(data.Episode))
        console.log(Object.values(data.Title))

        
        res.innerHTML = ` <tr style="background-color:blue; color:white; font-weight:700px;">

        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
        <th>Summary</th>
        <th>Rating</th>
        </tr>
        <tr>
        <td>${season}</td>
        <td>${episode}</td>
        <td>${title}</td>
        <td>${summary}</td>
        <td>${rating}</td>
       
        </tr>
        `
    }
    catch(err){
        console.log(err)
    }
        
    
}

const getProducts3 = async () => {
  
    try{
        const response = await fetch(`${api}/getepisodetbbt`)
        const data = await response.json()
        console.log(data)

        const season = Object.values(data.Season)
        const episode = Object.values(data.Episode)
        const title = Object.values(data.Title)
        const summary = Object.values(data.Summary)
        const rating = Object.values(data.Stars)

        console.log(Object.values(data.Season))
        console.log(Object.values(data.Episode))
        console.log(Object.values(data.Title))

        
        res.innerHTML = ` <tr style="background-color:blue; color:white; font-weight:700px;">

        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
        <th>Summary</th>
        <th>Rating</th>
        </tr>
        <tr>
        <td>${season}</td>
        <td>${episode}</td>
        <td>${title}</td>
        <td>${summary}</td>
        <td>${rating}</td>
        </tr>
        `
    }
    catch(err){
        console.log(err)
    }
        
    
}

const getProducts4 = async () => {
  
    try{
        const response = await fetch(`${api}/getepisodemodernfamily`)
        const data = await response.json()
        console.log(data)

         const season_epi = Object.values(data.Season)

         const str = season_epi.toString()
         const season = str.slice(0, str.indexOf('-'));
         const episode = str.slice(str.indexOf('-') + 1);
        //const episode = Object.values(data.Episode)
        //const episode = after_.split(',')
        const title = Object.values(data.Title)
        const summary = Object.values(data.Summary)
        const rating = Object.values(data.Stars)

        console.log(Object.values(data.Season))
        //console.log(Object.values(data.Episode))
        console.log(Object.values(data.Title))

        
        res.innerHTML = ` <tr style="background-color:blue; color:white; font-weight:700px;">

        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
        <th>Summary</th>
        <th>Rating</th>
        </tr>
        <tr>
        <td>${season}</td>
        <td>${episode}</td>
        <td>${title}</td>
        <td>${summary}</td>
        <td>${rating}</td>
        </tr>
        `
    }
    catch(err){
        console.log(err)
    }
        
    
}


const getProducts5 = async () => {
  
    try{
        const response = await fetch(`${api}/getepisodetheoffice`)
        const data = await response.json()
        console.log(data)

        const season = Object.values(data.Season)
        const episode = Object.values(data.Episode)
        const title = Object.values(data.Title)
        const summary = Object.values(data.Summary)
        const rating = Object.values(data.Stars)

        console.log(Object.values(data.Season))
        console.log(Object.values(data.Episode))
        console.log(Object.values(data.Title))

        
        res.innerHTML = ` <tr style="background-color:blue; color:white; font-weight:700px;">

        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
        <th>Summary</th>
        <th>Rating</th>
        </tr>
        <tr>
        <td>${season}</td>
        <td>${episode}</td>
        <td>${title}</td>
        <td>${summary}</td>
        <td>${rating}</td>
        </tr>
        `
    }
    catch(err){
        console.log(err)
    }
        
    
}








