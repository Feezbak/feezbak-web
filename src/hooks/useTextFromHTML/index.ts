export default function useTextFromHTML(htmlString: string): string {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement?.textContent ? tempElement?.textContent : "";
}
