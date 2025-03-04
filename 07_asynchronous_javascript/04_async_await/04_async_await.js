async function fetchData() {
    try {
      console.log('Starting fetch operation...');
      
      let response = await fetch('https://api-qa.oscp.gnp.com.mx/sce/cut/politicasIngresos?' +
        'banco=0002%7C0012&concepto=0001&metodoPago=04%7C05%7C06&ramo=VI&importe=45&' +
        'primaAnualizada=0&medioPago=1');
      
      console.log('Received response:', response);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      let data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  