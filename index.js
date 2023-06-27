
function introduction(name) {
  return (`Hi, my name is ${name}.`);
  //console.log(`Hi, my name is ${name}.`);
}

// introduction("Aki");
// introduction("Samip");


function introductionWithLanguage(name, language = "JavaScript") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
