
export function createLs(data: any, key: string): void {
  const json = JSON.stringify(data);
  if (typeof window !== 'undefined')
    localStorage.setItem(key, json);
}

export function readLs(key: string): {} {
  let data = null;
  let json: string | null = '';
  if (typeof window !== 'undefined') {
    json = localStorage.getItem(key);
  }
  if (json) {
    data = JSON.parse(json);
  } 
  return data;
}

export function deleteLs(key: string): any {
  if (typeof window !== 'undefined') {
    return localStorage.removeItem(key);
  }
  return;
}