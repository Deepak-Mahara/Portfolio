import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const Resume = ({ resumeFile, setResumeFile }) => {
  const onFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <input type="file" onChange={onFileChange} />
      {resumeFile && (
        <div className="resume-preview">
          <Document file={resumeFile}>
            <Page pageNumber={1} renderTextLayer={false} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default Resume;