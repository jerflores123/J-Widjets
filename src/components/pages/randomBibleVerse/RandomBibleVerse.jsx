import React, { useEffect, useState } from 'react';

const RANDOM_VERSES = [
    'John 3:16',
    'Romans 8:28',
    'Psalm 23:1',
    'Philippians 4:13',
    'Proverbs 3:5',
    'Isaiah 41:10',
    'Matthew 11:28',
    'Joshua 1:9',
    '1 Corinthians 13:4',
    '2 Timothy 1:7'
];

const RandomBibleVerse = () => {
    const [verseText, setVerseText] = useState('');
    const [reference, setReference] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRandomVerse = async () => {
        const randomRef = RANDOM_VERSES[Math.floor(Math.random() * RANDOM_VERSES.length)];
        setReference(randomRef);
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://bible-api.com/${encodeURIComponent(randomRef)}`);
            if (!res.ok) throw new Error('Failed to fetch verse.');
            const data = await res.json();
            setVerseText(data.text.trim());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomVerse();
    }, []);

    return (
        <div style={styles.container}>
            {loading && <p>Loading...</p>}
            {error && <p style={styles.error}>Error: {error}</p>}
            {!loading && verseText && (
                <>
                    <blockquote style={styles.verse}>{verseText}</blockquote>
                    <p><strong>{reference}</strong></p>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        index: '1000',
    },
    verse: {
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#333',
        margin: '20px 0',
    },
    error: {
        color: 'crimson',
    }
};

export default RandomBibleVerse;