function ejercicio6() {
function parsearUrl(url) {
  try {
    const urlStr = new URL(url);

    return {
      host: urlStr.host,
      pathname: urlStr.pathname,
      params: Object.fromEntries(urlStr.searchParams.entries())
    };
  } catch (error) {
    console.error('Error al parsear la URL:', error.message);
    return null; // or throw error, but since we need to show in console, maybe return null
  }
}


console.log(parsearUrl('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'));
console.log(parsearUrl('invalid-url')); // to test the exception
}
 ejercicio6();