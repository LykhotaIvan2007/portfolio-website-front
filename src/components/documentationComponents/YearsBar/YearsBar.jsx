import styles from "./YearsBar.module.scss";
import PeriodButton from "../PeriodButton/PeriodButton.jsx";
import SemesterButton from "../SemesterButton/SemesterButton.jsx";

const YearsBar = (props)=> {
    const {
        years,
        setClicked,
        setOpen,
        periods,
        selected,
        setSelected,
        semesters,
        open,
    } = props
    return(
        <div className={styles.yearsList}>
            {years.map((year) => (
                <div
                    key={year.id}
                    className={`${styles.yearCard} ${
                        open === year.id
                            ? styles.yearCardOpen
                            : ""
                    }`}
                >
                    <h3 className={styles.yearHeading}>
                        <button
                            type="button"
                            className={styles.yearPannel}
                            aria-expanded={open === year.id}
                            aria-controls={`year-${year.id}-content`}
                            onClick={() =>
                                open !== year.id
                                    ? setClicked(year.id)
                                    : setOpen(0)
                            }
                        >
                                            <span className={styles.yearInfo}>
                                                <span className={styles.yearTitle}>
                                                    Year {year.id}
                                                </span>

                                                <span className={styles.yearDates}>
                                                    {year.date}
                                                </span>
                                            </span>

                            <span
                                className={styles.arrow}
                                aria-hidden="true"
                            />
                        </button>
                    </h3>

                    <div
                        id={`year-${year.id}-content`}
                        className={styles.yearContent}
                        hidden={open !== year.id}
                    >
                        <p className={styles.chooseLabel}>
                            Choose period or semester
                        </p>

                        <div className={styles.periodsRow}>
                            {periods.map((period, index) => (
                                <PeriodButton
                                    period={period}
                                    selected={selected}
                                    year={year}
                                    setSelected={setSelected}
                                    index={index}
                                />
                            ))}
                        </div>

                        <div className={styles.semestersRow}>
                            {semesters.map((semester, index) => (
                                <SemesterButton
                                    semester={semester}
                                    selected={selected}
                                    year={year}
                                    setSelected={setSelected}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default YearsBar;