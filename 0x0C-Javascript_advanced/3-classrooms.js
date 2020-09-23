function createClassRoom(numbersOfStudents) {
  const studentSeat = (seat) => {
    return function () {
      return seat;
    };
  };

  const students = new Array();
  for (let index = 0; index < numbersOfStudents; index++) {
    students.push(studentSeat(index + 1));
  }

  return students;
}

const classRoom = createClassRoom(10);
