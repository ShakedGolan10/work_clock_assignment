import { NextRequest } from 'next/server';

export interface ApplyEntry extends NextRequest {
  json: () => Promise<{logId: string, exitTime: string, enterTime: string}>
}
