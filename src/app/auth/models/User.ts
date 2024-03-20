export class User {
  public username: string;
  public password: string;
  public authStatus: string;

  constructor(username?: string, password?: string, authStatus?: string) {
    this.username = username || '';
    this.password = password || '';
    this.authStatus = authStatus || '';
  }
}
