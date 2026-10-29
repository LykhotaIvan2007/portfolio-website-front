import styles from "../PeriodButton/PeriodButton.module.scss";

const SemesterButton = (props) => {
    const {
        semester,
        selected,
        year,
        setSelected,
        index,
    } = props
    return(
        <button
            key={semester}
            type="button"
            className={`${styles.periodButton} ${
                selected.year === year.id &&
                selected.semester === index + 1
                    ? styles.selectedButton
                    : ""
            }`}
            aria-pressed={
                selected.year === year.id &&
                selected.semester === index + 1
            }
            onClick={() =>
                setSelected({
                    year: year.id,
                    period: 0,
                    semester: index + 1,
                })
            }
        >
            {semester}
        </button>
    )
}
export default SemesterButton