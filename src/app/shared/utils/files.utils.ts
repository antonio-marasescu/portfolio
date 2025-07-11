export async function downloadFileByUrl(url: string, filename: string): Promise<void> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobURL = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobURL;
    link.setAttribute('download', filename);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(blobURL);
  } catch (error) {
    console.error('Error downloading the file:', error);
  }
}
