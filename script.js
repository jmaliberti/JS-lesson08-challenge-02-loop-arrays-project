var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

console.log(programmingLanguages);

for(var language of programmingLanguages) {
  console.log(`I want to learn ${language}.`);
};

programmingLanguages.forEach(function (language, index) {
  console.log(`${index+1}. ${language}`);
});