import React, { useState } from 'react';

const questions = [
  {
      question: "Apa aktivitas favorit Anda?",
      answers: [
          { text: "Bermain di luar", type: "Anjing" },
          { text: "Tidur sepanjang hari", type: "Kucing" },
          { text: "Berenang", type: "Ikan" },
          { text: "Terbang tinggi", type: "Burung" },
          { text: "Berburu", type: "Serigala" },
          { text: "Menggali lubang", type: "Kelinci" }
      ]
  },
  {
      question: "Apa makanan favorit Anda?",
      answers: [
          { text: "Daging", type: "Anjing" },
          { text: "Ikan", type: "Kucing" },
          { text: "Roti", type: "Burung" },
          { text: "Serangga", type: "Ikan" },
          { text: "Buah", type: "Kelinci" },
          { text: "Segala jenis daging", type: "Serigala" }
      ]
  },
  {
      question: "Apa tempat favorit Anda?",
      answers: [
          { text: "Rumah", type: "Kucing" },
          { text: "Taman", type: "Anjing" },
          { text: "Laut", type: "Ikan" },
          { text: "Pohon", type: "Burung" },
          { text: "Hutan", type: "Serigala" },
          { text: "Lubang di tanah", type: "Kelinci" }
      ]
  },
  {
      question: "Apa sifat Anda yang paling menonjol?",
      answers: [
          { text: "Setia", type: "Anjing" },
          { text: "Mandiri", type: "Kucing" },
          { text: "Tenang", type: "Ikan" },
          { text: "Bebas", type: "Burung" },
          { text: "Cerdik", type: "Serigala" },
          { text: "Pemalu", type: "Kelinci" }
      ]
  }
];

const results = {
  Anjing: "Anda adalah Anjing! Setia dan penuh energi.",
  Kucing: "Anda adalah Kucing! Mandiri dan suka bersantai.",
  Ikan: "Anda adalah Ikan! Tenang dan suka berenang.",
  Burung: "Anda adalah Burung! Bebas dan suka petualangan.",
  Serigala: "Anda adalah Serigala! Cerdik dan suka berburu.",
  Kelinci: "Anda adalah Kelinci! Pemalu dan suka mengunyah."
};

const TesKepribadianHewan = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleAnswerClick = (type) => {
        setAnswers([...answers, type]);
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const frequency = {};
        answers.forEach(answer => {
            frequency[answer] = (frequency[answer] || 0) + 1;
        });
        const resultType = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
        setResult(results[resultType]);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {result ? (
                <div>
                    <h1>Hasil Tes Kepribadian Anda:</h1>
                    <h2>{result}</h2>
                    <button onClick={() => window.location.reload()}>Coba Lagi</button>
                </div>
            ) : (
                <div>
                    <h1>{questions[currentQuestion].question}</h1>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswerClick(answer.type)} style={{ display: 'block', margin: '10px auto', padding: '10px 20px' }}>
                            {answer.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TesKepribadianHewan;
