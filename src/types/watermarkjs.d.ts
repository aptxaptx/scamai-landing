declare module 'watermarkjs' {
  export default function watermark(
    sources: any[],
    options?: any
  ): {
    image: (fn: (target: any) => any) => any;
    then: (fn: (img: any) => any) => any;
  };
}
