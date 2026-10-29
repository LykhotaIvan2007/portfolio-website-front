import styles from './Document.module.scss'
const Document = (props) => {
    const{
        doc,
    } = props
    return(
        <article
            className={styles.documentCard}
            key={doc.id}
        >
                                                    <span
                                                        className={styles.fileIcon}
                                                        aria-hidden="true"
                                                    >
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                                                            <path d="M14 3v5h5M9 12h6M9 16h6" />
                                                        </svg>
                                                    </span>

            <div className={styles.documentInfo}>
                <h5>{doc.title}</h5>
                <p>{doc.description}</p>
            </div>

            {doc.doc && (
                <a
                    href={doc.doc}
                    download
                    className={styles.downloadButton}
                    aria-label={`Download ${doc.title}`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4" />
                    </svg>

                    <span>Download</span>
                </a>
            )}
        </article>
    )
}
export default Document