function parsearUrl(url) {

      const urlStr = new URL(url);

  return {
    host: urlStr.host,
    pathname: urlStr.pathname,
    params: Object.fromEntries(urlStr.searchParams.entries())
  };
}


console.log(parsearUrl('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'));
