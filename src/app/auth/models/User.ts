export class User {
  public username: string;
  public password: string;
  public rememberMe: boolean;

  constructor(username?: string, password?: string) {
    this.username = username || '';
    this.password = password || '';
    this.rememberMe = false;
  }
}
