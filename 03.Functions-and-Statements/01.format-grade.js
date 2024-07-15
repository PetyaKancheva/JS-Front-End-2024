function solve(grade) {
    let gradePerformance='';
    if (grade < 3) {
        gradePerformance='Fail';
    } else if (grade < 3.50) {
        gradePerformance='Poor';
    } else if (grade < 4.50) {
        gradePerformance='Good';
    } else if (grade < 5.50) {
        gradePerformance='Very good';
    }else{
      gradePerformance='Excellent';
    }
    grade>=3 ?console.log(`${gradePerformance} (${grade.toFixed(2)})`) : console.log(`${gradePerformance} (2)`);
}

solve(4.50);