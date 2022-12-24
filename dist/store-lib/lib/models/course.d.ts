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
export interface IResponse {
    payload: Course[];
}
export declare function sortCoursesBySeqNo(c1: Course, c2: Course): number;
