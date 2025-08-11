import { useState } from 'react';

export default function FileUploader({ onParse }) {
    const [status, setStatus] = useState('');

    const handleFile = async (file) => {
        setStatus(`Uploading ${file.name}...`);
        const fd = new FormData();
        fd.append('file', file);

        const res = await fetch('/upload', { method: 'POST', body: fd });
        const data = await res.json();
        setStatus('Parsed data received');
        onParse(data);
    };

    return (
        <div
            className="border-2 border-dashed p-8 text-center cursor-pointer hover:bg-gray-100"
            onClick={() => document.getElementById('fileInput').click()}
            onDrop={(e) => {
                e.preventDefault();
                handleFile(e.dataTransfer.files[0]);
            }}
            onDragOver={(e) => e.preventDefault()}
        >
            <input
                type="file"
                id="fileInput"
                accept=".pdf,.docx"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
            />
            <p>Drag & Drop or Click to Upload</p>
            <p className="mt-2 text-sm text-gray-600">{status}</p>
        </div>
    );
}
