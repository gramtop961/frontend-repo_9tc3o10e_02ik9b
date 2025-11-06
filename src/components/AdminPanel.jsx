import { useRef, useState } from "react";
import { Upload, FileText, Image as ImageIcon, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminPanel({ open, onClose }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate successful upload. In production, send to backend endpoint.
    setTimeout(() => {
      setStatus("success");
      setMessage("Resource uploaded successfully and visible in catalog.");
      formRef.current?.reset();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/40 p-4 md:items-center">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-base font-semibold">Admin Upload</h3>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">Close</button>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Title</label>
              <input required name="title" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-indigo-200 focus:ring-4" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Price (USD)</label>
              <input required type="number" min="0" step="0.01" name="price" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-indigo-200 focus:ring-4" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Short description</label>
            <textarea required name="description" rows={3} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-indigo-200 focus:ring-4" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Cover image</label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 p-6 text-sm text-gray-600 hover:bg-gray-50">
                <ImageIcon className="h-5 w-5" />
                <span>Upload image</span>
                <input type="file" accept="image/*" className="hidden" required />
              </label>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Resource file (PDF or ZIP)</label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 p-6 text-sm text-gray-600 hover:bg-gray-50">
                <FileText className="h-5 w-5" />
                <span>Upload file</span>
                <input type="file" accept=".pdf,.zip,.docx,.xlsx" className="hidden" required />
              </label>
            </div>
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            <Upload className="h-4 w-4" /> Save resource
          </button>

          {status === "success" && (
            <div className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
              <CheckCircle2 className="mt-0.5 h-4 w-4" /> {message}
            </div>
          )}
          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
              <AlertCircle className="mt-0.5 h-4 w-4" /> {message || "Upload failed"}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
