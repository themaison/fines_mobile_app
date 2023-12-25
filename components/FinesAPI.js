export async function getFines(regNumber, stsNumber) {
  try {
    let api_key = 'c0609d2b6a79da20df78f7e301526c46';
    let response = await fetch(
      'http://parser-api.com/parser/fines_api/?key=' + api_key + '&regNumber=' 
      + regNumber + '&sts=' + stsNumber
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
