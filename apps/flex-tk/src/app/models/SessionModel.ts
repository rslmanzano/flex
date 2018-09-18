/** TodoMVC model definitions **/

export interface SessionModel {
  readonly accessToken: string;
  readonly loggedIn: boolean;
  readonly userId: string | number | any;
}
