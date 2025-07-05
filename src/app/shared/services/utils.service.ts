import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  private readonly messageService = inject(MessageService);

  public copyToClipboard(text: string, confirmMessage: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.messageService.add({
          severity: 'info',
          summary: 'Copied',
          detail: confirmMessage,
          life: 3000
        });
      })
      .catch(err => {
        console.error('Failed to copy!', err);
      });
  }
}
