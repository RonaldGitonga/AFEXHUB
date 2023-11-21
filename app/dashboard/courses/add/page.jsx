import { addCourse } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/courses/addcourse/addcourse.module.css";

const AddCoursePage = () => {
  return (
    <div className={styles.container}>
      <form action={addCourse} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="days" id="days">
          <option value="general">Choose a Category</option>
          <option value="Tuesdays & Thursdays">Tuesdays & Thursdays</option>
          <option value="Saturdays">Saturdays</option>
          <option value="Monday,Wednesday,Friday">Monday,Wednesday,Friday</option>
          <option value="Tuesday,Thursday,Saturday">Tuesday,Thursday,Saturday</option>
         
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="weeks" name="weeks" required />
        <input type="text" placeholder="intake" name="intake" />
        <input type="text" placeholder="cohort" name="cohort" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCoursePage;
