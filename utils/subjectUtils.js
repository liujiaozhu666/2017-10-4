function processSubject(subject) {
  var title = subject.title;
  // 导演
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + "/";
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 1);
  }
  // 演员
  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + "/";
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 1);
  }
  //剧情
  var genres = subject.genres;
  var genresStr = "";
  for (var index in genres) {
    genresStr = genresStr + genres[index] + "/";
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 1);
  }
  //发行年份
  var year = subject.year;
  var text = "名称：" + title + "\n导演:" + directorStr + "\n主演:" + castStr + "\n类型:" + genresStr + "\n上映年份:" + year;
  subject.text = text;
}

function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}

module.exports = {
  processSubject: processSubject,
  processSubjects : processSubjects

}