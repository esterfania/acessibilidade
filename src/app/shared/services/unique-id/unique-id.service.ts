import { Injectable } from '@angular/core';
import { v1 } from 'uuid';
@Injectable()
export class UniqueIdService {
  generateUniqueIdWithPrefix(prefix: string): string {
    return `${prefix}-${v1()}`;
  }
  private generateUniqueId(): string {
    return v1();
  }
}
