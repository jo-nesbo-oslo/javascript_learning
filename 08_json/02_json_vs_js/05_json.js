fetch('https://api-qa.oscp.gnp.com.mx/sce/cut/politicasIngresos?' +
    'banco=0002%7C0012&concepto=0001&metodoPago=04%7C05%7C06&ramo=VI&importe=45&' +
    'primaAnualizada=0&medioPago=1')
    .then((response) => response.json())
    .then((data) => console.log(data));
