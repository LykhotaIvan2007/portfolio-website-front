import { useEffect, useState } from "react";
import Button from "../../components/Ui/Button/Button.jsx";
import styles from "./Documentation.module.scss";
import YearsBar from "../../components/documentationComponents/YearsBar/YearsBar.jsx";
import DocumentsBar from "../../components/documentationComponents/DocumentsBar/DocumentsBar.jsx";

const Documentation = () => {
    const years = [
        { id: 1, date: "2025–2026" },
        { id: 2, date: "2026–2027" },
        { id: 3, date: "2027–2028" },
        { id: 4, date: "2028–2029" },
    ];

    const periods = ["P1", "P2", "P3", "P4"];
    const semesters = ["Sem 1", "Sem 2"];

    const [selected, setSelected] = useState({
        year: 1,
        period: 1,
        semester: 0,
    });

    const [open, setOpen] = useState(1);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const setClicked = (yearId) => {
        setOpen(yearId);

        setSelected((prev) => ({
            ...prev,
            year: yearId,
        }));
    };

    useEffect(() => {
        const controller = new AbortController();

        const retrieveData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8000/api/getdocs/",
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Failed to load documents.");
                }

                const data = await response.json();

                const groupedDocs = data.reduce((groups, document) => {
                    // Ищем группу года и периода
                    let group = groups.find(
                        (item) =>
                            item.year === document.year &&
                            item.period === document.period
                    );

                    // Создаём группу, если её ещё нет
                    if (!group) {
                        group = {
                            year: document.year,
                            period: document.period,
                            documents: [],
                        };

                        groups.push(group);
                    }

                    // Ищем тему внутри группы
                    let subject = group.documents.find(
                        (item) => item.thema === document.thema
                    );

                    // Создаём тему, если её ещё нет
                    if (!subject) {
                        subject = {
                            thema: document.thema,
                            docs: [],
                        };

                        group.documents.push(subject);
                    }

                    subject.docs.push(document);

                    return groups;
                }, []);

                if (!controller.signal.aborted) {
                    setFilteredData(groupedDocs);
                }
            } catch (err) {
                if (!controller.signal.aborted) {
                    setError("Failed to load documents.");
                    console.error(err);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        retrieveData();

        return () => controller.abort();
    }, []);

    // Темы, которые нужно показать для текущего выбора
    const visibleSubjects = [];

    filteredData.forEach((group) => {
        if (group.year !== selected.year) {
            return;
        }

        let matches = false;

        if (selected.period !== 0) {
            matches = group.period === selected.period;
        } else if (selected.semester === 1) {
            matches = group.period === 1 || group.period === 2;
        } else if (selected.semester === 2) {
            matches = group.period === 3 || group.period === 4;
        }

        if (!matches) {
            return;
        }

        // Объединяем документы одинаковых тем
        group.documents.forEach((subject) => {
            const existingSubject = visibleSubjects.find(
                (item) => item.thema === subject.thema
            );

            if (existingSubject) {
                existingSubject.docs.push(...subject.docs);
            } else {
                visibleSubjects.push({
                    thema: subject.thema,
                    docs: [...subject.docs],
                });
            }
        });
    });

    return (
        <div className={styles.mainDiv}>
            <div className={styles.pageContainer}>
                <Button variant="primary" to="/">
                    Return to home page
                </Button>

                <section className={styles.documentationSection}>
                    <div className={styles.headerText}>
                        <p>02 / Study archive</p>
                        <h2>University documentation</h2>
                    </div>

                    <div className={styles.centralSection}>
                        {/**/}
                        <YearsBar
                            years={years}
                            setClicked={setClicked}
                            setOpen={setOpen}
                            periods={periods}
                            selected={selected}
                            setSelected={setSelected}
                            semesters={semesters}
                            open={open}
                        />


                        {/**/}
                        <DocumentsBar
                            selected={selected}
                            loading={loading}
                            error={error}
                            visibleSubjects={visibleSubjects}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Documentation;