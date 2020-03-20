/*
Library for a custom data source for Memento DataBase
to obtaining information from the api at https://openweathermap.org.
See https://openweathermap.org/api.
@param {string} apiKey -- api key.
@example
var openweather = new Openweather("Api key" );
var r = openweather.search(query);
result( r , function(id) { return openweather.extra(id);});
Follows example at
https://github.com/mementodatabase/scripts/blob/master/data-sources/discogs.js
*/

var baseurl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"

function SampleDS (apiKey) {
    this.apiKey = "20092269-c22f-46c2-a8c0-3bf0c4a9f097";
}

SampleDS.prototype.search = function(q) {
  var resultJson = http().get(baseurl + encodeURIComponent(q) + "?key="+ this.apikey);
  var res = JSON.parse(resultJson.body);
  var result = {};
    
  if (res.id !== undefined)
      result['id'] = res['id'] 
  if (res["0"].meta.id !== undefined)
      result['word'] = res["0"].meta.id;
    
  return result;
}
