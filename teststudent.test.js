const {
  calculateAttendancePercentage,
  calculateAverageTestScore,
  identifyUnderperformingStudents
} = require('./main')

describe('calculateAttendancePercentage', () => {
  it('should calculate the correct attendance percentage', () => {
    const student = {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    }
    const result = calculateAttendancePercentage(student)
    expect(result).toBe(80)
  })
})

describe('calculateAverageTestScore', () => {
  it('should calculate the correct average test score', () => {
    const student = {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    }
    const result = calculateAverageTestScore(student)
    expect(result).toBe(86.6)
  })
})
describe('identifyUnderperformingStudents', () => {
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

  it('should identify underperforming students correctly', () => {
    const underperformingStudents = identifyUnderperformingStudents(students)
    const expectedOutput = [
      {
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
      }
    ]
    expect(underperformingStudents).toEqual(expectedOutput)
  })
})
