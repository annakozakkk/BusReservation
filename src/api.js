const BASE_URl = "http://localhost:8080"
const RESOURCE_URL =`${BASE_URl}/seats`


const baseRequest = ({url_path ='',method="GET",body =null}) =>{
     const reqParams = {
         method,
         headers: {
             'Content-Type': 'application/json'
         }
     }
     if(body){
         reqParams.body = JSON.stringify(body)
     }
     return fetch(`${RESOURCE_URL}${url_path}`,reqParams).then(
         response=>{
             if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
             }
             return response
         }
     )

}

export const  getAllSeats = () =>{
    return baseRequest({method : "GET"})
        .then(rawResponse => rawResponse.json())
}

export const updateSeat = (id,body) =>{
    return baseRequest({url_path:`/${id}`, method: "PUT",body})
}