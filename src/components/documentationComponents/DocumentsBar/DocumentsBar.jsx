import styles from "./DocumentsBar.module.scss";
import Subject from "../Subject/Subject.jsx";

const DocumentsBar = (props) => {
    const{
        selected,
        loading,
        error,
        visibleSubjects,
    } = props
    return (
        <div className={styles.resultDiv}>
            <div className={styles.resultHeader}>
                <p className={styles.breadcrumb}>
                    Year {selected.year}
                </p>

                <h3>
                    {selected.period !== 0
                        ? `Period ${selected.period}`
                        : `Semester ${selected.semester}`}
                    {" documentation"}
                </h3>
            </div>

            <div className={styles.subjectsList}>
                {loading && (
                    <p role="status">Loading documents...</p>
                )}

                {error && <p role="alert">{error}</p>}

                {!loading &&
                    !error &&
                    visibleSubjects.length === 0 && (
                        <p>No documents found.</p>
                    )}

                {visibleSubjects.map((subject) => (
                    <Subject
                        subject={subject}
                    />
                ))}
            </div>
        </div>
    )
}
export default DocumentsBar