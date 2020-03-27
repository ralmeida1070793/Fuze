export interface AttachmentModel {
  id: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  canDownload: boolean;
  isPreviewAvailable: boolean;
  previewUrl: string;
  previewColor: string;
  previewWidth: number;
  previewHeight: number;
  fileOrigin: string;
  favIcon: string;
  description: string;
  url: string;
}
