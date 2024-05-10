export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // Verificar que los parámetros sean válidos
  if (!Array.isArray(listStudents) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    throw new Error('Los parámetros no son válidos.');
  }

  // Filtrar estudiantes por ciudad y actualizar calificaciones
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
