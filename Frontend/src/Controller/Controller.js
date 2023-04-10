// Dynamic function to handle every api call  

export const fetchApi=async (Method,uri,payload)=>
{
    let empty;
    const response = await fetch(uri, {
        method: Method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',

        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: payload==""?empty :JSON.stringify(payload) // body data type must match "Content-Type" header
      })

      const data=await response.json();

  

      return data;
}
