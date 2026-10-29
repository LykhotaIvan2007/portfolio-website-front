import styles from "./Subject.module.scss";
import Document from "../Document/Document.jsx";

const Subject = (props) => {
    const {
        subject
    } = props

    return(
        <section
            className={styles.subjectSection}
            key={subject.thema}
        >
            <div className={styles.subjectHeader}>
                <h4>
                    {subject.thema || "Other documents"}
                </h4>

                <span className={styles.documentCount}>
                                                {subject.docs.length}{" "}
                    {subject.docs.length === 1
                        ? "document"
                        : "documents"}
                                            </span>
            </div>

            <div className={styles.documentsDiv}>
                {subject.docs.map((doc) => (
                    <Document
                        doc={doc}
                    />

                ))}
            </div>
        </section>
    )
}
export default Subject