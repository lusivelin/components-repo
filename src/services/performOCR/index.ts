import { createWorker } from "tesseract.js";

async function performOCR(image: string): Promise<string> {
  const worker = await createWorker();
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const { data } = await worker.recognize(image);
  await worker.terminate();
  return data.text;
}

export default performOCR;
