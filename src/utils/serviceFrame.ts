export const getIframeUrlFromSession = (id: string): string | null => {
    return sessionStorage.getItem(`iframeUrl_${id}`);
  };
  
  export const setIframeUrlToSession = (id: string, url: string) => {
    sessionStorage.setItem(`iframeUrl_${id}`, url);
  };
  