import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-white border border-black/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-[#1D1D1F]">
        
        {/* Modal Toolbar Header */}
        <div className="bg-[#F5F5F7] px-6 py-4 border-b border-black/5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white text-[#0071E3] border border-black/5 shadow-2xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1D1D1F]">Raahav_Ajith_Flutter_Developer.pdf</h3>
              <div className="text-xs font-mono text-[#86868B]">Official PDF Document • 5+ Years Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0056B3] rounded-full transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#515154] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer / Paper Document Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-[#E5E5EA] flex-1">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[650px]">
            <iframe
              src={`${RESUME_DATA.personal.resumePdfPath}#toolbar=0&navpanes=0`}
              title="Raahav Ajith Resume PDF"
              className="w-full h-[680px] border-none"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F5F5F7] px-6 py-4 border-t border-black/5 flex items-center justify-between flex-shrink-0 text-xs font-mono text-[#86868B]">
          <span>Verified PDF Resume Record</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white hover:bg-slate-100 border border-black/10 text-[#1D1D1F] font-semibold transition-colors shadow-2xs"
            >
              Close
            </button>
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0056B3] rounded-full transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF File
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
