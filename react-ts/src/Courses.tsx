interface Course{
  href: string;
  name: string;
}
interface CoursesProps{
  data: Course[]
}
export function Courses({data}: CoursesProps){
  return(
    <div>
      {
        data.map((course: Course) => <a href={course.href}>{course.name}</a>)
      }
    </div>
  )
}