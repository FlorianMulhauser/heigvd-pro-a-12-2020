export interface User {
  _id: String,
  first_name: String,
  last_name: String,
  mail: String,
  password_hash: String,
  name: String,
  course: String[],
  edit: boolean
}
