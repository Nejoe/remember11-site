export const baseUrl = "/remember11-site/";
// 将中文url转码
function encodeURIChinese(url: string): string {
  return url.replace(/[\u4E00-\u9FA5]/g, function (ch) {
    return encodeURIComponent(ch);
  });
}
// 将希腊字母url转码
function encodeURIgreek(url: string): string {
  return url.replace(/[\u0370-\u03FF]/g, function (ch) {
    return encodeURIComponent(ch);
  });
}
// 转码
export function encodeURI(url: string): string {
  return encodeURIChinese(encodeURIgreek(url));
}
