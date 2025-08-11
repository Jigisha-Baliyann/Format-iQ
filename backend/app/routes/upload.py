from fastapi import APIRouter, UploadFile, File
import tempfile
import fitz
import docx

router = APIRouter()

@router.post('/upload')
async def upload_file(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(await file.read())
        path = tmp.name

    if file.filename.lower().endswith('.pdf'):
        return parse_pdf(path)
    elif file.filename.lower().endswith('.docx'):
        return parse_docx(path)
    return {'error': 'Unsupported format'}

def parse_pdf(path):
    doc = fitz.open(path)
    fonts = set()
    for page in doc:
        for block in page.get_text('dict')['blocks']:
            if 'lines' in block:
                for line in block['lines']:
                    for span in line['spans']:
                        fonts.add((span['font'], span['size']))
    return {'type': 'PDF', 'fonts': list(fonts)}

def parse_docx(path):
    document = docx.Document(path)
    fonts = set()
    for para in document.paragraphs:
        for run in para.runs:
            fonts.add((run.font.name, str(run.font.size)))
    return {'type': 'DOCX', 'fonts': list(fonts)}
