import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LikeCounterService {
  private likeCounts: { [productId: number]: number } = {};

  getLikeCount(productId: number): number {
    return this.likeCounts[productId] || 0;
  }

  increaseLikeCnt(productId: number): void {
    this.likeCounts[productId] = (this.likeCounts[productId] || 0) + 1;
  }
}
