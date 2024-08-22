import Accordion from "./components/Accordion";
import "./index.css";

const faqData = [
  {
    question: "Apa itu React?",
    answer:
      "React adalah pustaka JavaScript untuk membangun antarmuka pengguna.",
  },
  {
    question: "Bagaimana cara menggunakan useState?",
    answer:
      "useState adalah hook di React yang memungkinkan Anda menambahkan state ke komponen fungsional.",
  },
  {
    question: "Apa itu props di React?",
    answer:
      'Props adalah singkatan dari "properties", dan digunakan untuk mengirim data dari satu komponen ke komponen lainnya.',
  },
];

function App() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", alignItems: "center" }}>FAQ</h1>
        <Accordion data={faqData} />
      </div>
    </>
  );
}

export default App;
