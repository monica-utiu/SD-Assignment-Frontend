export interface UserDto {
  // MAYBE SHOULD HAVE ID AND RATING
  userId: Number;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  phone: string;
  rating:  Number;
  banned: boolean;

}
