const fs = require('fs');
const jsData = fs.readFileSync('js/data.js', 'utf8');
eval(jsData.replace('const ACADEMY_DATA', 'global.ACADEMY_DATA'));

['upsc', 'mpsc'].forEach(courseId => {
  const course = ACADEMY_DATA.courses.find(c => c.id === courseId);
  console.log('=== COURSE:', course.title, '===');
  const stagesHtml = course.aboutExam.stages.map(stage => 
    `<div class="stage-card"><h4>${stage.title}</h4><span>${stage.marks}</span><p>${stage.details}</p></div>`
  ).join('');
  console.log('Generated stages count:', course.aboutExam.stages.length, 'HTML Length:', stagesHtml.length);
  if (course.aboutExam.patternTables) {
    console.log('Has pattern tables:', Object.keys(course.aboutExam.patternTables));
  }
  if (course.aboutExam.patternImage) {
    console.log('Has pattern image:', course.aboutExam.patternImage);
  }
});
