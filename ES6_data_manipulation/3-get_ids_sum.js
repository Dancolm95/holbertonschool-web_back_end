export default function getStudentIdSum(students) {
  return students.reduce((accum, { id }) => accum + id, 0);
}
