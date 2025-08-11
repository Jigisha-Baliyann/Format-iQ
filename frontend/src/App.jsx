import FileUploader from './components/FileUploader';

function App() {
    const handleParse = (data) => {
        console.log('Parsed Response:', data);
        // Display fonts, margins, etc.
    };

    return (
        <div className="p-4">
            <FileUploader onParse={handleParse} />
            {/* Add UI to show parsed results */}
        </div>
    );
}
