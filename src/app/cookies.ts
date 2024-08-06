export function getCookie(name: string): string {
  const cookies: string[] = document.cookie.split(";");
  const value: string = cookies.find((c) => c.startsWith(name))?.split("=")[1];

  if (value === undefined) {
    return null;
  }

  return value;
}

export function hasCookies(name: string): boolean {
  const cookies: string[] = document.cookie.split(";");
  const value: string = cookies.find((c) => c.startsWith(name))?.split("=")[1];

  if (value === undefined) {
    return false;
  }

  return true;
}
