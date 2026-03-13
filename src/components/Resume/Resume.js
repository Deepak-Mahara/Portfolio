import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import resume from '../../assets/CVLatest.pdf';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="resume-preview">
        <Document file={resume}>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;