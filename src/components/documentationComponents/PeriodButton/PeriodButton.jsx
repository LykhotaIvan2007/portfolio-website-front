import styles from "./PeriodButton.module.scss";

const PeriodButton = (props) => {
    const {
        period,
        selected,
        year,
        setSelected,
        index,
    } = props
    return(
        <button
            key={period}
            type="button"
            className={`${styles.periodButton} ${
                selected.year === year.id &&
                selected.period === index + 1
                    ? styles.selectedButton
                    : ""
            }`}
            aria-pressed={
                selected.year === year.id &&
                selected.period === index + 1
            }
            onClick={() =>
                setSelected({
                    year: year.id,
                    period: index + 1,
                    semester: 0,
                })
            }
        >
            {period}
        </button>
    )
}
export default PeriodButton