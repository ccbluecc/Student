const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]
function getAttendanceRate(student) {
  const attendance = student.attendance.filter(Boolean)
  return (attendance.length / student.attendance.length) * 100
}

function getAvgScore(student) {
  const sumscore = student.testScores.reduce(
    (score, currentScore) => score + currentScore,
    0
  )
  return sumscore / student.testScores.length
}
function underperformStudent(students) {
  let underperformStudents = students
    .map((student) => {
      let attendanceRate = getAttendanceRate(student)
      let avgScore = getAvgScore(student)
      let name = student.name
      return { name, attendanceRate, avgScore }
    })
    .filter((student) => student.attendanceRate < 80 && student.avgScore < 70)
  return underperformStudents
}

console.log(getAttendanceRate(students[0]))
console.log(getAvgScore(students[0]))
console.log(underperformStudent(students))
