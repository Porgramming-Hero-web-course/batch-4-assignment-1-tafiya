interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  person: Profile,
  updateData: Partial<Profile>
): Profile => {
  return { ...person, ...updateData };
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 29 }));
