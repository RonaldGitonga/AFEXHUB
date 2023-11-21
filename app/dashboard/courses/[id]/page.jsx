import { updateCourse } from "@/app/lib/actions";
import { fetchCourse } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/courses/singlecourse/singlecourse.module.css";
import Image from "next/image";

const SingleCoursePage = async ({ params }) => {
  const { id } = params;
  const course = await fetchCourse(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {course.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateCourse} className={styles.form}>
          <input type="hidden" name="id" value={course.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={course.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={course.price} />
          <label>Weeks</label>
          <input type="number" name="weeks" placeholder={course.weeks} />
          <label>Cohort</label>
          <input
            type="text"
            name="color"
            placeholder={course.cohort || "cohort"}
          />
          <label>Intake</label>
          <textarea
            type="text"
            name="size"
            placeholder={course.intake || "intake"}
          />
          <label>Days</label>
          <select name="days" id="days">
          <option value="general">Choose a Category</option>
          <option value="Tuesdays & Thursdays">Tuesdays & Thursdays</option>
          <option value="Saturdays">Saturdays</option>
          <option value="Monday,Wednesday,Friday">Monday,Wednesday,Friday</option>
          <option value="Tuesday,Thursday,Saturday">Tuesday,Thursday,Saturday</option>
         
        </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={course.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleCoursePage;
