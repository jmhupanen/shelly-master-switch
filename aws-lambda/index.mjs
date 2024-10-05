/* global fetch */

export const handler = async (event, context) => {
    try {
      const options = {
        redirect: 'follow',
        headers: { 'Content-Type': 'application/json' }
      };
  
      const url = process.env.APPS_SCRIPT_URL;
      
      const data = await fetch(url, options).then(res => {
        return res.json();
      }).then(data => {
        return data;
      });
      
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (e) {
      console.error(e);
      return {
        statusCode: 500,
        body: "Fetch failed"
      };
    }
  };
  