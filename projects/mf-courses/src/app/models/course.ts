import { Lesson } from './lesson';

export interface Course {
  id: string;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  courseListIcon: string;
  category: string;
  lessonsCount: number;
}

export interface ICourseResponse {
  payload: Course[];
}

export function sortCoursesBySeqNo(c1: Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}
