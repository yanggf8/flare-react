// GET requests to /filename would return "Hello, world!"
export const onRequestGet = () => {
    const today = new Date(); 
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;
    return new Response("Hello, Ping and Goufang! Now is " + currentDate);
  }
  
  // POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
  export const onRequestPost = async ({ request }) => {
    const { name } = await request.json()
    return new Response(`Hello, ${name}!`)
  }