import CvPdf from '../media/pdf/SultanovaAnahit_cv.pdf';

export const CV_FILE_NAME = 'Sultanova_Anahit_CV.pdf';

// Downloads the CV with a friendly file name (same behaviour as before, now reusable).
export const downloadCv = () => {
  fetch(CvPdf)
    .then((response) => response.blob())
    .then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = CV_FILE_NAME;
      link.click();
      window.URL.revokeObjectURL(fileURL);
    });
};
