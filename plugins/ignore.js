/**
 * Plugin used to ignore non-supported statements.
 */
 /**
  * Preprocessing javascript file.
  * @module ignore
  */
 /**
  * @function
  * @param {event} e event from jsdoc after a file is loaded.. it contains filename and source.
  */
 function ignore(e){
 	var source = e.source;
 	// let's try to remove preprocessor not supported.
 	// @scriptLoader(
  	//	'https://static.opentok.com/v2/js/opentok.min.js'
	//)
	source = source.replace("@scriptLoader", "dummy");
	e.source = source;
 }
 exports.handlers = {
 	beforeParse: ignore
 };